import { Router } from "express";
import { cadEmpresaController, findAllEmpresasController, findEmpresaByIdController, findEmpresaByEmailController } from "../useCases";


const empresaRoute = Router();


empresaRoute.post("/", (req, res) => {
    return  cadEmpresaController.create(req, res);
});
empresaRoute.get("/", (req, res) => {
    return findAllEmpresasController.execute(req, res);
})
empresaRoute.get("/:id", (req, res) => {
    return findEmpresaByIdController.execute(req, res);
})
empresaRoute.get("/email/:email",(req, res) => {
    return findEmpresaByEmailController.execute(req, res);
})
// empresaRoute.get("/", empresaController.findAll);
// empresaRoute.get("/:id", empresaController.findById);
// empresaRoute.patch("/:id", empresaController.update);

export { empresaRoute };
