import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/errors/AppError";
import { IEmpresaDTO } from "../infra/entities/IEmpresaDTO";
import { IEmpresaRepository } from "../infra/repositories/IEmpresaRepository";

@injectable()
class CadEmpresaUseCase {
  constructor(
    @inject("EmpresaRepository")
    private empresaRepository: IEmpresaRepository) {}

  async execute({
    name,
    empresaName,
    email,
    telefone,
  }: IEmpresaDTO): Promise<void> {
    const emailExists = await this.empresaRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError("Email já cadastrado", 400);
    } else {
      await this.empresaRepository.register({
        name,
        empresaName,
        email,
        telefone,
      });
    }
  }
}

export { CadEmpresaUseCase };
