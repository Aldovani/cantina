import Image from "next/image";
import Link from "next/link";

import Styles from "../styles/pages/login.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Router from "next/router";
import { api } from "../services/api";
import Cookies from "js-cookie";
import { useAuth } from "../hooks/useAuth";

const schema = yup
  .object({
    login: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  })
  .required();

type IFormData = {
  login: string;
  password: string;
};

export default function Login() {
  const { setToken, setUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
    shouldFocusError: true,
  });

  const onSubmit: SubmitHandler<IFormData> = async (inputsData) => {
    try {
      const { status, data } = await api.post("/clientes/login", {
        Login: inputsData.login,
        Senha: inputsData.password,
      });

      if (status === 200) {
        Cookies.set("Token", data.token);

        setToken(data.token);

        if (data.cliente === undefined) {
          data.cliente = { Nome: "SANDRA" };
          setUser({ name: "SANDRA" });
        }
        Cookies.set("Cliente", JSON.stringify(data.cliente));
        setUser({ name: data.cliente.Nome, login: data.cliente.Login });
        localStorage.setItem("Cliente", JSON.stringify(data.cliente));

        if (data.cliente.Nome == "SANDRA") Router.push("/staff/requests/");
        else Router.push("/");
      } else {
        alert("Email ou senha invalido");
      }
    } catch (err) {}
  };

  return (
    <main className={Styles.login}>
      <div className={Styles.left}>
        <Image
          src="/assets/logo-small.svg"
          width={170}
          height={40}
          className={Styles.logoSmall}
          alt="Logo small"
        />

        <form className={Styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h1>Entrar</h1>

          <div className={Styles.containerInput}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="email@exemplo.com"
              {...register("login")}
              className={errors.login ? Styles.invalid : ""}
            />
            <span className={Styles.erros}>{errors.login?.message}</span>
          </div>
          <div className={Styles.containerInput}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              className={errors.password ? Styles.invalid : ""}
              placeholder="***********"
              {...register("password")}
            />
            <span className={Styles.erros}>{errors.password?.message}</span>
          </div>
          <span className={Styles.link}>
            Esqueceu sua senha? <a>Click aqui!</a>
          </span>
          <button
            type="submit"
            disabled={!isValid}
            className={`${!isValid ? Styles.isValid : ""} ${
              isSubmitting ? Styles.isLoading : ""
            }`}
          >
            {!isSubmitting ? "Entrar" : ""}
          </button>
          <span className={Styles.link}>
            ainda não tem um cadastro,<Link href="/register">Click aqui!</Link>
          </span>
        </form>
      </div>
      <div className={Styles.right}>
        <Image
          src="/assets/Logo-big.svg"
          width={525}
          height={550}
          alt="Logo big"
        />
      </div>
    </main>
  );
}
