import { Request, Response } from "express";
import { FindAllUsuarioUseCase, FindUsuarioByIdUseCase } from "../useCases/FindUsuarioUseCase";

class FindAllUsuariosController {
    constructor(private findAllUsuariosUseCase: FindAllUsuarioUseCase) {}

    async execute(req: Request, res: Response): Promise<Response> {
        const findAllUsuarios = await this.findAllUsuariosUseCase.execute();

        try {
            const usuarios = findAllUsuarios;

            return res.status(200).json(usuarios);
        } catch (err) {
            return res.status(400).json({
                err,
            });
        }
    }
}

class FindUsuarioByIdController{
    constructor(private findUsuarioByidUseCase: FindUsuarioByIdUseCase) {}

    async execute(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const finsUsuarioById = await this.findUsuarioByidUseCase.execute(id);

        return res.status(200).json(finsUsuarioById);
    }
}

export { FindAllUsuariosController, FindUsuarioByIdController };
