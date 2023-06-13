import { IEmpresaDTO, ITesteDTO } from "../entities/IEmpresaDTO";

interface IEmpresaRepository {
    register(empresa: IEmpresaDTO): Promise <void>;
    findAll(): Promise<ITesteDTO[]>;
    findById(id: string): Promise<ITesteDTO | null>;
    findByEmail(email: string): Promise<IEmpresaDTO | null>
    //findByEmail(email: string): Promise<IEmpresaDTO> | never;
}

export { IEmpresaRepository}