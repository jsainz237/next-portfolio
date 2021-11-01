import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { SkillCard } from "@components/SkillCard";
import { SectionText, SectionTitle } from '@components/common';
import { useInterpolateScroll, useScreenSize } from "@utils/hooks";
import Icons from '@components/Icon';
import * as Styled from './styles';
import { useEffect } from "react";

export const Skills: React.FC = () => {
    const [barXPos] = useInterpolateScroll([-200, 0]);
    const [xDiff] = useScreenSize({
        'xl': 50,
        'lg': 85,
        'sm': 100,
        'xs': 100,
        default: 0,
    });

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
            <Col md={12} lg={6} style={{ position: "relative" }}>
                <Styled.DecorationBar x={barXPos + xDiff} y={43} right/>
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