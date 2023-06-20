class Usuario {
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


constructor(userName: string, nome: string, email: string, senha: string, dataNascimento: Date, cpf: string, pais: string, estado: string, cidade: string, rua: string, numero: number, celular: number, foto: string){
     this.userName = userName;
     this.nome = nome;
     this.email = email;
     this.senha = senha;
     this.dataNascimento = dataNascimento;
     this.cpf = cpf;
     this.pais = pais;
     this.estado = estado;
     this.cidade = cidade;
     this.rua = rua;
     this.numero = numero;
     this.celular =celular;
     this.foto = foto;

}
}

export { Usuario };