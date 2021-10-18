import styled from 'styled-components';

export const IntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100%;

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
