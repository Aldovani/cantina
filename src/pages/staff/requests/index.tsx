import { Header } from "../../../components/Header";
import { Request } from "../../../components/Request";

import Styles from "../../../styles/pages/staff/request.module.css";
import Image from "next/image";
import { RequestContext } from "next/dist/server/base-server";
import { api } from "../../../services/api";
import { IRequest } from "../../../types/Request";

interface IRequests {
  requests: IRequest[];
}

export default function Requests({ requests }: IRequests) {
  const filteredRequests = requests.filter((e) => {
    if (e.Status === "Aguardando") {
      return e;
    }
  });

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

        <div className={Styles.containerRequestItems}>
          {filteredRequests.length > 0 ? (
            filteredRequests.map((e) => {
              return (
                <Request
                  name={e.Clientes.Nome}
                  id={e.Id}
                  price={e.Valor}
                  key={e.Id}
                />
              );
            })
          ) : (
            <div className={Styles.containerEmptyList}>
              <Image
                src="/assets/empty-list.svg"
                width={330}
                height={330}
                alt=""
              />
              <span>aguardando Pedido</span>
            </div>
          )}
        </div>
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
