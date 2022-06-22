import "../styles/globals.css";
import type { AppProps } from "next/app";
import LayoutUser from "../Components/LayoutUser";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutUser>
      <Component {...pageProps} />
    </LayoutUser>
  );
}

export default MyApp;
