
import {inject, injectable} from "tsyringe"
import { IUSuarioDTO } from "../infra/entities/IUsuarioDTO";
import { IUsuarioRepository } from "../infra/repositories/IUsuarioRepository";
import bcrypt from "bcrypt";
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
    dataNascimento,
    cpf,
    pais,
    estado,
    cidade,
    rua,
    numero,
    celular,
    foto,
  }: IUSuarioDTO): Promise<void> {

    const senhaHash = await bcrypt.hash(senha, 8)
    await this.usuarioRepository.register({
      userName,
      nome,
      email,
      senha: senhaHash,
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
