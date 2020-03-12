import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

let carroA = new Carro('VW',4)
let carroB = new Carro('ONIX',4)
let carroC = new Carro('Gol',2)

let cliente = new Pessoa('Brenno','ONIX')
let lista: Array<Carro> =[carroA,carroB,carroC]
let x = new Concessionaria('Rua',lista)
x.mostrarListaDeCarros().map((carro : Carro) =>{
    if(carro['modelo']==cliente.dizerCarro()){
        cliente.comprarCarro(carro)
        
    }
        
})

console.log(cliente.carroQueTem())