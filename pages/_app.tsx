import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import Container from 'react-bootstrap/Container';
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
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
    
  
}
export default MyApp
