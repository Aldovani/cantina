import Image from "next/image";
import Success from "../../../public/assets/success-request.svg";
import waiting from "../../../public/assets/waiting-request.svg";
import Cancel from "../../../public/assets/cancel-request.svg";
import Styles from "./styles.module.css";

interface ICardStatus {
  status: string;
  id: number;
  price: number;
}

export function CardStatus({ status, id, price }: ICardStatus) {
  return (
    <div className={Styles.cardStatus}>
      <h2>
        Pedido 
        {" "}
        {status === "success"
          ? "Entregue"
          : status === "cancel"
          ? "Cancelado"
          : "Aguardando"}
      </h2>

      <div>
        {status == "success" ? (
          <>
            <Image src={Success} alt="" />
            <span className={Styles.success}>sucesso</span>
          </>
        ) : status === "cancel" ? (
          <>
            <Image src={Cancel} alt="" />
            <span className={Styles.cancel}>Cancelado</span>
          </>
        ) : (
          <>
            <Image src={waiting} alt="" />
            <span className={Styles.waiting}>Aguardando</span>
          </>
        )}
      </div>
      <h3>#{id.toString().padStart(9, "0")}</h3>
      <h4>R$ {price.toLocaleString("pt-br", { minimumFractionDigits: 2 })}</h4>
    </div>
  );
}
