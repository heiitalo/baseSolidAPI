import { IEmpresaDTO, ITesteDTO } from "../entities/IEmpresaDTO";
import { IEmpresaRepository } from "./IEmpresaRepository";
import { Empresa } from "../../../../shared/models/Empresa";

class EmpresaRepository implements IEmpresaRepository {
  async findAll(): Promise<ITesteDTO[]> {
    const empresas = await Empresa.find();

    return empresas;
  }

  async register({
    name,
    empresaName,
    email,
    telefone,
  }: IEmpresaDTO): Promise<void> {
    await Empresa.create({ name, empresaName, email, telefone });
  }
}

export { EmpresaRepository };
