import { useEffect } from 'react';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';
import Container from 'react-bootstrap/Container';
import prism from 'prismjs';
import "prismjs/components/prism-typescript";

import { Footer } from '@components/Footer';
import { theme } from '../styles/theme';
import '../styles/globals.scss'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  
  ${({ theme }) => theme.utils.down('sm')} {
    padding: 0 1rem;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    prism.highlightAll();
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>Jesse Sainz</title>
        <meta charSet="UTF-8" />
      </Head>
      <ThemeProvider theme={theme}>
        <StyledWrapper>
          <Container style={{ paddingBottom: "1rem" }}>
            <Component {...pageProps} />
          </Container>
          <Footer />
        </StyledWrapper>
      </ThemeProvider>
    </>
  );
    
  
}
export default MyApp
