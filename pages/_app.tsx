import { useEffect } from 'react';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import Head from 'next/head';
import styled, { StyleSheetManager, ThemeProvider } from 'styled-components';
import Container from 'react-bootstrap/Container';
import prism from 'prismjs';
import "prismjs/components/prism-typescript";

import { Footer } from '@components/Footer';
import { theme } from '../styles/theme';
import '../styles/globals.scss'
import isPropValid from '@emotion/is-prop-valid';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
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
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <ThemeProvider theme={theme}>
          <StyledWrapper>
            <Container style={{ paddingBottom: "1rem" }}>
              <Component {...pageProps} />
            </Container>
          </StyledWrapper>
          <Footer />
        </ThemeProvider>
      </StyleSheetManager>
    </>
  );
    
  
}
export default MyApp
