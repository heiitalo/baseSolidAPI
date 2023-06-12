import { Router } from "express";
import { empresaRoute } from "../../modules/empresa/routes/Empresa.routes";

const router = Router();

router.use("/empresas", empresaRoute);

export { router };
