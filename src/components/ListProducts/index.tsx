import Image from "next/image";
import { ItemProduct } from "../ItemProduct";
import EmptyList from "../../assets/empty-list.svg";
import Styles from "./styles.module.css";
import Link from "next/link";
import { useListProduct } from "../../hooks/useListProduct";

type ListProducts = {
  buttonVisible?: boolean;
};

export function ListProducts({ buttonVisible = true }: ListProducts) {
  const { product, priceTotal, isOpen } = useListProduct();
  return (
    <div
      className={`${Styles.listProducts}
    ${isOpen ? Styles.open : ""}
    `}
    >
      {product.length > 0 ? (
        <>
          <h2>Seu pedido</h2>

          <div className={Styles.containerItems}>
            {product.map((e) => {
              return (
                <ItemProduct
                  name={e.Nome}
                  price={e.Preco}
                  quantity={e.Quantidade}
                  urlImage={e.URLImagem || ""}
                  key={e.Id}
                  id={e.Id}
                />
              );
            })}
          </div>
          <span className={Styles.price}>
            Total:
            <span>
              {" "}
              R$
              {priceTotal.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
              })}
            </span>
          </span>
          {buttonVisible && (
            <Link href="/payment" className={Styles.button}>
              Finalizar comprar
            </Link>
          )}
        </>
      ) : (
        <div className={Styles.containerEmptyList}>
          <Image src={EmptyList} alt="Lista vazia" />
          <p>Seu carrinho ainda está vazio</p>
          <span>Adicione algo ao cesto</span>
        </div>
      )}
    </div>
  );
}
