import { CadEmpresaController } from "../controllers/CadEmpresaController";
import { FindAllEmpresasController } from "../controllers/FindAllEmpresasController";
import { FindEmpresaByEmailController } from "../controllers/FindEmpresaByEmailController";
import { FindEmpresaByIdController } from "../controllers/FindEmpresaByIdController";
import { EmpresaRepository } from "../infra/repositories/EmpresaRepository";
import { CadEmpresaUseCase } from "./CadEmpresa";
import { FindAllEmpresaUseCase } from "./FindAllEmpresa";
import { FindEmpresaByEmailUseCase } from "./FindEmpresaByEmail";
import { FindEmpresaById } from "./FindEmpresaById";

const empresaRepository = new EmpresaRepository();

const cadEmpresaUseCase = new CadEmpresaUseCase(empresaRepository);

const cadEmpresaController = new CadEmpresaController(cadEmpresaUseCase);

const findAllEmpresasUseCase = new FindAllEmpresaUseCase(empresaRepository);

const findAllEmpresasController = new FindAllEmpresasController(
  findAllEmpresasUseCase
);

const findEmpresaByIdUseCase = new FindEmpresaById(empresaRepository);

const findEmpresaByIdController = new FindEmpresaByIdController(
  findEmpresaByIdUseCase
);

const findEmpresaByEmailUseCase = new FindEmpresaByEmailUseCase(
  empresaRepository
);

const findEmpresaByEmailController = new FindEmpresaByEmailController(
  findEmpresaByEmailUseCase
);

export {
  cadEmpresaUseCase,
  cadEmpresaController,
  findAllEmpresasController,
  findAllEmpresasUseCase,
  findEmpresaByIdUseCase,
  findEmpresaByIdController,
  findEmpresaByEmailUseCase,
  findEmpresaByEmailController,
};
