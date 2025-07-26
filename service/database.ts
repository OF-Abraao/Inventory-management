import * as fs from 'fs';
import * as path from 'path';

const pastaDados = path.join(process.cwd(), 'dados');
const nomeArquivo = 'produtos.csv';
const caminhoCSV = path.join(pastaDados, nomeArquivo);
const cabecalhos = ['nome', 'peso', 'valor', 'quantidade'];

export function Iniciadatabase() {
  if (!fs.existsSync(pastaDados)) {
    fs.mkdirSync(pastaDados);
  }

  if (!fs.existsSync(caminhoCSV)) {
    const conteudo = cabecalhos.join(',') + '\n';
    fs.writeFileSync(caminhoCSV, conteudo, 'utf8');
    console.log(`Criado em: ${caminhoCSV}`);
  } else {
    console.log(`CSV já existe: ${caminhoCSV}`);
  }
}
