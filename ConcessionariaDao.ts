import {DaoInterface} from './DaoInterface'
import Concessionaria from './Concessionaria'
export class ConcessionariaDao implements DaoInterface{

    nomeTabela:string ='tb_concessionaria'

    inserir(object:Concessionaria) :boolean{
        console.log('inseriu')
        return true
    }
    atualizar(object:Concessionaria):boolean{
        console.log('update')
        return true
    }
    remover(id: number): Concessionaria {
        console.log('remover')
        return new Concessionaria('',[])
    }
    selecionar(id:number):Concessionaria {
        console.log('selecionar')
        return new Concessionaria('',[])
    }
    selecionarTodos():[Concessionaria]{
        console.log('todos')
        return [new Concessionaria('',[])]
    }
}