import { IEmpresaDTO } from "../infra/entities/IEmpresaDTO";
import { IEmpresaRepository } from "../infra/repositories/IEmpresaRepository";

class FindEmpresaByEmailUseCase {
    constructor(private empresaRepository: IEmpresaRepository) {}

    async execute(email: string): Promise<IEmpresaDTO | null> {
        const empresa = await this.empresaRepository.findByEmail(email);

        return empresa;
    }
}

export { FindEmpresaByEmailUseCase };
