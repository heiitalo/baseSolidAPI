import { IEmpresaDTO } from "../infra/entities/IEmpresaDTO";
import { IEmpresaRepository } from "../infra/repositories/IEmpresaRepository";

class CadEmpresaUseCase {
    constructor(
        private empresaRepository: IEmpresaRepository
    ){}

    async execute ({name,empresaName, email, telefone}: IEmpresaDTO): Promise <void> {
        await this.empresaRepository.register({
            name,
            empresaName,
            email,
            telefone
        })
    }
}

export { CadEmpresaUseCase}