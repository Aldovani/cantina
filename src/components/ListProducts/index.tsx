import Image from "next/image";
import { ItemProduct } from "../ItemProduct";
import EmptyList from "../../assets/empty-list.svg";
import Styles from "./styles.module.css";
import Link from "next/link";
import { Pedido } from "../../Entidades/Pedido";
import { ProdutoPedido } from "../../Entidades/ProdutoPedido";
import { Produto } from "../../Entidades/Produto";
import Cookies from "js-cookie";
type ListProducts = {
  buttonVisible?: boolean;
};

export function ListProducts({
  buttonVisible = true,
}: {
  buttonVisible?: boolean;
}) {
  const pedido: Pedido = JSON.parse(Cookies.get("pedido") || "{}");
  const produtos: ProdutoPedido[] = pedido.ProdutosPedidos || [];

  return (
    <div className={Styles.listProducts}>
      <h2>Seu pedido</h2>

      <div className={Styles.containerItems}>
        {pedido.ProdutosPedidos ? (
          pedido.ProdutosPedidos.map((pp: ProdutoPedido) => (
            <ItemProduct key={pp.Produto.Id} produto={pp} />
          ))
        ) : (
          <div className={Styles.emptyList}>
            <Image src={EmptyList} alt="Lista vazia" />
            <h2>Sua lista está vazia</h2>
            <p>Adicione produtos para continuar</p>
          </div>
        )}
      </div>
      <span className={Styles.price}>
        Total: R$
        {pedido.Valor != undefined ? pedido.Valor.toFixed(2) : (0.0).toFixed(2)}
        <span></span>
      </span>
      {buttonVisible && (
        <Link href="/payment" className={Styles.button}>
          Finalizar comprar
        </Link>
      )}

      {/* <div className={Styles.containerEmptyList}>
        <Image src={EmptyList} alt="" />
        <p>Seu carrinho ainda está vazio</p>
        <span>Adicione algo ao cesto</span>
      </div> */}
    </div>
  );
}
