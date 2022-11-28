import { Produto } from "./Produto";

export class ProdutoPedido {
  public Id?: number;
  public ProdId?: number;
  public PedId?: number;
  public Quantidade: number;
  public Produtos: Produto;

  constructor(quanti: number, prod: Produto) {
    this.Quantidade = quanti || 0;
    this.Produtos = prod;
  }
}
