import Image from "next/image";
import LogoBig from "../assets/Logo-big.svg";
import LogoSmall from "../assets/logo-small.svg";
import Styles from "../styles/pages/register.module.css";

export default function Register() {
  return (
    <main className={Styles.register}>
      <div className={Styles.left}>
        <Image src={LogoSmall} className={Styles.logoSmall} alt="Logo small" />

        <form className={Styles.form}>
          <h1>Cadastro</h1>

          <div className={Styles.containerInput}>
            <label htmlFor="email">Nome completo</label>
            <input type="text" id="email" placeholder="nome completo" />
          </div>
          <div className={Styles.containerInput}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="email@exemplo.com" />
          </div>
          <div className={Styles.containerInput}>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="***********" />
          </div>
          <div className={Styles.containerInput}>
            <label htmlFor="password">Confirmar senha</label>
            <input type="password" id="password" placeholder="***********" />
          </div>
       
          <button type="submit">Cadastra</button>
          <span className={Styles.link}>
          já possui uma conta, <a>Click aqui!</a>
          </span>
        </form>
      </div>
      <div className={Styles.right}>
        <Image src={LogoBig} alt="Logo big" />
      </div>
    </main>
  );
}
