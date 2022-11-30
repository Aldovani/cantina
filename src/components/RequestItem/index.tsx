import Image from "next/image";
import Styles from "./styles.module.css";
import xRatao from "../../assets/x-rato.png";

interface IRequestItem {
  data: {
    name: string;

    price: number;
    quantity: number;
    urlImage: string;
  };
}

export function RequestItem({ data }: IRequestItem) {
  return (
    <div className={Styles.requestItem}>
      <Image src={data.urlImage} width={120} height={90} alt={data.name} />

      <h2>{data.name}</h2>

      <div>
        <h3>{data.quantity}X</h3>
        <span>
          R${" "}
          {(data.price * data.quantity).toLocaleString("pt-br", {
            minimumFractionDigits: 2,
          })}
        </span>
      </div>
    </div>
  );
}
