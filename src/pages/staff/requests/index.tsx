import { Header } from "../../../components/Header";
import { RequestItem } from "../../../components/RequestItem";
import Styles from "../../../styles/pages/staff/request.module.css";
import EmptyList from "../../../assets/empty-list.svg";
import Image from "next/image";
import { Cliente } from "../../../Entidades/Cliente";
import { RequestContext } from "next/dist/server/base-server";
import { Pedido } from "../../../Entidades/Pedido";

export async function getServerSideProps(context: RequestContext) {
  //pegar os pedidos da api e retornar apenas os pedidos com status aguardando
  const Cliente: any = JSON.parse(
    context.req.cookies.Cliente ? context.req.cookies.Cliente : "{}"
  );
  if (Cliente.Nome != "SANDRA") {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const resposta = await fetch("https://sandrapi.azurewebsites.net/pedidos/", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + context.req.cookies.Token,
    },
  });

  const dados = await resposta.json();

  const pedidosPendentes = dados.filter((pedido: any) => {
    return pedido.Status == "Aguardando";
  });

  return {
    props: {
      pedidosPendentes,
    },
  };
}

export default function Requests({
  pedidosPendentes,
}: {
  pedidosPendentes: Pedido[];
}) {
  return (
    <div className={Styles.container}>
      <Header />
      <div>
        <div className={Styles.header}>
          <h1>Pedidos</h1>

          <div>
            <input type="text" placeholder="Numero do pedido" />
            <button>
              <svg
                width={24}
                height={25}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 19.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z"
                  stroke="#F8F9FA"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.329 7.672A3.987 3.987 0 0 0 10.5 6.5a3.987 3.987 0 0 0-2.828 1.172M16.611 17.11l4.243 4.244"
                  stroke="#F8F9FA"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {pedidosPendentes.length > 0 ? (
          <div className={Styles.containerRequestItems}>
            {pedidosPendentes.map((pedido) => (
              <RequestItem key={pedido.Id} pedido={pedido} />
            ))}
          </div>
        ) : (
          <div className={Styles.containerEmptyList}>
            <Image src={EmptyList} alt="" />
            <span>Aguardando Pedidos</span>
          </div>
        )}
      </div>
    </div>
  );
}
