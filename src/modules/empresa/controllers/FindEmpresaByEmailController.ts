import { Request, Response } from "express";
import { FindEmpresaByEmailUseCase } from "../useCases/FindEmpresaByEmail";

class FindEmpresaByEmailController {
  constructor(private findEmpresaByEmailUseCase: FindEmpresaByEmailUseCase) {}

  async execute(req: Request, res: Response): Promise<Response> {
    const email = req.params.email;
    const findEmpresaByEmail = await this.findEmpresaByEmailUseCase.execute(
      email
    );

    return res.status(200).json(findEmpresaByEmail);
  }
}

export { FindEmpresaByEmailController };
