import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import * as Styled from './styles';
import { useEffect } from 'react';
import { useTheme } from 'styled-components';

export interface ProjectCardProps extends Styled.ProjectCardProps {
    title: string;
    description: string;
    tech: any[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, ...props }) => {
    const [ratio, setRatio] = useState<number>(9/16);
    const { breakpts } = useTheme();
    const iconSize = "1.5rem";

    // useEffect(() => {
    //     window.addEventListener('resize', )
    // }, [])

    // const handleResize = () => {
    //     if(window.innerWidth >= breakpts.xl) {
    //         return setRatio(9/16);
    //     }
    // }

    return (
        <Styled.AspectRatio {...props}>
            <Styled.ProjectsContainer>
                <Styled.Overlay />
                {/* <div> */}
                    <h1>{title}</h1>
                    <Styled.IconsWrapper>
                        {
                            tech.map(({ Icon }, ind) => 
                                <Icon key={ind} height={iconSize} width={iconSize} />) 
                        }
                    </Styled.IconsWrapper>
                    <p>{description}</p>
                {/* </div> */}
                <Styled.ViewButton>
                    view repo
                    <span><FontAwesomeIcon icon={faChevronRight} color="white" /></span>
                </Styled.ViewButton>
            </Styled.ProjectsContainer>
        </Styled.AspectRatio>
    )
}