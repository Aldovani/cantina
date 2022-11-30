import Image from "next/image";
import { Header } from "../../../components/Header";
import Styles from "../../../styles/pages/user/request.module.css";
import EmptyList from "../../../../public/assets/empty-list.svg";
import { Badge } from "../../../components/Badge";
import Link from "next/link";
import { api } from "../../../services/api";
import { RequestContext } from "next/dist/server/base-server";
import { IRequest } from "../../../types/Request";

interface IRequests {
  requests: IRequest[];
}

export default function Requests({ requests }: IRequests) {
  return (
    <div className={Styles.container}>
      <Header />

      <h1>Histórico</h1>

      <div className={Styles.containerRequests}>
        {requests.length > 0 ? (
          requests.map((e) => {
            return (
              <Link
                key={e.Id}
                href={`/user/requests/${e.Id}`}
                className={Styles.requestItem}
              >
                <h2>#{e.Id.toString().padStart(9, "0")} </h2>
                <h3>
                  R${" "}
                  {e.Valor.toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                  })}
                </h3>
                <Badge type={e.Status || "wainting"} />
              </Link>
            );
          })
        ) : (
          <div className={Styles.containerEmptyList}>
            <Image src={EmptyList} alt="" />
            <span>Nenhum pedido realizado</span>
          </div>
        )}
      </div>
    </div>
  );
}

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
  const { data } = await api.get("/pedidos/", {
    headers: {
      Authorization: `Bearer ${token as string}`,
    },
  });

  return {
    props: {
      requests: data,
    },
  };
}
