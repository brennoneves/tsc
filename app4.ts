import Concessionaria from './Concessionaria'
import {ConcessionariaDao} from './ConcessionariaDao'
import Carro from './Carro'
import { Dao } from './Dao'

let dao :Dao<Concessionaria> = new Dao<Concessionaria>()
let y = new Carro('onix',4)
let x = new Concessionaria('rua teste',[y])

dao.inserir(x)
dao.atualizar(x)
dao.remover(1)
dao.selecionar(1)
dao.selecionarTodos()
