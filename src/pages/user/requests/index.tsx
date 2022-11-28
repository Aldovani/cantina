import Image from "next/image";
import { Header } from "../../../components/Header";
import Styles from "../../../styles/pages/user/request.module.css";
import EmptyList from "../../../assets/empty-list.svg";
import { Badge } from "../../../components/Badge";
import Link from "next/link";
import Cookies from "js-cookie";
import { Pedido } from "../../../Entidades/Pedido";
import { RequestCookies } from "next/dist/server/web/spec-extension/cookies";
import { RequestContext } from "next/dist/server/base-server";

export async function getServerSideProps(context: RequestContext) {
  const cookies = context.req.cookies;
  const token = cookies.Token;
  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const response = await fetch("https://sandrapi.azurewebsites.net/pedidos/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token as string}`,
    },
  });

  const requests = await response.json();

  return {
    props: {
      requests,
    },
  };
}

export default function Index({ requests }: { requests: Pedido[] }) {
  return (
    <div className={Styles.container}>
      <Header />

      <h1>Histórico</h1>

      <div className={Styles.containerRequests}>
        {requests.length > 0 ? (
          requests.map((request: Pedido) => (
            <Link
              key={request.Id}
              href={`/user/requests/${request.Id}`}
              className={Styles.requestItem}
            >
              <h2># {request.Id} </h2>
              <h3>R$ {request.Valor}</h3>
              {request.Status === "Entregue" ? (
                <Badge type="success" />
              ) : request.Status === "Cancelado" ? (
                <Badge type="cancel" />
              ) : (
                <Badge type="waiting" />
              )}
            </Link>
          ))
        ) : (
          <div className={Styles.emptyList}>
            <Image src={EmptyList} alt="Lista vazia" />
            <h2>Nenhum pedido encontrado</h2>
          </div>
        )}
      </div>
    </div>
  );
}
