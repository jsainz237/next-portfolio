import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import Container from 'react-bootstrap/Container';
import Head from 'next/head';

import { Footer } from '@components/Footer';
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
        <Container style={{ paddingBottom: "1rem" }}>
          <Component {...pageProps} />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
    
  
}
export default MyApp
