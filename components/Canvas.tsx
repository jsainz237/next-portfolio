import React, { useEffect, useRef } from "react"
import styled from 'styled-components';
import { a as animatedWeb } from 'react-spring';
import { a, config, useSpring, to } from '@react-spring/three';
import * as Ease from 'd3-ease';
import * as THREE from 'three';
import { 
    OrbitControls,
    OrthographicCamera,
    useHelper
} from '@react-three/drei';

import { withCanvas } from '../components/withCanvas';
import { Logo } from "../components/Logo";

const DEBUG_SCENE = false;

const LOGO_PROPS = {
    position: [3.63, -0.2, 2.5],
    rotation: [0.861, -0.48, 0.38],
    scale: 300,
}

const Canvas: React.FC = () => {
    const logoRef = useRef<any>();
    const plRef = useRef<any>();

    if(DEBUG_SCENE) {
        useHelper(plRef, THREE.PointLightHelper, 1, 'blue');
    }

    useEffect(() => {
        if(logoRef.current && plRef.current) {
            window.addEventListener('scroll', onScroll);
        }

        return () => window.removeEventListener('scroll', onScroll);
    }, [logoRef.current, plRef.current])

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

    const onScroll = () => {
        const diff = window.scrollY / 75;
        logoRef.current.position.y = LOGO_PROPS.position[1] + diff;
        plRef.current.position.y = 4 + diff;

    }

    return (
        <>            
            {/* LOGO MESH */}
            <Logo
                ref={logoRef}
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
                ref={plRef}
                color="#C2E0FF"
                position={[0, 4, 1]}
                intensity={animation.pl2Intensity as any}
            />
        </>
    )
}

const CanvasContainer = styled(animatedWeb.div)`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.bg};
`;

export default withCanvas(Canvas, CanvasContainer);