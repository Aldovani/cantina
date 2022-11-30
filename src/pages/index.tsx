import { CardFood } from "../components/CardFood";
import { FilterBar } from "../components/FilterBar";
import { Header } from "../components/Header/";
import { ListProducts } from "../components/ListProducts";
import Styles from "../styles/pages/Home.module.css";

import { useState } from "react";
import { IProduct } from "../types/Product";
import { api } from "../services/api";
import { RequestContext } from "next/dist/server/base-server";

interface IHome {
  products: IProduct[];
}

export default function Home({ products }: IHome) {
  const [filterBar, setFilterBar] = useState("tudo");
  const [product, setProduct] = useState<IProduct[]>(products || []);

  function changeCurrent(value: string) {
    setFilterBar(value);
  }

  return (
    <div className={Styles.home}>
      <Header />
      <div className={Styles.container}>
        <div>
          <FilterBar current={filterBar} changeCurrent={changeCurrent} />
          <div className={Styles.cardContainer}>
            {product
              .filter((e) => {
                if (filterBar === "tudo") return e;
                if (e.Categoria === filterBar) return e;
              })
              .map((e) => {
                return <CardFood product={e} key={e.Id} />;
              })}
          </div>
        </div>

        <ListProducts />
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

  try {
    const { data } = await api.get("/produtos");
    return {
      props: {
        products: data,
      },
    };
  } catch (err) {
    return {
      props: {
        products: [],
      },
    };
  }
}
