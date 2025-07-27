import { Iniciadatabase } from './service/database';
import { IniciaAdd } from './service/add';
import { IniciaRemove } from './service/remove';
import { IniciaAValue } from './metrics/average_value';
import { IniciaAWeight } from './metrics/average_weight';
import { IniciaList } from './metrics/list';
import { IniciaQuantItens } from './metrics/quant_itens';
import { IniciaQuantiProduc } from './metrics/quant_prod';
import { IniciaValue } from './metrics/value';
import { IniciaWeight } from './metrics/weight';
import * as readline from 'readline-sync';


async function main() {
  let executando = true; 

  await Iniciadatabase();
  while (executando){
    const opcao = readline.questionInt(
      "\nQual funcionalidade deseja executar?\n" +
      "1: Adicionar itens\n" +
      "2: Remover itens\n" +
      "3: Verificação de Métricas\n" +
      "4: Sair\n" +
      "Digite a opção desejada: "
    );
    switch(opcao){
      case 1:
        await IniciaAdd();
        break;
      case 2:
        await IniciaRemove();
        break;
      case 3:
        let analisando = true;
        while (analisando) {
          const subOpcao = readline.questionInt(
            "\nMétricas disponíveis:\n" +
            "1: Média de valor\n" +
            "2: Média de peso\n" +
            "3: Listar itens\n" +
            "4: Quantidade total de itens\n" +
            "5: Quantidade de produtos\n" +
            "6: Valor total\n" +
            "7: Peso total\n" +
            "8: Voltar\n" +
            "Digite a opção desejada: "
          );

          switch (subOpcao) {
            case 1: await IniciaAValue(); break;
            case 2: await IniciaAWeight(); break;
            case 3: await IniciaList(); break;
            case 4: await IniciaQuantItens(); break;
            case 5: await IniciaQuantiProduc(); break;
            case 6: await IniciaValue(); break;
            case 7: await IniciaWeight(); break;
            case 8: analisando = false; break;
            default: console.log("Opção inválida."); break;
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
}
main();
