import { ITesteDTO } from "../infra/entities/IEmpresaDTO";
import { IEmpresaRepository } from "../infra/repositories/IEmpresaRepository";

class FindAllEmpresaUseCase {
  constructor(private empresaRepository: IEmpresaRepository) {}

  async execute(): Promise<ITesteDTO[]> {
    const empresas = await this.empresaRepository.findAll();

    return empresas;
  }
}

export { FindAllEmpresaUseCase };
