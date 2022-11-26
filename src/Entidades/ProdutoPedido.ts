import { Produto } from "./Produto";

export class ProdutoPedido {
  public Quantidade: number;
  public Produto: Produto;

  constructor(quanti: number, prod: Produto) {
    this.Quantidade = quanti || 0;
    this.Produto = prod;
  }
}
