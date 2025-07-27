import * as fs from 'fs'; 
import * as path from 'path';

//Quantidade total de itens 
function IsIniciaQuantItens():number | null{
  const camih = path.join(process.cwd(),'dados','produtos.csv')
  
  if(!fs.existsSync(camih)){
    console.log('Arquivo CSV não encontrado.');
    return null;
  }

  const conteudo = fs.readFileSync(camih, 'utf8');
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


export function IniciaQuantItens() {
  const quant_itens = IsIniciaQuantItens(); 
  if (quant_itens === null) {
    console.log('A quantidade total de itens é 0.');
  } else {
    console.log(`A quantidade total de itens é: ${quant_itens.toFixed(2)}`);
  }
}