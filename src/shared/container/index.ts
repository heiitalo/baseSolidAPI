import { container } from "tsyringe";
import { IUsuarioRepository } from "../../modules/usuario/infra/repositories/IUsuarioRepository";
import { UsuarioRepository } from "../../modules/usuario/infra/repositories/UsuarioRepository";
import { IEmpresaRepository } from "../../modules/empresa/infra/repositories/IEmpresaRepository";
import { EmpresaRepository } from "../../modules/empresa/infra/repositories/EmpresaRepository";


container.registerSingleton<IUsuarioRepository>(
  "UsuarioRepository",
  UsuarioRepository
);

container.registerSingleton<IEmpresaRepository>(
  "EmpresaRepository",
  EmpresaRepository
);
