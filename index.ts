import { Iniciadatabase } from './service/database';
import { IniciaAdd } from './service/add';
import { IniciaRemove } from './service/remove';
import { IniciaAValue } from './controller/average_value';
import { IniciaAWeight } from './controller/average_weight';
import { IniciaList } from './controller/list';
import { IniciaQuantItens } from './controller/quant_itens';
import { IniciaQuantiProduc } from './controller/quant_prod';
import { IniciaValue } from './controller/value';
import { IniciaWeight } from './controller/weight';


Iniciadatabase();
IniciaAdd();
IniciaRemove();

IniciaAValue();
IniciaAWeight();
IniciaList();
IniciaQuantItens();
IniciaQuantiProduc();
IniciaValue();
IniciaWeight();