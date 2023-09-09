import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("sw.js", { scope: "/" });
    }
  }, []);
  return <Component {...pageProps} />;
}
