import {IUSuarioDTO} from "../infra/entities/IUsuarioDTO";
import {IUsuarioRepository} from "../infra/repositories/IUsuarioRepository";

class FindAllUsuarioUseCase {
    constructor(private usuarioRepository: IUsuarioRepository){}

    async execute(): Promise<IUSuarioDTO[]> {
        const usuarios = await this.usuarioRepository.findAll();

        return usuarios;
    }
}

class FindUsuarioByIdUseCase{
    constructor(private usuarioRepository: IUsuarioRepository){}

    async execute(id: string): Promise<IUSuarioDTO | null> {
        const usuario = await this.usuarioRepository.findById(id);

        return usuario;
    }
}

export {FindAllUsuarioUseCase, FindUsuarioByIdUseCase};