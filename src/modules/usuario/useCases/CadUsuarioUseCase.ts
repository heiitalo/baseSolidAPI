
import {inject, injectable} from "tsyringe"
import { ICadUSuarioDTO } from "../infra/entities/IUsuarioDTO";
import { IUsuarioRepository } from "../infra/repositories/IUsuarioRepository";
import bcrypt from "bcrypt";
import AppError from "../../../shared/errors/AppError";
@injectable()
class CadUsuarioUseCase {
  constructor(
    @inject("UsuarioRepository")
    private usuarioRepository: IUsuarioRepository) {}

  async execute({
    userName,
    nome,
    email,
    senha,
    confirmaSenha,
    dataNascimento,
    cpf,
    pais,
    estado,
    cidade,
    rua,
    numero,
    celular,
    foto,
  }: ICadUSuarioDTO): Promise<void> {
    const emailExists = await this.usuarioRepository.findByEmail(email);
    const senhaHash = await bcrypt.hash(senha, 8)
    
    if(emailExists){
      throw new AppError("email já cadastrado", 401)
    }
    
    if(senha !== confirmaSenha){
      throw new AppError("senha inválida", 401)
    }

    await this.usuarioRepository.register({
      userName,
      nome,
      email,
      senha: senhaHash,
      confirmaSenha: senhaHash,
      dataNascimento,
      cpf,
      pais,
      estado,
      cidade,
      rua,
      numero,
      celular,
      foto,
    });
  }
}

export { CadUsuarioUseCase };
