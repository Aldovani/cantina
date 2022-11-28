import Image from "next/image";
import Router from "next/router";
import { SyntheticEvent } from "react";
import Styles from "../styles/pages/register.module.css";

export default function Register() {
  const cadastrar = async (e: SyntheticEvent) => {
    e.preventDefault();
    const nome = (document.getElementById("nome") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const senha = (document.getElementById("password") as HTMLInputElement)
      .value;
    const confirmarSenha = (
      document.getElementById("confirmPassword") as HTMLInputElement
    ).value;

    if (senha !== confirmarSenha) {
      alert("Senhas não conferem");
      return;
    }

    const resposta = await fetch(
      "https://sandrapi.azurewebsites.net/clientes/cadastrar",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Nome: nome,
          Login: email,
          Senha: senha,
          CPF: "1232378910",
        }),
      }
    );

    if (resposta.ok) {
      alert("Cadastro realizado com sucesso!");
      Router.push("/login");
    } else {
      alert("Erro ao cadastrar");
    }
  };

  return (
    <main className={Styles.register}>
      <div className={Styles.left}>
        <Image
          src={"/src/assets/logo-small.svg"}
          className={Styles.logoSmall}
          alt="Logo small"
        />

        <form className={Styles.form} onSubmit={cadastrar}>
          <h1>Cadastro</h1>

          <div className={Styles.containerInput}>
            <label htmlFor="email">Nome completo</label>
            <input type="text" id="nome" placeholder="nome completo" />
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
            <input
              type="password"
              id="confirmPassword"
              placeholder="***********"
            />
          </div>

          <button type="submit">Cadastra</button>
          <span className={Styles.link}>
            já possui uma conta, <a>Click aqui!</a>
          </span>
        </form>
      </div>
      <div className={Styles.right}>
        <Image src={"/src/assets/logo-big.svg"} alt="Logo big" />
      </div>
    </main>
  );
}
