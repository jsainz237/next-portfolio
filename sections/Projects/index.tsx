import { useEffect, useState} from 'react';
import { to } from 'react-spring';
import Col from 'react-bootstrap/Col';

import { ProjectCard } from '../../components/ProjectCard';
import { SectionTitle } from '../../components/common';
import projectList from './list';
import * as Styled from './styles';
import { useInterpolateScroll } from '../../_utils/hooks/useInterpolateScroll';

export const Projects: React.FC = () => {
    const [circleYPos] = useInterpolateScroll([60, -20]); 
    const [circleRad] = useInterpolateScroll([400, 700], [0, 50]);

    return (
        <Styled.ProjectsContainer>
            <SectionTitle>Recent Projects</SectionTitle>
            <Styled.ProjectsListRow>
                {
                    projectList.map((proj, ind) => {
                        const first = ind === 0;
                        return (
                            <Col key={ind} xs={12} md={first ? 12 : 6} lg={4}>
                                <ProjectCard first={first} {...proj} />
                            </Col>
                        )
                    })
                }
            </Styled.ProjectsListRow>
            <Styled.CircleGrid x={-85} y={circleYPos}>
                { new Array(9).fill(0).map((_, ind) => 
                    <Styled.Circle key={ind} style={{ borderRadius: circleRad }} />
                )}
            </Styled.CircleGrid>
        </Styled.ProjectsContainer>
    )
}