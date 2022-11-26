import Image from "next/image";
import { MouseEventHandler } from "react";
import xRatao from "../../assets/x-rato.png";
import { Pedido } from "../../Entidades/Pedido";
import { Produto } from "../../Entidades/Produto";
import Styles from "./styles.module.css";

export function CardFood({
  produto,
  onClick,
}: {
  produto: Produto;
  onClick: MouseEventHandler<HTMLElement>;
}) {
  return (
    <div className={Styles.cardFood}>
      <Image src={xRatao} alt="" />
      <div>
        <h2 className={Styles.name}>{produto.Nome}</h2>
        <p className={Styles.description}>{produto.Descricao}</p>
        <h3 className={Styles.price}>{produto.Preco}</h3>
      </div>
      <button className={Styles.button} onClick={onClick}>
        Adicionar ao carrinho
      </button>
    </div>
  );
}
