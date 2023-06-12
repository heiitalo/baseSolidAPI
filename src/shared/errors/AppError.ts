class AppError {
    public readonly message: string;
    public readonly statuscCode: number;

    constructor(message:string, statuscCode:number) {
        this.message = message;
        this.statuscCode = statuscCode
    }
}

export default AppError