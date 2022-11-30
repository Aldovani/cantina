import Image from "next/image";
import IconAll from "../../../public/assets/all.svg";
import IconCandy from "../../../public/assets/candy.svg";
import IconDrinks from "../../../public/assets/drinks.svg";
import IconOthers from "../../../public/assets/others.svg";
import IconSavory from "../../../public/assets/savory.svg";

import Styles from "./styles.module.css";

interface IFilterBar {
  current: string;
  changeCurrent: (current: string) => void;
}

export function FilterBar({ current, changeCurrent }: IFilterBar) {
  return (
    <div className={Styles.container}>
      <label
        htmlFor="all"
        className={`${Styles.input} ${
          current === "tudo" ? Styles.selected : ""
        }`}
      >
        <Image src={IconAll} alt="" />
        Tudo
        <input
          type="radio"
          name="foods"
          value="tudo"
          id="all"
          onChange={(e) => {
            changeCurrent(e.target.value);
          }}
        />
      </label>

      <label
        htmlFor="candy"
        className={`${Styles.input} ${
          current === "doces" ? Styles.selected : ""
        }`}
      >
        <Image src={IconCandy} alt="" />
        Doces
        <input
          type="radio"
          name="foods"
          id="candy"
          value="doces"
          onChange={(e) => {
            changeCurrent(e.target.value);
          }}
        />
      </label>

      <label
        htmlFor="drinks"
        className={`${Styles.input} ${
          current === "bebidas" ? Styles.selected : ""
        }`}
      >
        <Image src={IconDrinks} alt="" />
        Bebidas
        <input
          type="radio"
          name="foods"
          id="drinks"
          value="bebidas"
          onChange={(e) => {
            changeCurrent(e.target.value);
          }}
        />
      </label>

      <label
        htmlFor="savory"
        className={`${Styles.input} ${
          current === "salgados" ? Styles.selected : ""
        }`}
      >
        <Image src={IconSavory} alt="" />
        Salgados
        <input
          type="radio"
          name="foods"
          id="savory"
          value="salgados"
          onChange={(e) => {
            changeCurrent(e.target.value);
          }}
        />
      </label>

      <label
        htmlFor="others"
        className={`${Styles.input} ${
          current === "outros" ? Styles.selected : ""
        }`}
      >
        <Image src={IconOthers} alt="" />
        Outros
        <input
          type="radio"
          name="foods"
          id="others"
          value="outros"
          onChange={(e) => {
            changeCurrent(e.target.value);
          }}
        />
      </label>
    </div>
  );
}
