import { Cliente } from "./Cliente";
import { Produto } from "./Produto";
import { ProdutoPedido } from "./ProdutoPedido";

export class Pedido {
  public Id?: number;
  public Valor: number;
  public Data?: Date;
  public MetPag?: string;
  public ClienteId?: number;
  public Clientes?: Cliente;
  public Status?: string | null;
  public ProdutosPedidos: Array<ProdutoPedido>;

  constructor() {
    this.ProdutosPedidos = new Array<ProdutoPedido>();
    this.Valor = 0;
  }
}
