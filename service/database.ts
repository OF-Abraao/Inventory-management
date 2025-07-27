import * as fs from 'fs/promises';
import * as path from 'path';

const pastaDados = path.join(process.cwd(), 'dados');
const nomeArquivo = 'produtos.csv';
const caminhoCSV = path.join(pastaDados, nomeArquivo);
const cabecalhos = ['nome', 'peso', 'valor', 'quantidade'];

export async function Iniciadatabase() {
  try {
    await fs.mkdir(pastaDados, { recursive: true });

    try {
      await fs.access(caminhoCSV);
      console.log(`CSV já existe: ${caminhoCSV}`);
    } catch {
      const conteudo = cabecalhos.join(',') + '\n';
      await fs.writeFile(caminhoCSV, conteudo, 'utf8');
      console.log(`Criado em: ${caminhoCSV}`);
    }

  } catch (err) {
    console.error('Erro ao criar diretório ou arquivo:', err);
  }
}
