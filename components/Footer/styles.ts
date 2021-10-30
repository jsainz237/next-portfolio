import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

export const FooterWrapper = styled.div`
    width: 100vw;
    padding: 2rem;
    margin-top: 4rem;
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.secondary};
    z-index: 0;
`;

export const FooterContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Links = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0.5rem;

    & > *:not(:last-child) {
        margin-right: 1rem;
    }
`;

export const SideBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-weight: 100;
    font-size: smaller;

    p { margin: 0; }
`;