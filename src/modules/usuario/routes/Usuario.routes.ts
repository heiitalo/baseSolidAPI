import { Router } from "express";
import {CadUsuarioController, FindAllUsuarioController, FindUsuarioByIdController, LoginUsuarioController} from "../controllers/UsuarioController"
import { checkToken } from "../../../shared/middlewares/Usuario/Auth";

const cadUsuarioController = new CadUsuarioController();
const findAllUsuarioController = new FindAllUsuarioController();
const findUsuarioByIdController = new FindUsuarioByIdController();
const loginUsuarioController = new LoginUsuarioController();

const usuarioRoute = Router();

usuarioRoute.post('/', cadUsuarioController.create)

usuarioRoute.post('/login', loginUsuarioController.login)

usuarioRoute.get('/', findAllUsuarioController.findAll);

usuarioRoute.get('/:id', checkToken, findUsuarioByIdController.findById)

export { usuarioRoute };
