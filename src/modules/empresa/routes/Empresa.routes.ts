import { Router } from "express";
import { cadEmpresaController, findAllEmpresasController } from "../useCases";


const empresaRoute = Router();


empresaRoute.post("/", (req, res) => {
    return  cadEmpresaController.create(req, res);
});
empresaRoute.get("/", (req, res) => {
    return findAllEmpresasController.execute(req, res);
})
// empresaRoute.get("/", empresaController.findAll);
// empresaRoute.get("/:id", empresaController.findById);
// empresaRoute.patch("/:id", empresaController.update);

export { empresaRoute };
