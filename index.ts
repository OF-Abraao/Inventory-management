import * as fs from 'fs';
import * as path from 'path';

// Caminho da pasta "dados"
const pastaDados = path.join(process.cwd(), 'dados');

// Nome do arquivo CSV
const nomeArquivo = 'produtos.csv';
const caminhoCSV = path.join(pastaDados, nomeArquivo);

// Cabeçalhos do CSV
const cabecalhos = ['nome', 'peso', 'valor', 'quantidade'];

// Verifica se a pasta "dados" existe. Se não, cria.
if (!fs.existsSync(pastaDados)) {
  fs.mkdirSync(pastaDados);
}

// Verifica se o arquivo CSV existe
if (!fs.existsSync(caminhoCSV)) {
  const conteudoCSV = cabecalhos.join(',') + '\n';
  fs.writeFileSync(caminhoCSV, conteudoCSV, 'utf8');
  console.log(`Arquivo CSV criado em: ${caminhoCSV}`);
} else {
  console.log(`Arquivo CSV já existe em: ${caminhoCSV}`);
}
