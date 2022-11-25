import Image from "next/image";
import { Header } from "../../../components/Header";
import Styles from "../../../styles/pages/user/request.module.css";
import EmptyList from "../../../assets/empty-list.svg";
import { Badge } from "../../../components/Badge";
import Link from 'next/link'

export default function Index() {
  return (
    <div className={Styles.container}>
      <Header />

      <h1>Histórico</h1>

      <div className={Styles.containerRequests}>
        <Link href="/user/requests/1" className={Styles.requestItem}>
          <h2>#999999999 </h2>
          <h3>R$ 150.00</h3>
          <Badge  type="success"/>
        </Link>
       
      </div>

      {/* 
      <div className={Styles.containerEmptyList}>
        <Image src={EmptyList} alt="" />
        <span>Nenhum pedido realizado</span>
      </div> */}
    </div>
  );
}
