import * as fs from 'fs';
import * as path from 'path';

// Função retorna o peso total
function GgIniciaWeight(): number | null {
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

    const peso = parseFloat(colunas[1]); // coluna "peso"
    if (!isNaN(peso)) {
      soma += peso;
    }
  }

  if (soma === 0) return 0;
  return soma; 
}

// Função que usa a anterior e imprime o resultado
export function IniciaWeight() {
  const valueTotal = GgIniciaWeight();

  if (valueTotal === null) {
    console.log('A soma total dos valores é 0.');
  } else {
    console.log(`A soma total dos valores é: ${valueTotal.toFixed(2)}kg`);
  }
}
