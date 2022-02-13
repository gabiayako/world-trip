import "../styles/globals.css";
import "../styles/swiper.css";
import type { AppProps } from "next/app";
import { ThemeProvider, CSSReset } from "@chakra-ui/react";
import theme from "../theme";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
