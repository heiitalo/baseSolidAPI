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
        message: "usuario cadastrado",
      });
    } catch (err) {
      return res.status(400).json({
        err,
      });
    }
  }
}
export { CadEmpresaController };
//   async findAll(req: Request, res: Response): Promise<Response> {
//     const empresas = await empresaService.findAllService();

//     if (empresas.length === 0) {
//       return res.status(400).json({ message: "não há empresas cadastradas." });
//     }

//     return res.json(empresas);
//   }

//   async findById(req: Request, res: Response): Promise<Response> {
//     const id = req.params.id;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ message: "id invalido" });
//     }

//     const empresa = await empresaService.findByIdService(id);

//     if (!empresa) {
//       return res.status(400).json({ message: "empresa não encontrada" });
//     }

//     return res.json(empresa);
//   }

//   async update(req: Request, res: Response): Promise<Response> {
//     const { name, email, empresaName, telefone } = req.body;

//     if (!name && !email && !empresaName && !telefone) {
//       return res
//         .status(400)
//         .json({ message: "preencha pelo menos um campo para ser atualizado" });
//     }

//     const id = req.params.id;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ message: "id invalido" });
//     }

//     const empresa = await empresaName.findByIdService(id);

//     if (!empresa) {
//       return res.status(400).json({ message: "empresa não encontrada" });
//     }

//     await empresaName.updateService(
//       id,
//       name,
//       email,
//       empresaName,
//       telefone
//     );

//     return res.status(200).json({ message: "usuario atualizado", empresa });
//   }
