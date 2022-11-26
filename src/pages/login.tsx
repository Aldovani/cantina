import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { SyntheticEvent } from "react";
import Styles from "../styles/pages/login.module.css";

export default function Login() {
  const fazerLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    const resposta = await fetch(
      "https://sandrapi.azurewebsites.net/clientes/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Login: "guilherme",
          Senha: "123456",
        }),
      }
    );

    if (resposta.ok) {
      const dados = await resposta.json();

      Cookies.set("token", dados.token);
      Cookies.set("cliente", JSON.stringify(dados.cliente));

      Router.push("/");
    } else {
      alert("Erro ao fazer login");
    }
  };

  return (
    <main className={Styles.login}>
      <div className={Styles.left}>
        <Image
          src={"/src/assets/logo-small.svg"}
          className={Styles.logoSmall}
          alt="Logo small"
        />

        <form className={Styles.form} onSubmit={fazerLogin}>
          <h1>Entrar</h1>

          <div className={Styles.containerInput}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="email@exemplo.com" />
          </div>
          <div className={Styles.containerInput}>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="***********" />
          </div>
          <span className={Styles.link}>
            Esqueceu sua senha? <a>Clique aqui!</a>
          </span>
          <button type="submit">Entrar</button>
          <span className={Styles.link}>
            Ainda não tem um cadastro?{" "}
            <Link href="/register">Clique aqui!</Link>
          </span>
        </form>
      </div>
      <div className={Styles.right}>
        <Image src={"/src/assets/logo-big.svg"} alt="Logo big" />
      </div>
    </main>
  );
}
