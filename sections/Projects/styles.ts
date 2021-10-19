import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import { AbsoluteWrapper } from '../../components/common';

export const ProjectsContainer = styled.div`
    position: relative;
    margin-top: 8rem;
    padding-bottom: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > * {
        z-index: 300;
    }
`;

export const ProjectsListRow = styled(Row)`
    width: 100%;
    margin-top: 1rem;
`;

const circleDiameter = "4rem";
export const Circle = styled.div`
    height: ${circleDiameter};
    width: ${circleDiameter};
    border-radius: 2rem;
    background: ${({ theme }) => theme.secondary};
`;

export const CircleGrid = styled(AbsoluteWrapper)`
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: repeat(3, auto);
    gap: 1rem;
`;