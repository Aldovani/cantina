import Router from "next/router";
import Cookies from "js-cookie";

import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface IAuthProvider {
  children: React.ReactNode;
}

interface IAuthContext {
  token: string;
  setToken: (token: string) => void;
  logout: () => void;
  setUser: (user: IUser) => void;
  user: IUser | undefined;
}

export const AuthContext = createContext({} as IAuthContext);

interface IUser {
  name: string;
  login?: string;
}

export function AuthProvider({ children }: IAuthProvider) {
  const [token, setToken] = useState("");

  const [user, setUser] = useState<IUser>();

  function logout() {
    Cookies.remove("Token");
    Cookies.remove("Cliente");
    setToken("");
    setUser(undefined);
    Router.push("/login");
  }

  useEffect(() => {
    const result = Cookies.get("Token");
    if (!result) {
      Router.push("/login");
    }
    if (result) {
      setToken(result);

      const data = localStorage.getItem("Cliente");
      if (data) {
        const result = JSON.parse(data);
        setUser({
          name: result?.Nome,
          login: result.Login || "",
        });
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ setUser, token, logout, setToken, user }}>
      {children}
    </AuthContext.Provider>
  );
}
