import { UsuarioRepository } from "../infra/repositories/UsuarioRepository";

import { CadUsuarioUseCase } from "./CadUsuarioUseCase";
import { CadUsuarioController } from "../controllers/CadUsuarioController";

import {FindAllUsuarioUseCase, FindUsuarioByIdUseCase} from "./FindUsuarioUseCase"
import {FindAllUsuariosController, FindUsuarioByIdController} from "../controllers/FindUsuariosController";


const usuarioRepository = new UsuarioRepository();

const cadUsuarioUseCase = new CadUsuarioUseCase(usuarioRepository);

// const cadUsuarioController = new CadUsuarioController(cadUsuarioUseCase);

const findAllUsuariosUseCase = new FindAllUsuarioUseCase(usuarioRepository);

const findAllUsuariosController = new FindAllUsuariosController(findAllUsuariosUseCase);

const findUsuarioByIduseCase = new FindUsuarioByIdUseCase(usuarioRepository);

const findUsuarioByIdController = new FindUsuarioByIdController(findUsuarioByIduseCase);


export {
    cadUsuarioUseCase,
    // cadUsuarioController,
    findAllUsuariosUseCase,
    findAllUsuariosController,
    findUsuarioByIduseCase,
    findUsuarioByIdController
}