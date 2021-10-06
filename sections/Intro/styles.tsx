import styled from 'styled-components';
import { a } from 'react-spring';
import Container from 'react-bootstrap/Container';

export const IntroContainer = styled(a.div)`
    height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.xdkBg};
`

export const IntroContent = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    h1 {
        font-family: 'Roboto Slab', serif;
        font-size: 4rem;
        color: ${({ theme }) => theme.textColor};
    }

    p {
        color: ${({ theme }) => theme.textColor};
        font-size: 1.5rem;
        font-weight: 400;
    }
`