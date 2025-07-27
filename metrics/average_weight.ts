import { promises as fs } from 'fs';
import * as path from 'path';

// Função que calcula a média dos pesos
async function calcularMediaPeso(): Promise <number | null> {
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

    const peso = parseFloat(colunas[1]); // coluna "peso"
    if (!isNaN(peso)) {
      soma += peso;
      contador++;
    }
  }

  if (contador === 0) return null;
  return soma / contador;
}

// Função que usa a anterior e imprime o resultado
export async function IniciaAWeight() {
  const media = await calcularMediaPeso();

  if (media === null) {
    console.log('Nenhum valor encontrado para calcular a média.');
  } else {
    console.log(`Média dos pesos dos produtos: ${media.toFixed(2)}kg`);
  }
}
