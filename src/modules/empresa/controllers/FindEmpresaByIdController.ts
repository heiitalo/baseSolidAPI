import { Request, Response } from "express";
import { FindEmpresaById } from "../useCases/FindEmpresaById";

class FindEmpresaByIdController {
  constructor(private findEmpresaByIdUseCase: FindEmpresaById) {}

  async execute(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const findEmpresaById = await this.findEmpresaByIdUseCase.execute(id);

    console.log(id);
    return res.status(200). json(findEmpresaById);
  }
}

export { FindEmpresaByIdController };
