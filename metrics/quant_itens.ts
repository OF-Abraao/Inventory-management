import { promises as fs } from 'fs';
import * as path from 'path';

//Quantidade total de itens 
async function IsIniciaQuantItens(): Promise <number | null>{
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

  let soma = 0;
  for(const linha of dados ){
    const colunas = linha.split(',');
    const quantidade = parseFloat(colunas[3]); //coluna quantidade
    if(!isNaN(quantidade)){
      soma += quantidade;
    }
  }
  if (soma === 0) return null;
  return soma;
}


export async function IniciaQuantItens() {
  const quant_itens = await IsIniciaQuantItens(); 
  if (quant_itens === null) {
    console.log('A quantidade total de itens é 0.');
  } else {
    console.log(`A quantidade total de itens é: ${quant_itens.toFixed(2)}`);
  }
}