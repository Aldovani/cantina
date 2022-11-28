import { RequestContext } from "next/dist/server/base-server";
import { Badge } from "../../../components/Badge";
import { Header } from "../../../components/Header";
import { Pedido } from "../../../Entidades/Pedido";
import Styles from "../../../styles/pages/staff/request.module.css";
import * as Pop from "@radix-ui/react-popover";
import Router from "next/router";
import Cookies from "js-cookie";
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

  const id = context.query.id;

  const resposta = await fetch(
    `https://sandrapi.azurewebsites.net/pedidos/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + context.req.cookies.Token,
      },
    }
  );

  const dados: Pedido = await resposta.json();

  return {
    props: {
      dados,
    },
  };
}

export default function RequestDetails({ dados }: { dados: Pedido }) {
  const mudarStatus = async (status: string, id: number) => {
    const token = Cookies.get("Token") ? Cookies.get("Token") : null;

    const resposta = await fetch(
      `https://sandrapi.azurewebsites.net/pedidos/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          Status: status,
        }),
      }
    );
    const dados: Pedido = await resposta.json();

    if (dados) {
      Router.reload();
    } else {
      alert("Erro ao atualizar o pedido");
    }
  };

  return (
    <div className={Styles.container}>
      <Header />
      <div className={Styles.header}>
        <div className={Styles.info}>
          <h1>Pedido #{dados.Id}</h1>

          <div className={Styles.status}>
            <div>
              <h2>Status</h2>
              {dados.Status === "Entregue" ? (
                <Badge type="success" />
              ) : dados.Status === "Cancelado" ? (
                <Badge type="cancel" />
              ) : (
                <Badge type="waiting" />
              )}
            </div>

            <Pop.Root>
              <Pop.Trigger>
                <button className={Styles.button}>Alterar Status</button>
              </Pop.Trigger>
              <Pop.Content className={Styles.popover}>
                <div className={Styles.popoverContent}>
                  <button
                    onClick={() =>
                      mudarStatus("Entregue", dados.Id ? dados.Id : 0)
                    }
                    className={Styles.badge}
                  >
                    <Badge type="success" />
                  </button>
                  <button
                    onClick={() =>
                      mudarStatus("Aguardando", dados.Id ? dados.Id : 0)
                    }
                    className={Styles.badge}
                  >
                    <Badge type="waiting" />
                  </button>
                  <button
                    onClick={() =>
                      mudarStatus("Cancelado", dados.Id ? dados.Id : 0)
                    }
                    className={Styles.badge}
                  >
                    <Badge type="cancel" />
                  </button>
                </div>
              </Pop.Content>
            </Pop.Root>
          </div>

          <div className={Styles.client}>
            <h2>Dados do Cliente</h2>
            <p>Id: #{dados.Clientes?.Id}</p>
            <p>Nome: {dados.Clientes?.Nome}</p>
          </div>

          <div className={Styles.produtos}>
            <h2>Produtos</h2>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Produto</th>
                  <th>Preço Unitário</th>
                  <th>Quantidade</th>
                  <th>Preço Total</th>
                </tr>
              </thead>

              <tbody>
                {dados.ProdutosPedidos?.map((produto) => (
                  <tr key={produto.Id}>
                    <td>{produto.Produtos?.Id}</td>
                    <td>{produto.Produtos?.Nome}</td>
                    <td>R$ {produto.Produtos?.Preco}</td>
                    <td>{produto.Quantidade}</td>
                    <td>
                      R${" "}
                      {(produto.Produtos.Preco ? produto.Produtos.Preco : 0) *
                        produto.Quantidade}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={4} className={Styles.total}>
                    Total
                  </td>
                  <td>R$ {dados.Valor}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
