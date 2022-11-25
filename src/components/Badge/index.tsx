import Styles from "./styles.module.css";

interface IBadge {
  type: "success" | "cancel" | "waiting";
}

export function Badge({ type }: IBadge) {
  if (type === "success") {
    return (
      <div
        className={` 
      ${Styles.badge}
      ${Styles.success}`}
      >
        <svg
          width={24}
          height={24}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m21.5 5.5-13.063 13L2.5 12.59"
            stroke="#F8F9FA"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        entregue
      </div>
    );
  } else if (type === "cancel") {
    return(

    <div
      className={` 
  ${Styles.badge}
  ${Styles.cancel}`}
    >
      <svg
        width={24}
        height={25}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m4 4.5 16 16M4 20.5l16-16"
          stroke="#F8F9FA"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Cancelado
    </div>
    )

  } else {
 return(

    <div
      className={` 
${Styles.badge}
${Styles.waiting}`}
    >
      <svg
        width={24}
        height={25}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22.5c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
          stroke="#FFF5F5"
          strokeLinejoin="round"
        />
        <path
          d="m12.005 6.5-.001 6.004 4.24 4.24"
          stroke="#FFF5F5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Aguardando
    </div>
 )

  }
}
