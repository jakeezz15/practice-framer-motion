import "../../styles/globals.css";
import type { AppProps } from "next/app";
import axiosDefaults from "../utils/lib/axiosDefaults";

axiosDefaults();
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
