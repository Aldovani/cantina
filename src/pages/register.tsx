import Image from "next/image";
import Link from "next/link";

import LogoBig from "../../public/assets/Logo-big.svg";
import LogoSmall from "../../public/assets/logo-small.svg";

import Styles from "../styles/pages/register.module.css";
import * as yup from "yup";
import Router from "next/router";
import { api } from "../services/api";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    name: yup.string().required("Campo obrigatório"),
    login: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo 6 caracteres"),
    passwordConfirmation: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password"), null], "Senha incorreta"),
  })
  .required();

type IFormData = {
  name: string;
  login: string;
  password: string;
  passwordConfirmation: string;
};

export default function Register() {
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
      const { status } = await api.post("/clientes/cadastrar", {
        Nome: inputsData.name,
        Login: inputsData.login,
        Senha: inputsData.password,
        CPF: "123456789",
      });
      if (status === 200) {
        Router.push("/login");
      }
    } catch (err) {}
  };

  return (
    <main className={Styles.register}>
      <div className={Styles.left}>
        <Image src={LogoSmall} className={Styles.logoSmall} alt="Logo small" />

        <form className={Styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h1>Cadastro</h1>

          <div className={Styles.containerInput}>
            <label htmlFor="name">Nome completo</label>
            <input
              className={errors.name ? Styles.invalid : ""}
              type="text"
              id="name"
              placeholder="nome completo"
              {...register("name")}
            />
            <span className={Styles.erros}>{errors.name?.message}</span>
          </div>
          <div className={Styles.containerInput}>
            <label htmlFor="login">Login</label>
            <input
              className={errors.login ? Styles.invalid : ""}
              type="text"
              id="login"
              placeholder="Aldovani"
              {...register("login")}
            />
            <span className={Styles.erros}>{errors.login?.message}</span>
          </div>
          <div className={Styles.containerInput}>
            <label htmlFor="password">Senha</label>
            <input
              className={errors.password ? Styles.invalid : ""}
              type="password"
              id="password"
              placeholder="***********"
              {...register("password")}
            />
            <span className={Styles.erros}>{errors.password?.message}</span>
          </div>
          <div className={Styles.containerInput}>
            <label htmlFor="password">Confirmar senha</label>
            <input
              className={errors.passwordConfirmation ? Styles.invalid : ""}
              type="password"
              id="password"
              placeholder="***********"
              {...register("passwordConfirmation")}
            />
            <span className={Styles.erros}>
              {errors.passwordConfirmation?.message}
            </span>
          </div>

          <button
            type="submit"
            className={` 
          ${isSubmitting ? Styles.isLoading : ""}
          ${isValid ? Styles.invalid : ""}`}
          >
            Cadastra
          </button>
          <span className={Styles.link}>
            já possui uma conta, <Link href="/login">Click aqui!</Link>
          </span>
        </form>
      </div>
      <div className={Styles.right}>
        <Image src={LogoBig} alt="Logo big" />
      </div>
    </main>
  );
}
