import { IUSuarioDTO, ICadUSuarioDTO } from "../entities/IUsuarioDTO";

interface IUsuarioRepository {
    register(usuario: ICadUSuarioDTO): Promise <void>;
    findAll(): Promise<IUSuarioDTO[]>;
    findById(id: string): Promise<IUSuarioDTO | null>;
    findByEmail(email: string): Promise<IUSuarioDTO | null>;
}

export { IUsuarioRepository};