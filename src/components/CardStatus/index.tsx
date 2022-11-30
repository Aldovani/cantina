import Image from "next/image";
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
        Pedido{" "}
        {status === "success"
          ? "Entregue"
          : status === "cancel"
          ? "Cancelado"
          : "Aguardando"}
      </h2>

      <div>
        {status == "success" ? (
          <>
            <Image
              src="/assets/success-request.svg"
              width={128}
              height={128}
              alt=""
            />
            <span className={Styles.success}>sucesso</span>
          </>
        ) : status === "cancel" ? (
          <>
            <Image
              src="/assets/cancel-request.svg"
              width={128}
              height={128}
              alt=""
            />
            <span className={Styles.cancel}>Cancelado</span>
          </>
        ) : (
          <>
            <Image
              src="/assets/waiting-request.svg"
              width={128}
              height={128}
              alt=""
            />
            <span className={Styles.waiting}>Aguardando</span>
          </>
        )}
      </div>
      <h3>#{id.toString().padStart(9, "0")}</h3>
      <h4>R$ {price.toLocaleString("pt-br", { minimumFractionDigits: 2 })}</h4>
    </div>
  );
}
