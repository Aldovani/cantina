import Image from "next/image";
import LogoSmall from "../../assets/logo-small.svg";
import IconBag from "../../assets/icon-bag.svg";
import IconProfile from "../../assets/icon-profile.svg";
import Styles from "./styles.module.css";
import * as DMenu from "@radix-ui/react-dropdown-menu";
import Cookies from "js-cookie";
import Link from "next/link";
export function Header() {
  return (
    <header className={Styles.header}>
      <div className={Styles.container}>
        <Image src={LogoSmall} alt="Logo" />
        <div>
          <DMenu.Root>
            <DMenu.Trigger className={Styles.trigger}>
              <Image src={IconProfile} alt="Logo" />
            </DMenu.Trigger>
            <DMenu.Content className={Styles.content}>
              <DMenu.Item className={Styles.item}>
                {
                  JSON.parse(
                    Cookies.get("Cliente") ? Cookies.get("Cliente") : "{}"
                  ).Nome
                }
              </DMenu.Item>
              <DMenu.Separator className={Styles.separator} />
              <DMenu.Item className={Styles.item}>
                <Link href="/sair" replace>
                  <p>Sair</p>
                </Link>
              </DMenu.Item>
            </DMenu.Content>
          </DMenu.Root>
          <Link
            href={`/${
              JSON.parse(Cookies.get("Cliente") ? Cookies.get("Cliente") : "{}")
                .Nome == "SANDRA"
                ? "staff"
                : "user"
            }/requests`}
          >
            <Image src={IconBag} alt="Logo" />
          </Link>
        </div>
      </div>
    </header>
  );
}
