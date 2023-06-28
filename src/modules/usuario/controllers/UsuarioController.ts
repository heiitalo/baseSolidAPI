import { Request, Response } from "express";
import { container } from "tsyringe";
import { CadUsuarioUseCase } from "../useCases/CadUsuarioUseCase";
import {
  FindAllUsuarioUseCase,
  FindUsuarioByIdUseCase,
} from "../useCases/FindUsuarioUseCase";
import { LoginUseCase } from "../useCases/LoginUseCase";

// class UsuarioController {
//   async create(req: Request, res: Response): Promise<Response> {
//     const {
//       userName,
//       nome,
//       email,
//       senha,
//       dataNascimento,
//       cpf,
//       pais,
//       estado,
//       cidade,
//       rua,
//       numero,
//       celular,
//       foto,
//     } = req.body;

//     const cadUsuarioUseCase = container.resolve(CadUsuarioUseCase);

//     try {
//       await cadUsuarioUseCase.execute({
//         userName,
//         nome,
//         email,
//         senha,
//         dataNascimento,
//         cpf,
//         pais,
//         estado,
//         cidade,
//         rua,
//         numero,
//         celular,
//         foto,
//       });

//       return res.status(201).json({
//         message: "usuario cadastrado",
//       });
//     } catch (err) {
//       return res.status(400).json({
//         err,
//       });
//     }
//   }

//   async findAll(req: Request, res: Response): Promise<Response> {
//     const findAllUsuarios = container.resolve(FindAllUsuarioUseCase);

//     try {
//       const usuarios = await findAllUsuarios.execute();
//       return res.status(200).json(usuarios);
//     } catch (err) {
//       return res.status(400).json({
//         err,
//       });
//     }
//   }

//   async findById(req: Request, res: Response): Promise<Response> {
//     const id = req.params.id;
//     const findUsuarioById = container.resolve(FindUsuarioByIdUseCase);

//     try {
//       const usuario = await findUsuarioById.execute(id);
//       return res.status(200).json(usuario);
//     } catch (err) {
//       return res.status(400).json({
//         err,
//       });
//     }
//   }
// }

class CadUsuarioController {
  async create(req: Request, res: Response): Promise<Response> {
    const {
      userName,
      nome,
      email,
      senha,
      confirmaSenha,
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

    const cadUsuarioUseCase = container.resolve(CadUsuarioUseCase);

    try {
      await cadUsuarioUseCase.execute({
        userName,
        nome,
        email,
        senha,
        confirmaSenha,
        dataNascimento,
        cpf,
        pais,
        estado,
        cidade,
        rua,
        numero,
        celular,
        foto,
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

class FindAllUsuarioController {
  async findAll(req: Request, res: Response): Promise<Response> {
    const findAllUsuarios = container.resolve(FindAllUsuarioUseCase);

    try {
      const usuarios = await findAllUsuarios.execute();
      return res.status(200).json(usuarios);
    } catch (err) {
      return res.status(400).json({
        err,
      });
    }
  }
}

class FindUsuarioByIdController {
  async findById(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const findUsuarioById = container.resolve(FindUsuarioByIdUseCase);

    try {
      const usuario = await findUsuarioById.execute(id);
      return res.status(200).json(usuario);
    } catch (err) {
      return res.status(400).json({
        err,
      });
    }
  }
}

class LoginUsuarioController{
  async login(req: Request, res: Response): Promise<Response> {
    const {email, senha} = req.body

    const loginUsuarioUseCase = container.resolve(LoginUseCase);
    try {
      const token = await loginUsuarioUseCase.execute({
        email,
        senha,
      });
      return res.status(200).json ({
        message: "login OK",
        token: token
      })
    } catch (err) {
      return res. status(401).json({
        err,
      })
    }
  }
}

export {
  CadUsuarioController,
  FindAllUsuarioController,
  FindUsuarioByIdController,
  LoginUsuarioController
};
