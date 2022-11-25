import { Header } from "../../../components/Header";
import { RequestItem } from "../../../components/RequestItem";
import Styles from "../../../styles/pages/staff/request.module.css";
import EmptyList from "../../../assets/empty-list.svg";
import Image from "next/image";

export default function Requests() {
  return (
    <div className={Styles.container}>
      <Header />
      <div>
        <div className={Styles.header}>
          <h1>Pedidos</h1>

          <div>
            <input type="text" placeholder="Numero do pedido" />
            <button>
              <svg
                width={24}
                height={25}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 19.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z"
                  stroke="#F8F9FA"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.329 7.672A3.987 3.987 0 0 0 10.5 6.5a3.987 3.987 0 0 0-2.828 1.172M16.611 17.11l4.243 4.244"
                  stroke="#F8F9FA"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* <div className={Styles.containerRequestItems}>
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
        </div> */}

        <div className={Styles.containerEmptyList}>
          <Image src={EmptyList} alt="" />
          <span>aguardando Pedido</span>
        </div>
      </div>
    </div>
  );
}
