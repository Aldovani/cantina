import { url } from "inspector";
import Image from "next/image";
import { useListProduct } from "../../hooks/useListProduct";
import { IProduct } from "../../types/Product";
import Styles from "./styles.module.css";

interface ICardFood {
  product: IProduct;
}

export function CardFood({ product }: ICardFood) {
  const { setItem } = useListProduct();

  function ClickCard() {
    setItem({ ...product, Quantidade: 1 });
  }
  return (
    <div className={Styles.cardFood} onClick={ClickCard}>
      <Image
        src={product.URLImagem ? product.URLImagem : ""}
        width={180}
        height={140}
        alt={product.Nome}
      />
      <div>
        <h2 className={Styles.name}>{product.Nome}</h2>
        <p className={Styles.description}>{product.Descricao}</p>
        <h3 className={Styles.price}>
          R${" "}
          {product.Preco.toLocaleString("pt-br", { minimumFractionDigits: 2 })}
        </h3>
      </div>
    </div>
  );
}
