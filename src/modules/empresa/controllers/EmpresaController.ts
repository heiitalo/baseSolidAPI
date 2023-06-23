import { container } from "tsyringe";
import { Request, Response } from "express";
import { CadEmpresaUseCase } from "../useCases/CadEmpresa";
import { FindAllEmpresaUseCase, FindEmpresaByEmailUseCase, FindEmpresaByIdUseCase } from "../useCases/FindEmpresaUseCase";

class EmpresaController {

    async create(req: Request, res: Response): Promise<Response> {
        const { name, empresaName, email, telefone } = req.body;

        const cadEmpresaUseCase = container.resolve(CadEmpresaUseCase)
        try {
          await cadEmpresaUseCase.execute({
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

      async findAll(req: Request, res: Response): Promise<Response> {
        const findAllEmpresas = container.resolve(FindAllEmpresaUseCase);
    
        try {
          const empresas = await findAllEmpresas.execute();
          return res.status(200).json(empresas);
        } catch (err) {
          return res.status(400).json({
            err,
          });
        }
      }

      async findByEmail(req: Request, res: Response): Promise<Response> {
        const email = req.params.email;
        const findEmpresaByEmail = container.resolve(FindEmpresaByEmailUseCase);

        try {
            const empresa = await findEmpresaByEmail.execute(email);
            return res.status(200).json(empresa);
        } catch (err) {
            return res.status(400).json({
                err,
            })
        }
    
      }

      async findById(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const findEmpresaById = container.resolve(FindEmpresaByIdUseCase)

        try{
            const empresa = await findEmpresaById.execute(id);
            return res.status(200).json(empresa);
        }catch (err) {
            return res.status(400).json({
                err,
            })
        }
      }
}

export {EmpresaController}