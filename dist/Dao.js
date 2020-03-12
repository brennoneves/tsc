"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (object) {
        console.log('inseriu');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('update');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('remover');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('selecionar');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('todos');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
