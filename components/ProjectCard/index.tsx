import { Button } from '../../components/common';
import * as Styled from './styles';

export interface ProjectCardProps extends Styled.ProjectCardProps {
    title: string;
    description: string;
    tech: any[];
    buttonText: string;
    link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    tech,
    buttonText,
    link,
    ...props 
}) => {
    const iconSize = "1.5rem";

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
                <a href={link} target="_blank" rel="noreferrer">
                    <Button>{buttonText}</Button>
                </a>
            </Styled.ProjectsContainer>
        </Styled.AspectRatio>
    )
}