import React, { useEffect, useRef, useState } from "react"
import { a, config, useSpring, to } from '@react-spring/three';
import { ThemeProvider } from "styled-components";
import * as Ease from 'd3-ease';
import * as THREE from 'three';
import {
    Html,
    OrbitControls,
    OrthographicCamera,
    useHelper,
} from '@react-three/drei';

import { withCanvas } from '../../components/withCanvas';
import { Logo } from "../../components/Logo";
import { theme } from "../../styles/theme";
import * as Styled from './styles';

const DEBUG_SCENE = false;

const ANIM_1_DURATION = 2500;
const ANIM_2_DURATION = 2000;

const LOGO_PROPS_1 = {
    position: [0, 0, 2.5],
    rotation: [Math.PI / 2, 0, 0],
    scale: 175
}

const LOGO_PROPS_2 = {
    position: [3.63, -0.2, 2.5],
    rotation: [0.861, -0.48, 0.38],
    scale: 300,
}

const _Intro: React.FC = () => {
    const [animation1Done, setAnimation1Done] = useState<boolean>(false);
    const p1Ref = useRef<any>();
    const p2Ref = useRef<any>();

    if(DEBUG_SCENE) {
        useHelper(p1Ref, THREE.PointLightHelper, 1, 'red');
        useHelper(p2Ref, THREE.PointLightHelper, 1, 'blue');
    }

    useEffect(() => {
        setTimeout(() => {
            setAnimation1Done(true);
            console.log("DONE");
        }, ANIM_1_DURATION + 100);
    });

    // ANIMATION 1
    const pl1Spring = useSpring({ 
        from: { x: -30, intensity: 0 },
        to:   { x: 30, intensity: ANIM_1_DURATION },
        config: {
            ...config.gentle,
            duration: ANIM_1_DURATION,
            easing: Ease.easeQuadInOut,
        },
    })

    // ANIMATION 2
    const anim2 = useSpring({
        delay: ANIM_1_DURATION + 250,
        from: {
            pl2Intensity: 0,
            rx: LOGO_PROPS_2.rotation[0] + 0.06,
            rz: LOGO_PROPS_2.rotation[2] + 0.06,
            py: LOGO_PROPS_2.position[1] + 0.06,
        },
        to: {
            pl2Intensity: 1,
            rx: LOGO_PROPS_2.rotation[0],
            rz: LOGO_PROPS_2.rotation[2],
            py: LOGO_PROPS_2.position[1],
        },
        config: {
            ...config.gentle,
            duration: ANIM_2_DURATION,
            easing: Ease.easeCubicInOut,
        }
    })

    const logoPositionInterpolation = anim2.py.to(yVal => 
        [LOGO_PROPS_2.position[0], yVal, LOGO_PROPS_2.position[1]]
    );

    const logoRotationInterpolation = to([anim2.rx, anim2.rz], (rx, rz) =>
        [rx, LOGO_PROPS_2.rotation[1], rz]
    );

    return (
        <>
            {/* Intro Content */}
            {!DEBUG_SCENE && <Html fullscreen>
                <ThemeProvider theme={theme}>
                    <Styled.IntroContent>
                        <h1>&#128075; Hey, I'm Jesse!</h1>
                        <p>I'm a full stack web developer based in Austin, TX</p>
                    </Styled.IntroContent>
                </ThemeProvider>
            </Html> }
            
            {/* LOGO MESH */}
            { !animation1Done ? 
                <Logo color="#242424" {...LOGO_PROPS_1 as any} /> :
                <Logo
                    color="#242424"
                    position={logoPositionInterpolation as any}
                    rotation={logoRotationInterpolation as any}
                    scale={LOGO_PROPS_2.scale}
                />
            }

            {/* CAMERA & CONTROLS */}
            <OrthographicCamera scale={0.01} position={[0, 0, 10]} makeDefault />
            { DEBUG_SCENE && <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} /> }

            {/* LIGHTING */}
            <a.ambientLight intensity={anim2.pl2Intensity.to([0, 1], [0.770, 0]) as any} />
            <a.pointLight
                ref={p1Ref}
                color="#C2E0FF"
                position={pl1Spring.x.to(x => [x, 10, 0]) as any} 
                intensity={pl1Spring.intensity.to(
                    [0, (ANIM_1_DURATION / 4), (3 * ANIM_1_DURATION / 4), ANIM_1_DURATION],
                    [0, 0.8, 0.8, 0]
                ) as any}
            />
            <a.pointLight
                ref={p2Ref}
                color="#C2E0FF"
                position={[0, 4, 1]}
                intensity={anim2.pl2Intensity as any}
            />
        </>
    )
}

export const Intro = withCanvas(_Intro, Styled.IntroContainer);