import { Router } from "express";
import {CadUsuarioController, FindAllUsuarioController, FindUsuarioByIdController, LoginUsuarioController} from "../controllers/UsuarioController"

const cadUsuarioController = new CadUsuarioController();
const findAllUsuarioController = new FindAllUsuarioController();
const findUsuarioByIdController = new FindUsuarioByIdController();
const loginUsuarioController = new LoginUsuarioController();

const usuarioRoute = Router();

usuarioRoute.post('/', cadUsuarioController.create)

usuarioRoute.post('/login', loginUsuarioController.login)

usuarioRoute.get('/', findAllUsuarioController.findAll);

usuarioRoute.get('/:id', findUsuarioByIdController.findById)

export { usuarioRoute };
