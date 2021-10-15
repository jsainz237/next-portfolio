import React from "react";
import { a, config, useTrail } from "@react-spring/web";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { INTER_DELAY } from './animations.config';
import * as Styled from './styles';
import { Button } from "../../components/Button";

export const Content: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Styled.IntroContent>
                <Header>
                    <h1>Hey, I'm Jesse!</h1>
                    <p>I'm a full stack web developer based in Austin, TX</p>
                </Header>
                <Links>
                    <Button text="contact" color="#a9b4bf" style={{ opacity: 1 }} />
                    <FontAwesomeIcon icon={faGithub} color="#a9b4bf" size={"2x"} />
                    <FontAwesomeIcon icon={faLinkedin} color="#a9b4bf" size={"2x"} />
                    <FontAwesomeIcon icon={faFileAlt} color="#a9b4bf" size={"2x"} />
                </Links>
            </Styled.IntroContent>
        </ThemeProvider>
    )
}

const Header: React.FC = ({ children }) => {
    const elems = React.Children.toArray(children);
    const trail = useTrail(elems.length, {
        delay: INTER_DELAY,
        from: { opacity: 0, y: -45 },
        to: { opacity: 1, y: 0 },
        config: config.slow,
    });

    return <>
        {trail.map(({ opacity, y }, index) => {
            return (
                <a.div key={index} style={{ opacity, transform: y.to(val => `translateY(${val}px)`) }}>
                    {elems[index]}
                </a.div>
            )
        })}
    </>
}

const Links: React.FC = ({ children }) => {
    const elems = React.Children.toArray(children);
    const trail = useTrail(elems.length, {
        delay: INTER_DELAY + 300,
        from: { opacity: 0, x: -45 },
        to: { opacity: 1, x: 0 },
        config: config.slow,
    });

    return (
        <Styled.ContentIcons>
            {trail.map(({ opacity, x }, index) => {
                return (
                    <a.div key={index} style={{ opacity, transform: x.to(val => `translateX(${val}px)`) }}>
                        {elems[index]}
                    </a.div>
                )
            })}
        </Styled.ContentIcons>
    )
}