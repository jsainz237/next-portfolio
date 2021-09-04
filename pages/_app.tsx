import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import { theme } from '../styles/theme';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jesse Sainz</title>
        <meta charSet="UTF-8" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
    
  
}
export default MyApp
