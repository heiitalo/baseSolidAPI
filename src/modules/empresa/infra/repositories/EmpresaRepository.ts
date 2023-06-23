import { IEmpresaDTO } from "../entities/IEmpresaDTO";
import { IEmpresaRepository } from "./IEmpresaRepository";
import { Empresa } from "../../../../shared/models/Empresa";

class EmpresaRepository implements IEmpresaRepository {
  async findAll(): Promise<IEmpresaDTO[]> {
    const empresas = await Empresa.find();

    return empresas;
  }

  async findById(id: string): Promise<IEmpresaDTO | null> {
    const empresa = await Empresa.findById(id);

    return empresa;
  }

  async findByEmail(email: string): Promise<IEmpresaDTO | null> {
    const empresa = await Empresa.findOne({email: `${email}` });
    
    return empresa;
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
