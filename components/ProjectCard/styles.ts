import styled from 'styled-components';
import Ratio from 'react-bootstrap/Ratio';

export interface ProjectCardProps {
    img?: string;
}

const borderRadius = '1.25rem';
export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    background: black;
    border-radius: ${() => borderRadius};
    transition: opacity 0.2s ease;
`

export const ProjectsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    transition: all 0.2s ease;
    backdrop-filter: blur(0);
`

export const Title = styled.h1`
    font-weight: bold;
    text-shadow: 6px 6px black;
    z-index: 100;
    opacity: 1;
    transition: all 0.2s ease;
`

export const AspectRatio = styled(Ratio)<Pick<ProjectCardProps, 'img'>>`
    border-radius: ${() => borderRadius};
    background: ${({ img }) => img && `url(${img})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    margin-bottom: 1.5rem;

    &:hover ${Overlay} {
        opacity: 0.9; 
    }

    &:hover ${ProjectsContainer} {
        backdrop-filter: blur(3px);
    }

    &:hover ${Title} {
        text-shadow: 0px 0px black;
        opacity: 0;
    }
`
