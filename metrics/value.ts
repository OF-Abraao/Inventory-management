import { promises as fs } from 'fs';
import * as path from 'path';

async function GgIniciaValue(): Promise<number | null> {
  const caminho = path.join(process.cwd(), 'dados', 'produtos.csv');

  try {
    await fs.access(caminho);
  }
  catch{
    console.log('Arquivo CSV não encontrado.');
    return null;
  }

  const conteudo = await fs.readFile(caminho, 'utf8');
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

export async function IniciaValue() {
  const total = await GgIniciaValue();

  if (total === null) {
    console.log('Nenhum valor encontrado para calcular a soma.');
  } else {
    console.log(`A soma total dos valores é: R$ ${total.toFixed(2)}`);
  }
}