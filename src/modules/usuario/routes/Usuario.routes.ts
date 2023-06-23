import { Router } from "express";
import {CadUsuarioController, FindAllUsuarioController, FindUsuarioByIdController} from "../controllers/UsuarioController"

const cadUsuarioController = new CadUsuarioController();
const findAllUsuarioController = new FindAllUsuarioController();
const findUsuarioByIdController = new FindUsuarioByIdController();

const usuarioRoute = Router();

usuarioRoute.post('/', cadUsuarioController.create)

usuarioRoute.get('/', findAllUsuarioController.findAll);

usuarioRoute.get('/:id', findUsuarioByIdController.findById)

export { usuarioRoute };
