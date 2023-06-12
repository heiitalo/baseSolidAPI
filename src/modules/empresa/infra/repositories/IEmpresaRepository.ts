import { IEmpresaDTO, ITesteDTO } from "../entities/IEmpresaDTO";

interface IEmpresaRepository {
    register(empresa: IEmpresaDTO): Promise <void>;
    findAll(): Promise<ITesteDTO[]>;
    //findByEmail(email: string): Promise<IEmpresaDTO> | never;
}

export { IEmpresaRepository}