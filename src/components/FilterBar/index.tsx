import Image from "next/image";

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
        <Image src="/assets/all.svg" width={32} height={32} alt="" />
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
        <Image src="/assets/candy.svg" width={32} height={32} alt="" />
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
        <Image src="/assets/drinks.svg" height={32} width={32} alt="" />
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
        <Image src="/assets/others.svg" width={32} height={32} alt="" />
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
        <Image src="/assets/savory.svg" width={32} height={32} alt="" />
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
