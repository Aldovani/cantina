import Styles from "./styles.module.css";
import Link from 'next/link'
export function RequestItem() {
  return (
    <Link  href="/staff/requests/1" className={Styles.requestItem}>
      <h2>#999999999 </h2>
      <h3>R$ 150.00</h3>
      <span>Aldovani Henrique da costa</span>
    </Link>
  );
}
