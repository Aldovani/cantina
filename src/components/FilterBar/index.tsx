import Image from "next/image";
import IconAll from "../../assets/all.svg";
import IconCandy from "../../assets/candy.svg";
import IconDrinks from "../../assets/drinks.svg";
import IconOthers from "../../assets/others.svg";
import IconSavory from "../../assets/savory.svg";

import Styles from "./styles.module.css";

export function FilterBar() {
  return (
    <div className={Styles.container}>
      <label htmlFor="all" className={`${Styles.input} ${Styles.selected}`}>
        <Image src={IconAll} alt="" />
        Tudo
        <input type="radio" name="foods"  id="all" />
      </label>

      <label htmlFor="candy" className={Styles.input}>
        <Image src={IconCandy} alt="" />
        Doces
        <input type="radio" name="foods" id="candy" />
      </label>

      <label htmlFor="drinks" className={Styles.input}>
        <Image src={IconDrinks} alt="" />
        Bebidas
        <input type="radio" name="foods" id="drinks" />
      </label>

      <label htmlFor="savory" className={Styles.input}>
        <Image src={IconSavory} alt="" />
        Salgados
        <input type="radio" name="foods" id="savory" />
      </label>

      <label htmlFor="others" className={Styles.input}>
        <Image src={IconOthers} alt="" />
        Outros
        <input type="radio" name="foods" id="others" />
      </label>
    </div>
  );
}
