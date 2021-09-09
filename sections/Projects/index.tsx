import { useTheme } from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { SectionBreak } from '../../components/SectionBreak';
import { ProjectCard } from '../../components/ProjectCard';
import projectList from './list';
import * as Styled from './styles';

export const Projects: React.FC = () => {
    const theme = useTheme();

    return (
       <Styled.ProjectsSectionWrapper>
           <SectionBreak color={theme.secondary} />
           <Styled.ProjectsContainer>
               <h1>Projects</h1>
               <p>A few of my most recent projects</p>
                <Row style={{ width: '100%' }}>
                    {
                        projectList.map((proj, ind) => {
                            const first = ind === 0;
                            return (
                                <Col xs={12} md={first ? 12 : 6} lg={4}>
                                    <ProjectCard {...proj} />
                                </Col>
                            )
                        })
                    }
                </Row>
           </Styled.ProjectsContainer>
       </Styled.ProjectsSectionWrapper>
    )
}