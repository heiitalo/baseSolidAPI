export interface IUSuarioDTO {
  //_id: string;
  userName: string;
  nome: string;
  email: string;
  senha: string;
  dataNascimento: Date;
  cpf: string;
  pais: string;
  estado: string;
  cidade: string;
  rua: string;
  numero: number;
  celular: number;
  foto: string;
}
export interface ICadUSuarioDTO {
  userName: string;
  nome: string;
  email: string;
  senha: string;
  confirmaSenha: string;
  dataNascimento: Date;
  cpf: string;
  pais: string;
  estado: string;
  cidade: string;
  rua: string;
  numero: number;
  celular: number;
  foto: string;
}

export interface ILoginDTO {
  email: string;
  senha: string;
}

