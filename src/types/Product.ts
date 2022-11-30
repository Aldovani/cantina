export interface IProduct {
  Id: number;
  Nome: string;
  Preco: number;
  Descricao: string | null;
  URLImagem: string | null;
  Categoria: string | null;
  Quantidade: number;
}