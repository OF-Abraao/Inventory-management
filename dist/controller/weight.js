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
exports.IniciaWeight = IniciaWeight;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
// Função retorna o valor total
function GgIniciaWeight() {
    const caminho = path.join(process.cwd(), 'dados', 'produtos.csv');
    if (!fs.existsSync(caminho)) {
        console.log('Arquivo CSV não encontrado.');
        return null;
    }
    const conteudo = fs.readFileSync(caminho, 'utf8');
    const linhas = conteudo.trim().split('\n');
    const dados = linhas.slice(1); // remove cabeçalho
    let soma = 0;
    for (const linha of dados) {
        const colunas = linha.split(',');
        const peso = parseFloat(colunas[1]); // coluna "valor"
        if (!isNaN(peso)) {
            soma += peso;
        }
    }
    if (soma === 0)
        return 0;
    return soma;
}
// Função que usa a anterior e imprime o resultado
function IniciaWeight() {
    const valueTotal = GgIniciaWeight();
    if (valueTotal === null) {
        console.log('A soma total dos valores é 0.');
    }
    else {
        console.log(`A soma total dos valores é: ${valueTotal.toFixed(2)}kg`);
    }
}
