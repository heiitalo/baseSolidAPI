import { IUSuarioDTO } from "../entities/IUsuarioDTO";
import { IUsuarioRepository } from "./IUsuarioRepository";
import { Usuario } from "../../../../shared/models/Usuario";

class UsuarioRepository implements IUsuarioRepository {
  async register({
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
  }: IUSuarioDTO): Promise<void> {
    await Usuario.create({
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
    });
  }

  async findAll(): Promise<IUSuarioDTO[]> {
    const usuarios = await Usuario.find();
    //console.log(usuarios)
    return usuarios;
  }

  async findById(id: string): Promise<IUSuarioDTO | null> {
    const empresa = await Usuario.findById(id);

    return empresa;
  }
}

export { UsuarioRepository };
