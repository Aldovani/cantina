import Image from "next/image";
import LogoBig from "../assets/Logo-big.svg";
import LogoSmall from "../assets/logo-small.svg";
import Styles from "../styles/pages/login.module.css";

export default function Login() {
  return (
    <main className={Styles.login}>
      <div className={Styles.left}>
        <Image src={LogoSmall} className={Styles.logoSmall} alt="Logo small" />

        <form className={Styles.form}>
          <h1>Entrar</h1>

          <div className={Styles.containerInput}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="email@exemplo.com" />
          </div>
          <div className={Styles.containerInput}>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="***********" />
          </div>
          <span className={Styles.link}>
            Esqueceu sua senha? <a>Click aqui!</a>
          </span>
          <button type="submit">Entrar</button>
          <span className={Styles.link}>
            ainda não tem um cadastro,<a>Click aqui!</a>
          </span>
        </form>
      </div>
      <div className={Styles.right}>
        <Image src={LogoBig} alt="Logo big" />
      </div>
    </main>
  );
}
