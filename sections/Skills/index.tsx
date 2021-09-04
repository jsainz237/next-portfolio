import { useState } from "react";
import { CSSProperties, SVGProps } from "react";
import Container from "react-bootstrap/Container";

import { SectionBreak } from "../../components/SectionBreak"
import { SkillCard } from "../../components/SkillCard";
import Icons from '../../components/Icon';
import * as Styled from './styles';

export const Skills: React.FC = () => {
    return (
        <Styled.SkillsSectionWrapper>
            <SectionBreak />

            <Styled.SkillsContainer>
                <h1>Skills</h1>
                <Styled.SkillGrid>
                    {
                        Object.entries(Icons).map(([_, IconComponent], ind) => {
                            const section = ind + 1;
                            let align: CSSProperties['alignSelf'] = "center";
                            if(section === 2 || section === 7) align = "flex-end";
                            if(section === 3 || section === 8) align = "flex-start";

                            return (
                                <SkillCard style={{ gridArea: `s${section}`, alignSelf: align }}>
                                    <IconComponent />
                                </SkillCard>
                            );
                        })
                    }
                    
                </Styled.SkillGrid>
            </Styled.SkillsContainer>
        </Styled.SkillsSectionWrapper>
    )
}