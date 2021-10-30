import styled from 'styled-components';
import { AbsoluteWrapper } from '@components/common';

export const SkillGrid = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(6, auto);
    grid-template-rows: repeat(3, auto);
    grid-template-areas: 
    "e-1 s0 s1 s2 s3 s4"
    "s5 s6 s7 s8 s9 s10"
    "e-2 e-2 s11 s12 s13 s14";
`;

export const DecorationBar = styled(AbsoluteWrapper)`
    height: 4rem;
    width: 40vw;
    background: ${({ theme }) => theme.secondary};
    border-radius: 0.25rem;
`;