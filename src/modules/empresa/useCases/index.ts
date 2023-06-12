import { CadEmpresaController } from "../controllers/CadEmpresaController";
import {FindAllEmpresasController} from "../controllers/FindAllEmpresasController"
import { EmpresaRepository} from "../infra/repositories/EmpresaRepository"
import { CadEmpresaUseCase } from "./CadEmpresa";
import { FindAllEmpresaUseCase } from "./FindAllEmpresa";

const empresaRepository = new EmpresaRepository();

const cadEmpresaUseCase = new CadEmpresaUseCase(
    empresaRepository,
)

const cadEmpresaController = new CadEmpresaController(
    cadEmpresaUseCase
)

const findAllEmpresasUseCase = new FindAllEmpresaUseCase(
    empresaRepository,
)

const findAllEmpresasController = new FindAllEmpresasController(
    findAllEmpresasUseCase
)




export { cadEmpresaUseCase, cadEmpresaController, findAllEmpresasController, findAllEmpresasUseCase}