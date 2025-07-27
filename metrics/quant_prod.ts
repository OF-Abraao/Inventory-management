import * as fs from 'fs'; 
import * as path from 'path';

//Quantidade total de produtos 
function IsIniciaQuantProduct():number | null{
  const camih = path.join(process.cwd(),'dados','produtos.csv')
  
  if(!fs.existsSync(camih)){
    console.log('Arquivo CSV não encontrado.');
    return null;
  }

  const conteudo = fs.readFileSync(camih, 'utf8');
  const linhas =  conteudo.trim().split("\n");
  const dados = linhas.slice(1); 

  let contador = 0;
  for(const linha of dados ){
    const colunas = linha.split(',');
    const palavra = colunas[0].trim(); //coluna quantidade
    if(palavra !== ''){
      contador++;
    }
  }
  if (contador === 0) return null;
  return contador;
}


export function IniciaQuantiProduc() {
  const quant_itens = IsIniciaQuantProduct(); 
  if (quant_itens === null) {
    console.log('A quantidade total de produtos é 0.');
  } else {
    console.log(`A quantidade total de produtos é: ${quant_itens.toFixed(2)}`);
  }
}