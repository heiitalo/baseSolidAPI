import { Request, Response } from "express";
import { CadEmpresaUseCase } from "../useCases/CadEmpresa";

class CadEmpresaController {
  constructor(private cadEmpresaUseCase: CadEmpresaUseCase) {}
  
  async create(req: Request, res: Response): Promise<Response> {
    const { name, empresaName, email, telefone } = req.body;

    try {
      await this.cadEmpresaUseCase.execute({
        name,
        empresaName,
        email,
        telefone,
      });

      return res.status(201).json({
        message: "empresa cadastrado",
      });
    } catch (err) {
      return res.status(400).json({
        err,
      });
    }
  }
}
export { CadEmpresaController };
