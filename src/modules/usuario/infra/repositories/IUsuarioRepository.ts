import { IUSuarioDTO } from "../entities/IUsuarioDTO";

interface IUsuarioRepository {
    register(usuario: IUSuarioDTO): Promise <void>;
    findAll(): Promise<IUSuarioDTO[]>;
    findById(id: string): Promise<IUSuarioDTO | null>;
}

export { IUsuarioRepository};