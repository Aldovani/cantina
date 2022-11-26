import { Header } from "../components/Header/";
import { ListProducts } from "../components/ListProducts";
import Styles from "../styles/pages/payment.module.css";
import Link from "next/link";
import ArrowBack from "../assets/arrow-back.svg";
import CardInput from "../assets/card-input.svg";
import Image from "next/image";

export default function Payment() {
  return (
    <div className={Styles.payment}>
      <Header />
      <div>
        <div>
          <Link href="/" className={Styles.back}>
            <Image src={ArrowBack} alt="" />
            Voltar
          </Link>
          <h3 className={Styles.title}>Método de pagamento</h3>
          <div className={Styles.containerPaymentMethod}>
            <label
              htmlFor="card"
              className={`${Styles.radio} ${Styles.selected}`}
            >
              <svg
                width={32}
                height={32}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.666 6.667c0-.737.597-1.334 1.333-1.334h24c.737 0 1.334.597 1.334 1.334v18.666c0 .737-.597 1.334-1.334 1.334H4a1.333 1.333 0 0 1-1.333-1.334V6.667Z"
                  stroke="#868E96"
                  strokeWidth={1.333}
                  strokeLinejoin="round"
                />
                <path
                  d="M2.666 10.667h26.667M18 21.333h6M29.334 6.667v10.666M2.666 6.667v10.666"
                  stroke="#868E96"
                  strokeWidth={1.333}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Cartão
              <input type="radio" name="payment" id="card" />
            </label>
            <label htmlFor="pix" className={`${Styles.radio} `}>
              <svg
                width={32}
                height={32}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#a)">
                  <path
                    d="M10.833 8.424a4.98 4.98 0 0 0-2.849-1.5l5.03-5.03v-.001a4.192 4.192 0 0 1 5.928 0l4.975 4.971A5.328 5.328 0 0 0 20.748 8.4l-4.791 4.791a.336.336 0 0 1-.202.087c-.039 0-.082-.012-.13-.061l-.005-.005-4.787-4.787Zm2.847 6.721.015.016.017.015c.45.394 1.043.719 1.695.812a2.921 2.921 0 0 0-1.728.83v.001l-4.783 4.776c-.556.511-1.19.778-1.859.778H5.324l-3.431-3.43a4.185 4.185 0 0 1 0-5.922l3.431-3.437h1.713c.668 0 1.302.267 1.859.777l4.784 4.784Zm4.196 1.666a2.92 2.92 0 0 0-1.722-.823c.648-.093 1.24-.42 1.69-.812l.017-.015.015-.016 4.81-4.81h.002a2.656 2.656 0 0 1 1.85-.764h2.08l3.45 3.45a4.19 4.19 0 0 1 0 5.921l-3.45 3.45h-2.08c-.686 0-1.36-.28-1.85-.768l-4.812-4.813Zm-2.256 1.94a.222.222 0 0 1 .158-.058c.07 0 .126.026.158.059l4.813 4.812a5.328 5.328 0 0 0 3.163 1.534l-4.966 4.966c-1.635 1.589-4.294 1.589-5.93 0L7.98 25.033a5.329 5.329 0 0 0 2.846-1.488l4.794-4.793Z"
                    stroke="#868E96"
                    strokeWidth={1.33}
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h32v32H0z" />
                  </clipPath>
                </defs>
              </svg>
              Pix
              <input type="radio" name="payment" id="pix" />
            </label>
            <label htmlFor="ticket" className={`${Styles.radio} `}>
              <svg
                width={32}
                height={32}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 10.667 22.667 4l2.666 6.667"
                  stroke="#868E96"
                  strokeWidth={1.333}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.666 10.667h26.667v4c-2 0-4 1.333-4 3.666 0 2.334 2 4.334 4 4.334v4H2.666v-4c2 0 4-1.334 4-4 0-2.667-2-4-4-4v-4Z"
                  stroke="#868E96"
                  strokeWidth={1.333}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.334 16.923h4M11.334 20.923h9.333"
                  stroke="#868E96"
                  strokeWidth={1.333}
                  strokeLinecap="round"
                />
              </svg>
              Boleto
              <input type="radio" name="payment" id="ticket" />
            </label>
          </div>

          <form className={Styles.form}>
            <label htmlFor="name">
              <h4>Nome do titular</h4>
              <span>Digite o nome do titular do cartão</span>
              <input type="text" id="name" placeholder="Felipe duarte" />
            </label>
            <label htmlFor="card">
              <h4>Numero do cartão</h4>
              <span>Digite os 14-16 numero do cartão</span>
              <div className={Styles.icon}>
                <Image src={CardInput} className={Styles.iconInput} alt="" />
                <input
                  type="number"
                  id="card"
                  placeholder="0000 - 0000 - 0000 - 0000"
                />
              </div>
            </label>
            <label htmlFor="validation">
              <h4>Validade</h4>
              <span>Digite a data de validade do cartão (Mes e ano) </span>
              <div className={Styles.dateValidation}>
                <input
                  id="validation"
                  type="number"
                  className={Styles.center}
                  placeholder="12"
                />
                <span className={Styles.divider}>/</span>
                <input
                  type="number"
                  className={Styles.center}
                  placeholder="2022"
                />
              </div>
            </label>

            <label htmlFor="security">
              <h4>Código de Segurança</h4>
              <span>Digite os 3 ou 4 numero de segurança</span>
              <input
                type="number"
                placeholder="123"
                className={Styles.center}
                maxLength={4}
                id="security"
              />
            </label>

            <button>Pagar</button>
          </form>
        </div>

        <ListProducts buttonVisible={false} />
      </div>
    </div>
  );
}
