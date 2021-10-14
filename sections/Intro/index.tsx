import React, { useEffect, useRef, useState } from "react"
import { a, config, useSpring } from '@react-spring/three';
import { ThemeProvider } from "styled-components";
import * as Ease from 'd3-ease';
import { ContactShadows, Html, OrbitControls, OrthographicCamera, useHelper  } from '@react-three/drei';
import * as THREE from 'three';

import { withCanvas } from '../../components/withCanvas';
import { Logo } from "../../components/Logo";
import * as Styled from './styles';
import { theme } from "../../styles/theme";

const DEBUG = false;

const ANIM_1_DURATION = 3000;

const _Intro: React.FC = () => {
    const logo = useRef<THREE.Mesh>();
    const camera = useRef<any>();
    const lightRef = useRef<any>();

    const lightSpring = useSpring({ 
        from: { x: -30, intensity: 0 },
        to:   { x: 30, intensity: ANIM_1_DURATION },
        config: {
            ...config.gentle,
            duration: ANIM_1_DURATION,
            easing: Ease.easeQuadInOut,
        },
    })

    if(DEBUG) {
        useHelper(lightRef, THREE.PointLightHelper, 1, 'red');
    }

    return (
        <>
            {/* Intro Content */}
            {!DEBUG && <Html fullscreen>
                {/* <ThemeProvider theme={theme}>
                    <Styled.IntroContent>
                        <h1>&#128075; Hey, I'm Jesse!</h1>
                        <p>I'm a full stack web developer based in Austin, TX</p>
                    </Styled.IntroContent>
                </ThemeProvider> */}
            </Html> }
            
            {/* 3D Canvas Components */}
            <Logo ref={logo} castShadow={true} position={[0, 0, 2.5]} rotation={[Math.PI / 2, 0, 0]} color="#242424" />

            { DEBUG && <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} /> }

            <ambientLight intensity={0.770} />
            <a.pointLight 
                color="#C2E0FF"
                position={lightSpring.x.to(x => [x, 10, 5.15]) as any} 
                intensity={lightSpring.intensity.to(
                    [0, (ANIM_1_DURATION / 4), (3 * ANIM_1_DURATION / 4), ANIM_1_DURATION],
                    [0, 0.8, 0.8, 0]
                ) as any}
            />
            {/* <pointLight ref={light} castShadow={true} intensity={2} position={[5, 2, 2]} /> */}
            {/* <pointLight castShadow={false} position={[-3, -5, -5]} intensity={0.3} /> */}
        </>
    )
}

export const Intro = withCanvas(_Intro, Styled.IntroContainer);