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

    ${({ theme }) => theme.utils.down('xl')} {
        grid-template-columns: repeat(5, auto);
        grid-template-rows: repeat(3, auto);
        grid-template-areas: 
        "s0 s1 s2 s3 s4"
        "s5 s6 s7 s8 s9"
        "s10 s11 s12 s13 s14";
    }

    ${({ theme }) => theme.utils.down('lg')} {
        margin-top: 1rem;
        grid-template-columns: repeat(6, auto);
        grid-template-rows: repeat(3, auto);
        grid-template-areas: 
        "s0 s1 s2 s3 s4 e-1"
        "s5 s6 s7 s8 s9 s10"
        "s11 s12 s13 s14 e-2 e-2";
    }

    ${({ theme }) => theme.utils.down('sm')} {
        grid-template-columns: repeat(5, auto);
        grid-template-rows: repeat(3, auto);
        grid-template-areas: 
        "s0 s1 s2 s3 s4"
        "s5 s6 s7 s8 s9"
        "s10 s11 s12 s13 s14";
    }
`;

export const DecorationBar = styled(AbsoluteWrapper)`
    height: 4rem;
    width: 40vw;
    background: ${({ theme }) => theme.secondary};
    border-radius: 0.25rem;

    ${({ theme }) => theme.utils.down('xl')} {
        width: 50vw;
        right: ${({ x }) => `${x + 50}px`} !important;
    }

    ${({ theme }) => theme.utils.down('lg')} {
        width: 70vw;
        right: ${({ x }) => `${x + 85}px`} !important;
    }

    ${({ theme }) => theme.utils.down('sm')} {
        width: 70vw;
        height: 3rem;
        top: 51px !important;
        right: ${({ x }) => `${x + 100}px`} !important;
    }
`;