"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Carro_1 = __importDefault(require("./Carro"));
var Dao_1 = require("./Dao");
var dao = new Dao_1.Dao();
var y = new Carro_1.default('onix', 4);
var x = new Concessionaria_1.default('rua teste', [y]);
dao.inserir(x);
dao.atualizar(x);
dao.remover(1);
dao.selecionar(1);
dao.selecionarTodos();
