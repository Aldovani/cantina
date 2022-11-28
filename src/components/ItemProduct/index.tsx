import Image from "next/image";
import Styles from "./styles.module.css";
import xRato from "../../assets/x-rato.png";
import { ProdutoPedido } from "../../Entidades/ProdutoPedido";

export function ItemProduct({ produto }: { produto: ProdutoPedido }) {
  return (
    <div className={Styles.itemProduct}>
      <div className={Styles.counter}>
        <button
          //diminuir quantidade do produto no carrinho
          onClick={() => {
            if (produto.Quantidade > 1) {
              produto.Quantidade--;
            }
          }}
        >
          -
        </button>
        <span>{produto.Quantidade}</span>
        <button
          //aumentar quantidade do produto no carrinho
          onClick={() => {
            produto.Quantidade++;
          }}
        >
          +
        </button>
      </div>

      <div className={Styles.containerImage}>
        <Image src={xRato} className={Styles.image} alt="" />
        <h4>{produto.Produto.Nome}</h4>
      </div>

      <h3>{produto.Produto.Preco}</h3>
    </div>
  );
}
