import {  ITesteDTO } from "../infra/entities/IEmpresaDTO";
import { IEmpresaRepository } from "../infra/repositories/IEmpresaRepository";

class FindAllEmpresaUseCase {
    constructor(
        private empresaRepository: IEmpresaRepository
    ){}

    async execute(): Promise<ITesteDTO[]>{
      const empresas = await this.empresaRepository.findAll();
      console.log(`empresas ${empresas}`)

      return empresas;
    }
}

export {FindAllEmpresaUseCase}