import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T>{
    nomeTabela:string =''

    inserir(object:T) :boolean{
        console.log('inseriu')
        return true
    }
    atualizar(object:T):boolean{
        console.log('update')
        return true
    }
    remover(id: number): T {
        console.log('remover')
        return  Object()
    }
    selecionar(id:number):T {
        console.log('selecionar')
        return  Object()
    }
    selecionarTodos():[T]{
        console.log('todos')
        return [ Object()]
    }

}