import type { AppProps } from 'next/app'
import styled, { ThemeProvider } from 'styled-components';
import Container from 'react-bootstrap/Container';
import Head from 'next/head';

import { Footer } from '@components/Footer';
import { theme } from '../styles/theme';
import '../styles/globals.scss'

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  
  ${({ theme }) => theme.utils.down('sm')} {
    padding: 0 1rem;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
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
        </StyledWrapper>
        <Footer />
      </ThemeProvider>
    </>
  );
    
  
}
export default MyApp
