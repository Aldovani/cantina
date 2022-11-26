import { Cliente } from "./Cliente";
import { Produto } from "./Produto";
import { ProdutoPedido } from "./ProdutoPedido";

export class Pedido {
  public Id?: number;
  public Valor: number;
  public Data?: Date;
  public MetPag?: string;
  public ClienteId?: number;
  public Cliente?: Cliente;
  public ProdutosPedidos: ProdutoPedido[];

  constructor() {
    this.ProdutosPedidos = [];
    this.Valor = 0;
  }
}
