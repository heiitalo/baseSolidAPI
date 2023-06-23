import { Router } from "express";
import {EmpresaController} from "../controllers/EmpresaController"

const empresaController = new EmpresaController();

const empresaRoute = Router();

empresaRoute.post('/', empresaController.create);
empresaRoute.get('/', empresaController.findAll);
empresaRoute.get('/:id', empresaController.findById);
empresaRoute.get('/email/:email', empresaController.findByEmail);

export { empresaRoute };
