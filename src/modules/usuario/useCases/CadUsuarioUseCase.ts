
import {inject, injectable} from "tsyringe"
import { IUSuarioDTO } from "../infra/entities/IUsuarioDTO";
import { IUsuarioRepository } from "../infra/repositories/IUsuarioRepository";

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
    await this.usuarioRepository.register({
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
    });
  }
}

export { CadUsuarioUseCase };
