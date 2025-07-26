"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./service/database");
const add_1 = require("./service/add");
const remove_1 = require("./service/remove");
const average_value_1 = require("./controller/average_value");
const average_weight_1 = require("./controller/average_weight");
const list_1 = require("./controller/list");
const quant_itens_1 = require("./controller/quant_itens");
const quant_prod_1 = require("./controller/quant_prod");
const value_1 = require("./controller/value");
const weight_1 = require("./controller/weight");
const readline = __importStar(require("readline-sync"));
let executando = true;
(0, database_1.Iniciadatabase)();
while (executando) {
    const opcao = readline.questionInt("\nQual funcionalidade deseja executar?\n" +
        "1: Adicionar itens\n" +
        "2: Remover itens\n" +
        "3: Verificação de Métricas\n" +
        "4: Sair\n" +
        "Digite a opção desejada: ");
    switch (opcao) {
        case 1:
            (0, add_1.IniciaAdd)();
            break;
        case 2:
            (0, remove_1.IniciaRemove)();
            break;
        case 3:
            let analisando = true;
            while (analisando) {
                const subOpcao = readline.questionInt("\nMétricas disponíveis:\n" +
                    "1: Média de valor\n" +
                    "2: Média de peso\n" +
                    "3: Listar itens\n" +
                    "4: Quantidade total de itens\n" +
                    "5: Quantidade de produtos\n" +
                    "6: Valor total\n" +
                    "7: Peso total\n" +
                    "8: Voltar\n" +
                    "Digite a opção desejada: ");
                switch (subOpcao) {
                    case 1:
                        (0, average_value_1.IniciaAValue)();
                        break;
                    case 2:
                        (0, average_weight_1.IniciaAWeight)();
                        break;
                    case 3:
                        (0, list_1.IniciaList)();
                        break;
                    case 4:
                        (0, quant_itens_1.IniciaQuantItens)();
                        break;
                    case 5:
                        (0, quant_prod_1.IniciaQuantiProduc)();
                        break;
                    case 6:
                        (0, value_1.IniciaValue)();
                        break;
                    case 7:
                        (0, weight_1.IniciaWeight)();
                        break;
                    case 8:
                        analisando = false;
                        break;
                    default:
                        console.log("Opção inválida.");
                        break;
                }
            }
            break;
        case 4:
            executando = false;
            console.log("Encerrando o sistema...");
            break;
        default:
            console.log("Opção inválida.");
    }
}
