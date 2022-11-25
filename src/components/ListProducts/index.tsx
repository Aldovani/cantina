import Image from "next/image";
import { ItemProduct } from "../ItemProduct";
import EmptyList from "../../assets/empty-list.svg";
import Styles from "./styles.module.css";
import Link from "next/link";

type ListProducts = {
  buttonVisible?: boolean;
};

export function ListProducts({ buttonVisible = true }: ListProducts) {
  return (
    <div className={Styles.listProducts}>
      <h2>Seu pedido</h2>

      <div className={Styles.containerItems}>
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
      </div>
      <span className={Styles.price}>
        Total:
        <span>R$ 150.00</span>
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
