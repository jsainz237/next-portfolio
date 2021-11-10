import styled from 'styled-components';

export const IntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100%;

    & > * {
        color: ${({ theme }) => theme.primary};
    }

    h1 {
        font-family: 'Roboto Slab', serif;
        font-size: 5rem;

        ${({ theme }) => theme.utils.down('md')} {
            font-size: 4rem;
        }

        ${({ theme }) => theme.utils.down('sm')} {
            font-size: 2.5rem;
        }
    }

    p {
        font-size: 1.8rem;
        font-weight: 400;

        ${({ theme }) => theme.utils.down('md')} {
            font-size: 1.4rem;
        }

        ${({ theme }) => theme.utils.down('sm')} {
            font-size: 1rem;
        }
    }
`

export const ContentIcons = styled.div`
    display: flex;
    align-items: center;

    & > * {
        margin-right: 1.5rem;
    }
`

export const DevNotesWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${({ theme }) => theme.primary};

    & > *:not(:last-child) {
        margin-right: 0.5rem;
    }
`
