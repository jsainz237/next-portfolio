import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { SkillCard } from "../../components/SkillCard";
import { SectionText, SectionTitle } from '../../components/common';
import Icons from '../../components/Icon';
import * as Styled from './styles';

export const Skills: React.FC = () => {
    const barXStart = -100;
    const [barXPos, set] = useState<number>(barXStart);

    useEffect(() => {
        window.addEventListener('scroll', moveBar);

        return () => window.removeEventListener('scroll', moveBar);
    })

    const moveBar = () => {
        const xPos = barXStart + (window.scrollY / 4);
        set(xPos);
    }

    return (
        <Row className="gx-5">
            <Col md={12} lg={6} style={{ zIndex: 100 }}>
                <SectionTitle>My Skills</SectionTitle>
                <SectionText>
                    I enjoy working on all aspects of web development,
                    from APIs and databases to the design and UX of the front-end. My favorite past
                    time is learning new technologies, tools, and libraries!
                </SectionText>
            </Col>
            <Col md={12} lg={6}>
                <Styled.Bar style={{ right: barXPos }}/>
                <Styled.SkillGrid>
                    {
                        Object.entries(Icons).map(([name, { Icon }], ind) => {
                            return (
                                <SkillCard key={ind} index={ind}>
                                    <Icon />
                                </SkillCard>
                            )
                        })
                    }
                </Styled.SkillGrid>
            </Col>
        </Row>
    )
}