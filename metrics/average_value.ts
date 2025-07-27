import { promises as fs } from 'fs';
import * as path from 'path';

// Função que calcula a média dos valores
async function calcularMediaValor(): Promise<number | null> {
  const caminho = path.join(process.cwd(), 'dados', 'produtos.csv');

  try {
    await fs.access(caminho);
  } 
  catch {
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

    const valor = parseFloat(colunas[2]); // coluna "valor"
    if (!isNaN(valor)) {
      soma += valor;
      contador++;
    }
  }

  if (contador === 0) return null;
  return soma / contador;
}

// Função que usa a anterior e imprime o resultado
export async function IniciaAValue() {
  const media = await calcularMediaValor();

  if (media === null) {
    console.log('Nenhum valor encontrado para calcular a média.');
  } else {
    console.log(`Média dos valores dos produtos: RS${media.toFixed(2)}`);
  }
}
