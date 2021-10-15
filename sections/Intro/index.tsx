import React, { useRef } from "react"
import { a, config, useSpring, to } from '@react-spring/three';
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
import { Content } from "./content";
import * as Styled from './styles';

const DEBUG_SCENE = false;

const LOGO_PROPS = {
    position: [3.63, -0.2, 2.5],
    rotation: [0.861, -0.48, 0.38],
    scale: 300,
}

const _Intro: React.FC = () => {
    const p1Ref = useRef<any>();
    const p2Ref = useRef<any>();

    if(DEBUG_SCENE) {
        useHelper(p1Ref, THREE.PointLightHelper, 1, 'red');
        useHelper(p2Ref, THREE.PointLightHelper, 1, 'blue');
    }

    const animation = useSpring({
        from: {
            pl2Intensity: 0,
            rx: LOGO_PROPS.rotation[0] + 0.06,
            rz: LOGO_PROPS.rotation[2] + 0.06,
            py: LOGO_PROPS.position[1] + 0.06,
        },
        to: {
            pl2Intensity: 1,
            rx: LOGO_PROPS.rotation[0],
            rz: LOGO_PROPS.rotation[2],
            py: LOGO_PROPS.position[1],
        },
        config: {
            ...config.gentle,
            duration: 2000,
            easing: Ease.easeCubicInOut,
        }
    })

    const logoPositionInterpolation = animation.py.to(yVal => 
        [LOGO_PROPS.position[0], yVal, LOGO_PROPS.position[1]]
    );

    const logoRotationInterpolation = to([animation.rx, animation.rz], (rx, rz) =>
        [rx, LOGO_PROPS.rotation[1], rz]
    );

    return (
        <>
            {/* Intro Content */}
            {!DEBUG_SCENE && (
                <Html fullscreen>
                    <Content />
                </Html>
            )}
            
            {/* LOGO MESH */}
            <Logo
                color="#242424"
                position={logoPositionInterpolation as any}
                rotation={logoRotationInterpolation as any}
                scale={LOGO_PROPS.scale}
            />

            {/* CAMERA & CONTROLS */}
            <OrthographicCamera scale={0.01} position={[0, 0, 10]} makeDefault />
            { DEBUG_SCENE && <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} /> }

            {/* LIGHTING */}
            <a.ambientLight intensity={animation.pl2Intensity.to([0, 1], [0.770, 0]) as any} />
            <a.pointLight
                ref={p2Ref}
                color="#C2E0FF"
                position={[0, 4, 1]}
                intensity={animation.pl2Intensity as any}
            />
        </>
    )
}

export const Intro = withCanvas(_Intro, Styled.IntroContainer);