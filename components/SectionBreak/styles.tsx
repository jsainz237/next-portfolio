import styled from 'styled-components';
import { a } from 'react-spring';

const sectionHeight = '6rem';

export const SectionBreak = styled(a.div)`
    display: inline-flex;
    width: 100%;
    position: absolute;
    top: ${`calc(${sectionHeight} / -2)`};
    left: 0;
`;

export interface BreakHalfProps {
    left?: boolean;
    right?: boolean;
    color?: string;
}
export const BreakHalf = styled.div<BreakHalfProps>`
    width: 50%;
    height: ${sectionHeight};
    background-color: ${({ color, theme }) => color || theme.primary};
    z-index: 100;
    transform: ${props => {
        if(props.left) return "skewX(5deg) rotateZ(5deg)";
        if(props.right) return "skewX(-5deg) rotateZ(-5deg)";
        return undefined;
    }}
`;