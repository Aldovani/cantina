import Styles from "./styles.module.css";
import Link from "next/link";

interface IRequest {
  id: number;
  price: number;
  name: string;
}

export function Request({ id, name, price }: IRequest) {
  return (
    <Link href={`/staff/requests/${id}`} className={Styles.requestItem}>
      <h2>#{id.toString().padStart(9, "0")} </h2>
      <h3>R$ {price.toLocaleString("pt-br", { minimumFractionDigits: 2 })}</h3>
      <span>{name}</span>
    </Link>
  );
}
