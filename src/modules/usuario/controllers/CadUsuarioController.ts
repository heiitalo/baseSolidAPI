import { Request, Response } from "express";
import {container} from "tsyringe"
import { CadUsuarioUseCase } from "../useCases/CadUsuarioUseCase";


class CadUsuarioController {
  // constructor(private cadUsuarioUseCase: CadUsuarioUseCase){}

  async create(req: Request, res: Response): Promise<Response> {
    const {
      userName,
      nome,
      email,
      senha,
      dataNascimento,
      cpf,
      pais,
      estado,
      cidade,
      rua,
      numero,
      celular,
      foto,
    } = req.body;

    const cadUsuarioUseCase = container.resolve(CadUsuarioUseCase)

    try {      
      await cadUsuarioUseCase.execute({
        userName,
        nome,
        email,
        senha,
        dataNascimento,
        cpf,
        pais,
        estado,
        cidade,
        rua,
        numero,
        celular,
        foto
      });

      return res.status(201).json({
        message: "usuario cadastrado",
      });
    } catch (err) {
      return res.status(400).json({
        err,
      });
    }
  }
}
export { CadUsuarioController };
