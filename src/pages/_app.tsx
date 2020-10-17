import { StrictMode, FC } from 'react'
import { AppProps } from 'next/app'

import { GlobalContextProvider } from '../store/Global'
import '../styles/globals.css'

const MyApp:FC<AppProps> = ({ Component, pageProps }) => {
  return (
  <StrictMode>
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  </StrictMode>
  )
}

export default MyApp
