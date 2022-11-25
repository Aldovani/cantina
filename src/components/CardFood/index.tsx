import Image from "next/image";
import xRatao from "../../assets/x-rato.png";
import Styles from "./styles.module.css";

export function CardFood() {
  return (
    <div className={Styles.cardFood}>
      <Image src={xRatao} alt="" />
      <div>
        <h2 className={Styles.name}>X-ratão</h2>
        <p className={Styles.description}>
          PÃO, 2 CARNE, 2 QUEIJO, 2 PRESUNTO, 2 OVOS, BACON, ALFACE
        </p>
        <h3 className={Styles.price}>R$ 10.00</h3>
      </div>
    </div>
  );
}
