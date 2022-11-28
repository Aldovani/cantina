import Styles from "./styles.module.css";
import Link from "next/link";
import { Pedido } from "../../Entidades/Pedido";
export function RequestItem({ pedido }: { pedido: Pedido }) {
  return (
    <Link href="/staff/requests/1" className={Styles.requestItem}>
      <h2>#{pedido.Id} </h2>
      <h3>R$ {pedido.Valor.toFixed(2).toString().replace(".", ",")}</h3>
      <span>{pedido.Clientes?.Nome}</span>
    </Link>
  );
}
