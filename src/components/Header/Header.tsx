import Image from "next/image";
import LogoSmall from "../../assets/logo-small.svg";
import IconBag from "../../assets/icon-bag.svg";
import IconProfile from "../../assets/icon-profile.svg";
import Styles from "./styles.module.css";

export function Header() {
  return (
    <header className={Styles.header}>
      <div className={Styles.container}>
        <Image src={LogoSmall} alt="Logo" />
        <div>
        <Image src={IconProfile} alt="Logo" />
        <Image src={IconBag} alt="Logo" />
        </div>
      </div>
    </header>
  );
}
