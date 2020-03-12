"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var ConcessionariaDao_1 = require("./ConcessionariaDao");
var Carro_1 = __importDefault(require("./Carro"));
var dao = new ConcessionariaDao_1.ConcessionariaDao();
var y = new Carro_1.default('onix', 4);
var x = new Concessionaria_1.default('rua teste', [y]);
dao.inserir(x);
dao.atualizar(x);
dao.remover(1);
dao.selecionar(1);
dao.selecionarTodos();
