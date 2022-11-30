import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ListProductProvider } from "../context/ListProductContext";
import { AuthProvider } from "../context/AuthProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
        <ListProductProvider>
          <Component {...pageProps} />;
        </ListProductProvider>
    </AuthProvider>
  );
}
