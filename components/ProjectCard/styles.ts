import styled from 'styled-components';

export interface ProjectCardProps {
    img?: string;
    first?: boolean;
}

const borderRadius = '0.75rem';
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
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease;
    backdrop-filter: blur(0);

    h1, p {
        opacity: 0;
        color: white;
        text-align: center;
        transition: all 0.2s ease;
    }

    h1 { font-size: 1.5rem; }
    p  { font-size: 0.825rem; }
`

export const Title = styled.h1`
    font-weight: bold;
    text-shadow: 6px 6px black;
    z-index: 100;
    opacity: 1;
    transition: all 0.2s ease;
`

export const AspectRatio = styled.div<ProjectCardProps>`
    border-radius: ${() => borderRadius};
    background: ${({ img }) => img && `url(${img})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    margin-bottom: 1.5rem;

    // show at xs-lg screens
    ${({ theme }) => theme.utils.down('lg')} {
        aspect-ratio: ${({ first }) => first ? `21 / 9` : `16 / 9`};

        & ${ProjectsContainer} {
            padding: ${({ first }) => first && `3rem 8rem`};
        }
    }

    // hide at lg screen size and up
    ${({ theme }) => theme.utils.up('lg')} {
        aspect-ratio: 4 / 3;
    }

    // show from xl-xxl screen
    ${({ theme }) => theme.utils.up('xl')} {
        aspect-ratio: 16 / 9;
    }

    ${({ theme }) => theme.utils.down('md')} {
        aspect-ratio: 16 / 9;

        & ${ProjectsContainer} {
            padding: 3rem 5rem;
        }
    }

    ${({ theme }) => theme.utils.down('xs')} {
        & ${ProjectsContainer} {
            padding: 1rem;
        }
    }

    &:hover ${ProjectsContainer} {
        backdrop-filter: blur(3px);
    }

    &:hover ${ProjectsContainer} * {
        opacity: 1;
        z-index: 1000;
    }

    &:hover ${ProjectsContainer} > ${Overlay} {
        opacity: 0.9;
    }
`

export const IconsWrapper = styled.div`
    opacity: 0;
    width: 100%;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

    * {
        margin: 0 0.25rem;
    }
`

export const ViewButton = styled.button`
    background: none;
    color: white;
    font-size: 0.835rem;
    border: 1px solid gray;
    padding: 0.5rem 1.5rem;
    border-radius: 0.75rem;
    opacity: 0;
    transition: all 0.3s ease;

    &:hover {
        opacity: 0.6 !important;
    }

    span {
        margin-left: 0.25rem;
    }
`
