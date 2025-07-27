import * as fs from 'fs';
import * as path from 'path';

function GgIniciaValue(): number | null {
  const caminho = path.join(process.cwd(), 'dados', 'produtos.csv');

  if (!fs.existsSync(caminho)) {
    console.log('Arquivo CSV não encontrado.');
    return null;
  }

  const conteudo = fs.readFileSync(caminho, 'utf8');
  const linhas = conteudo.trim().split('\n');
  const dados = linhas.slice(1); // remove cabeçalho

  let soma = 0;
  let contador = 0;

  for (const linha of dados) {
    const colunas = linha.split(',');
    const valor = parseFloat(colunas[2]);

    if (!isNaN(valor)) {
      soma += valor;
      contador++;
    }
  }

  if (contador === 0) {
    return null;
  }

  return soma; 
}

export function IniciaValue() {
  const total = GgIniciaValue();

  if (total === null) {
    console.log('Nenhum valor encontrado para calcular a soma.');
  } else {
    console.log(`A soma total dos valores é: R$ ${total.toFixed(2)}`);
  }
}