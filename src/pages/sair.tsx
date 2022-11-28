import Cookies from "js-cookie";
import Router from "next/router";
import { useEffect } from "react";

export default function Sair() {
  useEffect(() => {
    Cookies.remove("Token");
    Cookies.remove("Cliente");
    Router.push("/login");
  }, []);
  return <div />;
}
