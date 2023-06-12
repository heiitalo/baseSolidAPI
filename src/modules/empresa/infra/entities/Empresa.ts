class Empresa {
    name: string;
    empresaName: string;
    email: string;
    telefone: string;

    constructor(name: string, email: string, telefone: string, empresaName: string) {
        this.name = name;
        this.empresaName = email;
        this.telefone = telefone;
        this.empresaName = empresaName;
    }
}

export { Empresa } ;