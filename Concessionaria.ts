import {ConcessionariaInterface} from './ConcessionariaInterface'
import Carro from './Carro'
export default class Concessionaria implements ConcessionariaInterface{
    private endereco : string
    private listaDeCarros : Array<Carro>

    constructor(endereco:string, lista:Array<Carro>){
        this.endereco=endereco
        this.listaDeCarros=lista

    }

    public fornecerHorariosDeFuncionamento() :string{
        return 'De Segunda a sexta das 8:18'
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