import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { CardFood } from "../components/CardFood";
import { FilterBar } from "../components/FilterBar";
import { Header } from "../components/Header/";
import { ListProducts } from "../components/ListProducts";
import { Pedido } from "../Entidades/Pedido";
import { Produto } from "../Entidades/Produto";
import { ProdutoPedido } from "../Entidades/ProdutoPedido";
import Styles from "../styles/pages/Home.module.css";

export async function getServerSideProps() {
  const produtos: Produto[] = await fetch(
    "http://sandrapi.azurewebsites.net/produtos"
  ).then((res) => res.json());

  return {
    props: {
      produtos: produtos,
    },
  };
}

function Home({ produtos }: { produtos: Produto[] }) {
  const [pedido, setPedido] = useState<Pedido>(new Pedido());
  const [produtosFiltrados, setProdutosFiltrados] =
    useState<Produto[]>(produtos);
  const router = useRouter();

  useEffect(() => {
    if (!Cookies.get("Token")) {
      router.push("/login");
    }
  }, [router]);

  const adicionar = (produto: Produto) => {
    const pAtualizado = new Pedido();
    pAtualizado.ProdutosPedidos = pedido.ProdutosPedidos;

    // Verifica se o produto já está no pedido
    const pp = pAtualizado.ProdutosPedidos?.find(
      (pp) => pp.Produto.Id == produto.Id
    );

    if (pp) {
      pp.Quantidade++;
    } else {
      const novoPP = new ProdutoPedido(0, produto);
      novoPP.Produto = produto;
      novoPP.Quantidade = 1;
      pAtualizado.ProdutosPedidos?.push(novoPP);
    }
    pAtualizado.Valor = pedido.Valor + (produto.Preco ? produto.Preco : 0);

    setPedido(pAtualizado);
  };

  return (
    <div className={Styles.home}>
      <Header />
      <div className={Styles.container}>
        <div>
          <FilterBar />
          <div className={Styles.cardContainer}>
            {produtos.length != 0 ? (
              produtos.map((produto) => (
                <CardFood
                  key={produto.Id}
                  produto={produto}
                  onClick={() => adicionar(produto)}
                />
              ))
            ) : (
              <h1>Nenhum produto encontrado</h1>
            )}
          </div>
        </div>

        <ListProducts pedido={pedido} />
      </div>
    </div>
  );
}

export default Home;
