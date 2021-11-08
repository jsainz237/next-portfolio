import styled from 'styled-components';
import { AbsoluteWrapper } from '..';

export const MarkdownWrapper = styled.div`
    position: relative;
    padding-top: 4rem;
    padding-bottom: 4rem;
`;

export const MarkdownContent = styled.div`
    z-index: 100;
    
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

export const DecorationBar = styled(AbsoluteWrapper)`
    background-color: ${({ theme }) => theme.secondary};
    width: 80%;
    z-index: -1000 !important;
`;