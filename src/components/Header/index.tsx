import Image from "next/image";
import Styles from "./styles.module.css";
import Link from "next/link";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/router";
import { useListProduct } from "../../hooks/useListProduct";
import { useWindowSize } from "../../hooks/useSize";

export function Header() {
  const { logout, user } = useAuth();
  const { asPath, push } = useRouter();
  const { setIsOpen, isOpen, product } = useListProduct();
  const size = useWindowSize();

  function openBasket() {
    if (asPath === "/" || asPath === "/payment") {
      if (size.width < 1550) {
        setIsOpen(!isOpen);
      }
      return;
    }
    push("/");
  }

  return (
    <header className={Styles.header}>
      <div className={Styles.container}>
        <Image
          src="/assets/logo-small.svg"
          alt="Logo"
          height={40}
          width={170}
        />
        <div>
          <div className={Styles.containerMenu}>
            <Image
              src="/assets/icon-profile.svg"
              width={40}
              height={40}
              alt="Logo"
            />

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
              <Image
                src="/assets/icon-bag.svg"
                height={40}
                width={40}
                alt="Logo"
              />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
