import { useState } from "react";
import { CSSProperties, SVGProps } from "react";
import Container from "react-bootstrap/Container";

import { SectionBreak } from "../../components/SectionBreak"
import { SkillCard } from "../../components/SkillCard";
import Icons from '../../components/Icon';
import styles from './styles.module.scss';

export const Skills: React.FC = () => {
    // const [bgText, setBgText] = useState<string | null>("react");

    return (
        <div className={styles['skills-section-wrapper']}>
            <SectionBreak />

            {/* { !bgText ? null : (
                <div className={styles['skills-bg-text-container']}>
                    {bgText.toUpperCase()}
                </div>
            )} */}

            <Container className={styles['skills-container']}>
                <h1>Skills</h1>
                <div className={styles['skill-grid']}>
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
                    
                </div>
            </Container>
        </div>
    )
}