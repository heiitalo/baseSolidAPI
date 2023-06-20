import { container } from "tsyringe";
import { IUsuarioRepository } from "../../modules/usuario/infra/repositories/IUsuarioRepository";
import { UsuarioRepository } from "../../modules/usuario/infra/repositories/UsuarioRepository";

container.registerSingleton<IUsuarioRepository>(
    "UsuarioRepository",
    UsuarioRepository
)