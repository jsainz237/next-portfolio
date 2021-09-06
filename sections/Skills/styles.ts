import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

const dotSize = 1, dotSpace = 24;

export const SkillsSectionWrapper = styled.div`
    position: relative;
    height: auto;
    width: 100%;
    padding-top: 5rem;

    background: ${({ theme }) => {
        return `linear-gradient(90deg, ${theme.offsetBg} ${dotSpace - dotSize}px, transparent 1%) center,`
        + `linear-gradient(${theme.offsetBg} ${dotSpace - dotSize}px, transparent 1%) center,`
        + `${theme.textColor}`;
    }};
    background-size: ${() => `${dotSpace}px ${dotSpace}px`};
`

export const SkillsContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
`

export const TitleContainer = styled.div`
    position: relative;
    height: 3rem;
    width: 100%;
    margin-bottom: 1rem;
    text-align: center;
    display: inline-flex;
    justify-content: center;
    overflow: hidden;
`

export const SkillGrid = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    margin-bottom: 2rem;
    grid-template-columns: repeat(7, auto);
    grid-template-rows: repeat(12, auto);
    grid-template-areas: 
    "s0 s1 s3 s6 s10 s13 s15"
    "s0 s1 s3 s6 s10 s13 s15"
    "s0 s1 s3 s6 s10 s13 s15"
    "s0 s1 s3 s7 s10 s13 s15"
    "s0 s1 s4 s7 s11 s13 s15"
    "s0 s1 s4 s7 s11 s13 s15"
    "s0 s2 s4 s8 s11 s14 s15"
    "s0 s2 s4 s8 s11 s14 s15"
    "s0 s2 s5 s8 s12 s14 s15"
    "s0 s2 s5 s9 s12 s14 s15"
    "s0 s2 s5 s9 s12 s14 s15"
    "s0 s2 s5 s9 s12 s14 s15";
`