import { CardFood } from "../components/CardFood";
import { FilterBar } from "../components/FilterBar";
import { Header } from "../components/Header/";
import { ListProducts } from "../components/ListProducts";
import Styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={Styles.home}>
      <Header />
      <div className={Styles.container}>
        <div>
          <FilterBar />
          <div className={Styles.cardContainer}>
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
          </div>
        </div>

        <ListProducts />
      </div>
    </div>
  );
}
