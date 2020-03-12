export default class Carro {
    private modelo:string
    private numerodePortas:number
    private velocidade:number = 0

    constructor(modelo:string, numeroDePortas : number){
        this.modelo=modelo
        this.numerodePortas=numeroDePortas
    }
    
    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }

    public parar(): void {
        this.velocidade=0

    }

    public veloz(): number{
        return this.velocidade;
    } 
}