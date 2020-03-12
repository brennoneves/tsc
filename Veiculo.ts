export default class Veiculo{
    protected modelo :string
    protected velocidade:number


    public acelerar(): void{
        this.velocidade = this.velocidade +10
    }

    public parar():void{
        this.velocidade =0
    }

    public velocidadeAtual():number{
        return this.velocidade
    }
}