"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var carroA = new Carro_1.default('VW', 4);
var carroB = new Carro_1.default('ONIX', 4);
var carroC = new Carro_1.default('Gol', 2);
var cliente = new Pessoa_1.default('Brenno', 'ONIX');
var lista = [carroA, carroB, carroC];
var x = new Concessionaria_1.default('Rua', lista);
x.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarro()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.carroQueTem());
