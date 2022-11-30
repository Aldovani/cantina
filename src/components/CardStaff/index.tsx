import Router from "next/router";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";
import Styles from "./styles.module.css";

interface ICardStaff {
  id: number;
  name: string;
  price: number;
}

export function CardStaff({ id, name, price }: ICardStaff) {
  const { token } = useAuth();

  async function success() {
    try {
      const { status } = await api.put(
        `pedidos/${id}`,
        {
          Status: "success",
        },
        {
          headers: {
            authorization: `Bearer ${token as string}`,
          },
        }
      );
      if (status === 200) {
        alert("Sucesso");
        Router.push("/staff/requests");
      } else {
        alert("Erro");
      }
    } catch (err) {
      console.log(err);
    }
  }
  async function cancel() {
    try {
      const { status } = await api.put(
        `pedidos/${id}`,
        {
          Status: "cancel",
        },
        {
          headers: {
            authorization: `Bearer ${token as string}`,
          },
        }
      );
      if (status === 200) {
        alert("Sucesso");
        Router.push("/staff/requests");
      }
    } catch (err) {}
  }

  return (
    <div className={Styles.cardStaff}>
      <h2>#{id.toString().padStart(9, "0")}</h2>
      <h4>{name}</h4>
      <h3>R$ {price.toLocaleString("pt-br", { minimumFractionDigits: 2 })}</h3>
      <div>
        <button onClick={success}>
          <svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m21.5 5.5-13.063 13L2.5 12.59"
              stroke="#37B24D"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Entregue
        </button>

        <button onClick={cancel}>
          <svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m4 4.5 16 16M4 20.5l16-16"
              stroke="#F03E3E"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Cancelar
        </button>
      </div>
    </div>
  );
}
