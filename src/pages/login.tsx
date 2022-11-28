import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { SyntheticEvent, useRef } from "react";
import Styles from "../styles/pages/login.module.css";
import LogoBig from "../assets/logo-big.svg";
import LogoSmall from "../assets/logo-small.svg";

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

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
          Login: emailRef.current?.value,
          Senha: passwordRef.current?.value,
        }),
      }
    );

    if (resposta.status === 200) {
      let dados = await resposta.json();
      Cookies.set("Token", dados.token);

      if (dados.cliente === undefined) {
        dados.cliente = { Nome: "SANDRA" };
      }
      Cookies.set("Cliente", JSON.stringify(dados.cliente));
      localStorage.setItem("Cliente", JSON.stringify(dados.cliente));

      if (dados.cliente.Nome == "SANDRA") Router.push("/staff/requests/");
      else Router.push("/");
    } else {
      alert("Erro ao fazer login");
    }
  };

  return (
    <main className={Styles.login}>
      <div className={Styles.left}>
        <Image src={LogoSmall} className={Styles.logoSmall} alt="Logo small" />

        <form className={Styles.form} onSubmit={fazerLogin}>
          <h1>Entrar</h1>

          <div className={Styles.containerInput}>
            <label htmlFor="email">Email</label>
            <input
              ref={emailRef}
              type="text"
              id="email"
              placeholder="email@exemplo.com"
            />
          </div>
          <div className={Styles.containerInput}>
            <label htmlFor="password">Senha</label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              placeholder="***********"
            />
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
        <Image src={LogoBig} alt="Logo big" />
      </div>
    </main>
  );
}
