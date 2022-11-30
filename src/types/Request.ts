import { ICliente} from "./Cliente";
import { IProduct } from "./Product";

export  interface IRequest {
  Id: number;
  Valor: number;
  Data: Date;
  MetPag: string;
  ClienteId: number;
  Clientes: ICliente;
  Status: string | null;
  ProdutosPedidos: IProduct[];
}



export interface IRequestDetails {
  request: {
    Id: number;
    Valor: number;
    Status: string;
    Clientes: {
      Nome: string;
    };
    ProdutosPedidos: {
      PedId: number;
      ProdId: number;
      Quantidade: number;
      Id: number;
      Produtos: IProduct;
    }[];
  };
}
