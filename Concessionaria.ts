export default class Concessionaria{
    private endereco : string
    private listaDeCarros : Array<Carro>

    constructor(endereco:string, lista:Array<Carro>){
        this.endereco=endereco
        this.listaDeCarros=lista

    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros():Array<Carro>{
        return this.listaDeCarros
    }

    public setEndereco(endereco:string):void{
        this.endereco=endereco
    }

    public getEndereco():string{
        return this.endereco
    }

}