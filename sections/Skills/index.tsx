import { useState, useEffect } from "react";
import { a, useTransition, useSpring, useSpringRef, config } from 'react-spring';

import { SectionBreak } from "../../components/SectionBreak"
import { SkillCard } from "../../components/SkillCard";
import Icons from '../../components/Icon';
import * as Styled from './styles';

export const Skills: React.FC = () => {
    const [title, set] = useState<string>("Skills");
    const transRef = useSpringRef();

    const transtions = useTransition(title, {
        ref: transRef,
        keys: null,
        from: { opacity: 0, transform: 'translate3d(0, -100%, 0)', position: 'absolute', top: 0 },
        enter: { opacity: 1, transform: 'translate3d(0, 0%, 0)' },
        leave: { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
    });

    const { breakPos } = useSpring({
        from: { breakPos: 100 },
        to:   { breakPos: 0 },
        delay: 1000,
        config: config.slow,
    });

    useEffect(() => {
        transRef.start();
    }, [title])

    return (
        <Styled.SkillsSectionWrapper>
            <SectionBreak
                style={{ transform: breakPos.to(y => `translateY(${y}px)`)} as any }
            />
           
            <Styled.SkillsContainer>
                <Styled.TitleContainer>
                    { transtions((style, title) => <a.h1 style={style as any}>{title}</a.h1>)}
                </Styled.TitleContainer>
                <Styled.SkillGrid>
                    {
                        Object.entries(Icons).map(([name, { Icon }], ind) => {
                            return (
                                <SkillCard key={ind} index={ind}
                                    onMouseEnter={() => set(name)}
                                    onMouseLeave={() => set("Skills")}
                                >
                                    <Icon />
                                </SkillCard>
                            )
                        })
                    }
                    
                </Styled.SkillGrid>
            </Styled.SkillsContainer>
        </Styled.SkillsSectionWrapper>
    )
}