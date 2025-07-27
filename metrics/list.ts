import * as fs from 'fs'; 
import * as path from 'path';

//Lista de produtos 
function IsIniciaList():string[] | null{
  const camih = path.join(process.cwd(),'dados','produtos.csv')
  
  if(!fs.existsSync(camih)){
    console.log('Arquivo CSV não encontrado.');
    return null;
  }

  const conteudo = fs.readFileSync(camih, 'utf8');
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


export function IniciaList() {
  const quant_itens = IsIniciaList(); 
  if (quant_itens === null) {
    console.log('Não há produtos!');
  } else {
    console.log(`A lista de produtos são: ${quant_itens}`);
  }
}