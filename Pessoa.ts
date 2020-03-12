export default class Pessoa{
    private nome:string 
    private carroPreferido : string
    private carro: Carro

    constructor(nome:string, carroPreferido:string){
        this.nome=nome
        this.carroPreferido=carroPreferido
    }

    public dizerNome():string{
        return this.nome
    }

    public dizerCarro(): string{
        return this.carroPreferido
    }

    public comprarCarro(carro: Carro) :void {
        this.carro=carro
    }

    public carroQueTem():Carro {
       return this.carro
    }
    

}