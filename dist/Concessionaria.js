"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, lista) {
        this.endereco = endereco;
        this.listaDeCarros = lista;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    Concessionaria.prototype.setEndereco = function (endereco) {
        this.endereco = endereco;
    };
    Concessionaria.prototype.getEndereco = function () {
        return this.endereco;
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
