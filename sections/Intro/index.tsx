import React from "react";
import { a, config as springConfig, useTrail } from "@react-spring/web";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

import config from 'config';
import * as Styled from './styles';
import { Button, Link } from "../../components/common";

export const Intro: React.FC = () => {
    return (
        <Styled.IntroWrapper>
            <Header>
                <h1>Hey, I'm Jesse!</h1>
                <p>I'm a full stack web developer based in Austin, TX</p>
            </Header>
            <Links>
                <Button color="#a9b4bf" style={{ opacity: 1 }}>contact</Button>
                <Link href={config.links.github}>
                    <FontAwesomeIcon icon={faGithub} color="#a9b4bf" size={"2x"} />
                </Link>
                <Link href={config.links.linkedin}>
                    <FontAwesomeIcon icon={faLinkedin} color="#a9b4bf" size={"2x"} />
                </Link>
                <Link href={config.links.resume}>
                    <FontAwesomeIcon icon={faFileAlt} color="#a9b4bf" size={"2x"} />
                </Link>
            </Links>
        </Styled.IntroWrapper>
    )
}

const Header: React.FC = ({ children }) => {
    const elems = React.Children.toArray(children);
    const trail = useTrail(elems.length, {
        from: { opacity: 0, y: -45 },
        to: { opacity: 1, y: 0 },
        delay: 1000,
        config: springConfig.slow,
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
        from: { opacity: 0, x: -45 },
        to: { opacity: 1, x: 0 },
        delay: 1000,
        config: springConfig.slow,
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