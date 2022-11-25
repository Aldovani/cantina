import Image from "next/image";
import Styles from "./styles.module.css";
import xRato from "../../assets/x-rato.png";
export function ItemProduct() {
  return (
    <div className={Styles.itemProduct}>
      <div className={Styles.counter}>
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>

      <div className={Styles.containerImage}>
        <Image src={xRato} className={Styles.image} alt="" />
        <h4>X-ratão</h4>
      </div>

      <h3>R$ 10.00</h3>
    </div>
  );
}
