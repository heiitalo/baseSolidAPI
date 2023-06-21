import { Router } from "express";
import {UsuarioController} from "../controllers/UsuarioController"

const usuarioController = new UsuarioController();

const usuarioRoute = Router();

usuarioRoute.post('/', usuarioController.create)

usuarioRoute.get('/', usuarioController.findAll);

usuarioRoute.get('/:id', usuarioController.findById)

export { usuarioRoute };
