import styled from 'styled-components';

export const Markdown = styled.div`
    padding-top: 4rem;
    padding-bottom: 4rem;

    h1, h2, h3, h4, h5, h6, p {
        color: ${({ theme }) => theme.primary};
    }

    a {
        color: #65A0F7;
    }

    pre {
        background-color: #202020;
        padding: 1rem;
    }
`;