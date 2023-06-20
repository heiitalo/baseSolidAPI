import { Router } from "express";
import { empresaRoute } from "../../modules/empresa/routes/Empresa.routes";
import { usuarioRoute } from "../../modules/usuario/routes/Usuario.routes";

const router = Router();

router.use("/empresas", empresaRoute);
router.use("/usuarios", usuarioRoute);

export { router };
