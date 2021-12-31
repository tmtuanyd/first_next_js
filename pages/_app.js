import { useEffect } from "react";
import ClientOnly from "../components/ClientOnly";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <ClientOnly>
      <Component {...pageProps} />;
    </ClientOnly>
  );
}

export default MyApp;
