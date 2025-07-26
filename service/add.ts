import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline-sync';

export function IniciaAdd() {
  const caminho = path.join(process.cwd(), 'dados', 'produtos.csv');

  if (!fs.existsSync(caminho)) {
    console.log('Arquivo CSV não encontrado.');
    return null;
  }

  const conteudo = fs.readFileSync(caminho, 'utf8');
  const linhas = conteudo.trim().split('\n');
  const dados = linhas.slice(1); // remove cabeçalho

  const nomeInput = readline.question('Nome do item: ').trim().toLowerCase();
  let nomeExiste = false;

  for (const linha of dados) {
    const colunas = linha.split(',');
    const nomeNoArquivo = colunas[0].trim().toLowerCase();

    if (nomeNoArquivo === nomeInput) {
      nomeExiste = true;
      break;
    }
  }

  if (nomeExiste) {
    console.log(`Item "${nomeInput}" já existe. Nada foi adicionado.`);
    return;
  } else {
    const peso = readline.questionFloat('Peso (em kg): ');
    const valor = readline.questionFloat('Valor: ');
    const quantidade = readline.questionInt('Quantidade: ');
    const novaLinha = `\n${nomeInput},${peso},${valor},${quantidade}`;
    fs.appendFileSync(caminho, novaLinha, 'utf8');
    console.log(`Item "${nomeInput}" adicionado com sucesso!`);
  }
}
