import { ICadUSuarioDTO, IUSuarioDTO } from "../entities/IUsuarioDTO";
import { IUsuarioRepository } from "./IUsuarioRepository";
import { Usuario } from "../../../../shared/models/Usuario";

class UsuarioRepository implements IUsuarioRepository {
  async register({
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
  }: ICadUSuarioDTO): Promise<void> {
    await Usuario.create({
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
  }

  async findAll(): Promise<IUSuarioDTO[]> {
    const usuarios = await Usuario.find({}, {senha: 0, _id: 0, __v: 0});
    //console.log(usuarios)
    return usuarios;
  }

  async findById(id: string): Promise<IUSuarioDTO | null> {
    const usuario = await Usuario.findById(id, {senha: 0, _id: 0, __v: 0});

    return usuario;
  }

  async findByEmail(email: string): Promise<IUSuarioDTO | null> {
    const usuario = await Usuario.findOne({email: `${email}` });
    
    return usuario;
  }
}

export { UsuarioRepository };
