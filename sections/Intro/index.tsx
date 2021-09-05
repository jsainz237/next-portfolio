import React, { useRef } from "react"
import { config, useSpring } from '@react-spring/three';
import Container from 'react-bootstrap/Container';
import { ContactShadows, Html, OrbitControls, OrthographicCamera  } from '@react-three/drei';
import * as THREE from 'three';

import { withCanvas } from '../../components/withCanvas';
import { Logo } from "../../components/Logo";
import * as Ease from '../../_utils/ease-functions';
import * as Styled from './styles';
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

const _Intro: React.FC = () => {
    const logo = useRef<THREE.Mesh>();
    const camera = useRef<any>();
    const light = useRef<any>();

    const spring = useSpring({
        loop: true,
        to: [
            { position: [4, -0.3, 0] },
            { position: [4, -0.45, 0 ] },
        ],
        from: {
            position: [4, -0.45, 0]
        },
        config: {
            duration: 3000,
            easing: Ease.easeInOutQuad,
            ...config.gentle,
        }
    })

    return (
        <>
            {/* Intro Content */}
            <Html fullscreen>
                <ThemeProvider theme={theme}>
                    <Styled.IntroContent>
                        <h1>&#128075; Hey, I'm Jesse!</h1>
                        <p>I'm a full stack web developer based in Austin, TX</p>
                    </Styled.IntroContent>
                </ThemeProvider>
            </Html>
            
            {/* 3D Canvas Components */}
            <Logo ref={logo} castShadow={true} position={spring.position as any} rotation={[Math.PI / 2, 0, 0]} />
            <ContactShadows position={[0, -1.9, 0]} opacity={0.3} width={20} height={10} far={20} rotation={[Math.PI / 2, 0, 0]} />

            <OrthographicCamera ref={camera} scale={0.01} position={[-2, 1.7, 5]} makeDefault />
            <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />

            <ambientLight intensity={0.5} />
            <pointLight castShadow={false} position={[0, 10, 0]} />
            <pointLight ref={light} castShadow={true} intensity={2} position={[5, 2, 2]} />
            <pointLight castShadow={false} position={[-3, -5, -5]} intensity={0.3} />
        </>
    )
}

export const Intro = withCanvas(_Intro, Styled.IntroContainer, {
    style: { overflow: 'unset' },
});