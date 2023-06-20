import { Request, Response } from "express";
import { FindAllEmpresaUseCase } from "../useCases/FindAllEmpresa";

class FindAllEmpresasController {
  constructor(private findAllEmpresasUseCase: FindAllEmpresaUseCase) {}
  
  async execute(req: Request, res: Response): Promise<Response> {
    const findAllEmpresas = await this.findAllEmpresasUseCase.execute();

    try {
      const empresas = findAllEmpresas;
      //console.log(empresas);
      return res.status(200).json(empresas);
    } catch (err) {
      return res.status(400).json({
        err,
      });
    }
  }
}

export { FindAllEmpresasController };
