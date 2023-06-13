import { ITesteDTO } from "../infra/entities/IEmpresaDTO";
import { IEmpresaRepository } from "../infra/repositories/IEmpresaRepository";

class FindEmpresaById {
  constructor(private empresaRepository: IEmpresaRepository) {}

  async execute(id: string): Promise<ITesteDTO | null> {
    const empresa = await this.empresaRepository.findById(id);

    return empresa;
  }
}

export { FindEmpresaById };
