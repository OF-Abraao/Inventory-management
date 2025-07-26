import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline-sync';

export function IniciaRemove() {
  const caminho = path.join(process.cwd(), 'dados', 'produtos.csv');

  if (!fs.existsSync(caminho)) {
    console.log('Arquivo CSV não encontrado.');
    return null;
  }

  const conteudo = fs.readFileSync(caminho, 'utf8');
  const linhas = conteudo.trim().split('\n');
  const dados = linhas.slice(1); // remove cabeçalho

  const nomeInput = readline.question('Nome do item para remover: ').trim().toLowerCase();
  let nomeExiste = false;

  for (const linha of dados) {
    const colunas = linha.split(',');
    const nomeNoArquivo = colunas[0].trim().toLowerCase();

    if (nomeNoArquivo === nomeInput) {
      nomeExiste = true;
      break;
    }
  }

  if (!nomeExiste) {
    console.log(`Item "${nomeInput}" não existe. Nada foi removido.`);
    return;
  } else {
    const cabecalho = linhas[0];
    const novasLinhas = [cabecalho];
    for (let i = 1; i < linhas.length; i++) {
      const colunas = linhas[i].split(',');
      const nomeNoArquivo = colunas[0].trim().toLowerCase();
      if (nomeNoArquivo !== nomeInput) {
        novasLinhas.push(linhas[i]);
      }
    }  
    fs.writeFileSync(caminho, novasLinhas.join('\n') + '\n', 'utf8');
  }
}
