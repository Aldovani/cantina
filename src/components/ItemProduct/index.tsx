import Image from "next/image";
import Styles from "./styles.module.css";
import { useListProduct } from "../../hooks/useListProduct";

interface IItemProduct {
  name: string;
  price: number;
  urlImage: string;
  quantity: number;
  id: number;
}

export function ItemProduct({
  name,
  price,
  urlImage,
  quantity,
  id,
}: IItemProduct) {
  const { increase, decrease } = useListProduct();

  return (
    <div className={Styles.itemProduct}>
      <div className={Styles.counter}>
        <button onClick={() => decrease(id)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => increase(id)}>+</button>
      </div>

      <div className={Styles.containerImage}>
        <Image
          src={urlImage}
          width={60}
          height={50}
          className={Styles.image}
          alt={name}
        />
        <h4>{name}</h4>
      </div>

      <h3>
        R$
        {(quantity * price).toLocaleString("pt-br", {
          minimumFractionDigits: 2,
        })}
      </h3>
    </div>
  );
}
