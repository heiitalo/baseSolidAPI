import { inject, injectable } from "tsyringe";
import { IUsuarioRepository } from "../infra/repositories/IUsuarioRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ILoginDTO } from "../infra/entities/IUsuarioDTO";
import AppError from "../../../shared/errors/AppError";

@injectable()
class LoginUseCase {
  constructor(
    @inject("UsuarioRepository")
    private usuarioRepository: IUsuarioRepository
  ) {}

  async execute({ email, senha }: ILoginDTO): Promise<string> {
    const usuario = await this.usuarioRepository.findByEmail(email);

    if (usuario) {
      const verifySenha = await bcrypt.compare(senha, usuario.senha);

      if (!verifySenha) {
        throw new AppError("senha inválida", 401);
      }
      const token = jwt.sign({ user: usuario.email }, "teste", {
        expiresIn: "8h",
      });
      return token;
    } else {
      throw new AppError("email inválido", 401);
    }
  }
}

export { LoginUseCase };
