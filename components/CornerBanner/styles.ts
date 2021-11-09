import styled from 'styled-components';
import { a } from '@react-spring/web';

export const Banner = a(styled.div`
    position: absolute;
    width: 12rem;
    height: 2rem;
    padding: 0.25rem;
    background-color: ${({ theme }) => theme.primary};
    transform: rotate(45deg);
    display: flex;
    justify-content: center;
    align-items: center;

    h1, h2, h3, h4, h5, h6, p { 
        margin: 0;
    }
`);