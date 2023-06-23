import { inject, injectable } from "tsyringe";
import { IEmpresaDTO } from "../infra/entities/IEmpresaDTO";
import { IEmpresaRepository } from "../infra/repositories/IEmpresaRepository";

@injectable()
class FindAllEmpresaUseCase {
  constructor(
    @inject("EmpresaRepository")
    private empresaRepository: IEmpresaRepository
  ) {}

  async execute(): Promise<IEmpresaDTO[]> {
    const empresas = await this.empresaRepository.findAll();

    return empresas;
  }
}

@injectable()
class FindEmpresaByEmailUseCase {
  constructor(
    @inject("EmpresaRepository")
    private empresaRepository: IEmpresaRepository
  ) {}

  async execute(email: string): Promise<IEmpresaDTO | null> {
    const empresa = await this.empresaRepository.findByEmail(email);

    return empresa;
  }
}

@injectable()
class FindEmpresaByIdUseCase {
  constructor(
    @inject("EmpresaRepository")
    private empresaRepository: IEmpresaRepository
  ) {}

  async execute(id: string): Promise<IEmpresaDTO | null> {
    const empresa = await this.empresaRepository.findById(id);

    return empresa;
  }
}

export { FindAllEmpresaUseCase, FindEmpresaByEmailUseCase, FindEmpresaByIdUseCase };
