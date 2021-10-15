import styled from 'styled-components';
import { a } from 'react-spring';
import Container from 'react-bootstrap/Container';

export const IntroContainer = styled(a.div)`
    height: 100vh;
    width: 100vw;
    background-color: #0c0c0c;
`

export const IntroContent = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    h1 {
        font-family: 'Roboto Slab', serif;
        font-size: 5rem;
        color: #a9b4bf;
    }

    p {
        color: #a9b4bf;
        font-size: 1.8rem;
        font-weight: 400;
    }
`

export const ContentIcons = styled.div`
    display: flex;
    align-items: center;

    & > * {
        margin-right: 1.5rem;
    }
`
