import * as Styled from './styles';

export interface ProjectCardProps extends Styled.ProjectCardProps {
    title: string;
    description: string;
    tech: any[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, img }) => {
    return (
        <Styled.AspectRatio aspectRatio="16x9" img={img}>
            <Styled.ProjectsContainer>
                <Styled.Overlay />
                {/* <Styled.Title style={{ zIndex: 100 }}>{ title }</Styled.Title> */}
            </Styled.ProjectsContainer>
        </Styled.AspectRatio>
    )
}