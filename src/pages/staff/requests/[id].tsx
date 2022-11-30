import { Header } from "../../../components/Header";
import { RequestItem } from "../../../components/RequestItem";
import Styles from "../../../styles/pages/user/requestDetails.module.css";
import Link from "next/link";
import { CardStaff } from "../../../components/CardStaff";
import { RequestContext } from "next/dist/server/base-server";
import { api } from "../../../services/api";
import { IRequestDetails } from "../../../types/Request";

export default function RequestDetails({ request }: IRequestDetails) {
  return (
    <>
      <Header />

      <div className={Styles.requestDetails}>
        <Link href="/staff/requests" className={Styles.link}>
          <svg
            width={32}
            height={32}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.865 16h24M11.865 24l-8-8 8-8"
              stroke="#868E96"
              strokeWidth={1.333}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Voltar
        </Link>
        <div className={Styles.container}>
          <CardStaff
            id={request.Id}
            name={request.Clientes.Nome}
            price={request.Valor}
          />
          <h2>Pedido Realizado</h2>
          <div className={Styles.containerItems}>
            {request.ProdutosPedidos.map((e) => {
              return (
                <RequestItem
                  data={{
                    name: e.Produtos.Nome,
                    price: e.Produtos.Preco,
                    quantity: e.Quantidade,
                    urlImage: e.Produtos.URLImagem || "",
                  }}
                  key={e.Id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
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
  const id = context.query["id"];
  const { data } = await api.get(`/pedidos/${id}`, {
    headers: {
      Authorization: `Bearer ${token as string}`,
    },
  });

  return {
    props: {
      request: data,
    },
  };
}
