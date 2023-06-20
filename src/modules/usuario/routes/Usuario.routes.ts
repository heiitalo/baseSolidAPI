import { Router } from "express";
import { findAllUsuariosController, findUsuarioByIdController} from "../useCases"
import {CadUsuarioController} from "../controllers/CadUsuarioController";

const cadUsuarioController = new CadUsuarioController();


const usuarioRoute = Router();

usuarioRoute.post('/', cadUsuarioController.create)
// usuarioRoute.post("/", (req, res) => {
//     return cadUsuarioController.create(req, res);
// });
usuarioRoute.get("/", (req, res)=> {
    return findAllUsuariosController.execute(req, res);
});

usuarioRoute.get("/:id", (req, res) => {
    return findUsuarioByIdController.execute(req, res);
})

export { usuarioRoute };
