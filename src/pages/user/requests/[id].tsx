import { RequestContext } from "next/dist/server/base-server";
import { Header } from "../../../components/Header";
import { Pedido } from "../../../Entidades/Pedido";

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
  const response = await fetch(
    `https://sandrapi.azurewebsites.net/pedidos/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token as string}`,
      },
    }
  );

  const req: Pedido = await response.json();

  let request = new Pedido();
  request = req;
  request.Cliente = JSON.parse(cookies.Cliente?.toString() as string);
  return {
    props: {
      request,
    },
  };
}
export default function RequestId({ request }: { request: Pedido }) {
  return (
    <>
      <Header />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <h1>Pedido</h1>
        <br></br>
        <br></br>
        <h2>#{request.Id}</h2>
        <br></br>
        <br></br>
        <h2>R$ {request.Valor.toFixed(2).toString().replace(".", ",")}</h2>
        <br></br>
        <h2>
          {" "}
          Feito{" "}
          {request.Data?.toString()
            .split("T")[0]
            .split("-")
            .reverse()
            .join("/")}{" "}
          as {request.Data?.toString().split("T")[1].split(".")[0]}
        </h2>
        <br></br>
        <h2>Por {request.Cliente?.Nome}</h2>
        <h2>{request.Status}</h2>
        <br></br>
      </div>
    </>
  );
}
