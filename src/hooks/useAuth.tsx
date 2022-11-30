import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export function useAuth() {
  const { token, setToken, logout, user, setUser, } = useContext(AuthContext);

  return { token, setToken, logout, user, setUser };
}
