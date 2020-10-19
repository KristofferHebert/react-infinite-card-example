import { FC } from "react";
import { AppProps } from "next/app";

import { GlobalContextProvider } from "stores/Global";
import "styles/main.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  );
};

export default MyApp;
