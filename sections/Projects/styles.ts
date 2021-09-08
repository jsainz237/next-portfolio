import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

export const ProjectsSectionWrapper = styled.div`
    position: relative;
    height: auto;
    width: 100%;
    padding-top: 5rem;
    background-color: ${({ theme }) => theme.dkBg};
`

export const ProjectsContainer = styled(Container)`
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1, p {
        color: ${({ theme }) => theme.offsetBg};
    }
`