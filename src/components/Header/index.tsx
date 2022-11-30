import Image from "next/image";
import LogoSmall from "../../../public/assets/logo-small.svg";
import IconBag from "../../../public/assets/icon-bag.svg";
import IconProfile from "../../../public/assets/icon-profile.svg";
import Styles from "./styles.module.css";
import Link from "next/link";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/router";
import { useListProduct } from "../../hooks/useListProduct";

export function Header() {
  const { logout, user } = useAuth();
  const { asPath, push } = useRouter();
  const { setIsOpen, isOpen, product } = useListProduct();

  function openBasket() {
    if (asPath === "/" || asPath === "/payment") {
      setIsOpen(!isOpen);
      return;
    }
    push("/");
  }

  return (
    <header className={Styles.header}>
      <div className={Styles.container}>
        <Image src={LogoSmall} alt="Logo" />
        <div>
          <div className={Styles.containerMenu}>
            <Image src={IconProfile} alt="Logo" />

            <div className={Styles.menu}>
              {user?.name !== "SANDRA" ? (
                <>
                  <Link href="/user/requests" className={Styles.link}>
                    Pedidos
                  </Link>
                  <span onClick={logout} className={Styles.link}>
                    Sair
                  </span>
                </>
              ) : (
                <span onClick={logout} className={Styles.link}>
                  Sair
                </span>
              )}
            </div>
          </div>
          {user?.name !== "SANDRA" && (
            <button
              className={`${Styles.openBasket}
            ${product.length > 0 ? Styles.isValue : ""}
            `}
              data-qty={product.length}
              onClick={openBasket}
            >
              <Image src={IconBag} alt="Logo" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
