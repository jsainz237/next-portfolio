import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

const dotSize = 1, dotSpace = 24;

interface SkillsSectionWrapperProps {
    dotColor?: string;
    bg?: string;
}
export const SkillsSectionWrapper = styled.div<SkillsSectionWrapperProps>`
    position: relative;
    height: auto;
    width: 100%;
    padding-top: 5rem;

    background: ${({ bg, dotColor, theme }) => {
        return `linear-gradient(90deg, ${bg || theme.offsetBg} ${dotSpace - dotSize}px, transparent 1%) center,`
        + `linear-gradient(${bg || theme.offsetBg} ${dotSpace - dotSize}px, transparent 1%) center,`
        + `${dotColor || theme.textColor}`;
    }};
    background-size: ${() => `${dotSpace}px ${dotSpace}px`};
`

export const SkillsContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
`

export const SkillGrid = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    margin-bottom: 2rem;
    grid-template-columns: repeat(5, auto);
    grid-template-rows: repeat(12, auto);
    grid-template-areas: 
    "s1 s2 s4 s7 s9"
    "s1 s2 s4 s7 s9"
    "s1 s2 s4 s7 s9"
    "s1 s2 s4 s7 s9"
    "s1 s2 s5 s7 s9"
    "s1 s2 s5 s7 s9"
    "s1 s3 s5 s8 s9"
    "s1 s3 s5 s8 s9"
    "s1 s3 s6 s8 s9"
    "s1 s3 s6 s8 s9"
    "s1 s3 s6 s8 s9"
    "s1 s3 s6 s8 s9";
`