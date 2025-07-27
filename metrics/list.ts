import { promises as fs } from 'fs';
import * as path from 'path';

//Lista de produtos 
async function IsIniciaList(): Promise<string[] | null> {
  const camih = path.join(process.cwd(),'dados','produtos.csv');
  
  try{
    await fs.access(camih);
  }
  catch{
    console.log('Arquivo CSV não encontrado.');
    return null;
  }

  const conteudo = await fs.readFile(camih, 'utf8');
  const linhas =  conteudo.trim().split("\n");
  const dados = linhas.slice(1); 

  let lista = [];
  for(const linha of dados ){
    const colunas = linha.split(',');
    const palavra = colunas[0].trim(); //coluna de produtos
    if(palavra !== ''){
      lista.push(palavra);
    }
  }
  if (lista.length === 0) return null;
  return lista;
}


export async function IniciaList() {
  const quant_itens = await IsIniciaList(); 
  if (quant_itens === null) {
    console.log('Não há produtos!');
  } else {
    console.log(`A lista de produtos são: ${quant_itens}`);
  }
}