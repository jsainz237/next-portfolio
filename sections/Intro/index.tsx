import React, { useRef } from "react"
import { a as AnimatedThree, to } from '@react-spring/three';
import { a as AnimatedWeb } from '@react-spring/web';
import { ThemeProvider } from "styled-components";
import { Html, OrbitControls, OrthographicCamera, useHelper  } from '@react-three/drei';
import * as THREE from 'three';

import { withCanvas } from '../../components/withCanvas';
import { Logo } from "../../components/Logo";
import * as Styled from './styles';
import { theme } from "../../styles/theme";
import { useAnimation } from './animations'

const DEBUG = false;
const SHOW_HTML = true;

const AnimatedOrthographicCamera = AnimatedThree(OrthographicCamera);

const _Intro: React.FC = () => {
    const logo = useRef<THREE.Mesh>();
    const camera = useRef<any>();
    const p1 = useRef<any>();
    const p2 = useRef<any>();
    const p3 = useRef<any>();
    const p4 = useRef<any>();

    const { rx } = useAnimation.logo.rotation.x();
    const { rz } = useAnimation.logo.rotation.z();
    const { position, rotation: r, scale, shouldRun } = useAnimation.logo.attrs();

    const pl1 = useAnimation.lights.pl1();
    const pl4 = useAnimation.lights.pl4();

    const letteringTrail = useAnimation.content.header(2);

    if(DEBUG) {
        useHelper(camera, THREE.CameraHelper, 'red');
        useHelper(p1, THREE.PointLightHelper, 1, 'green');
        useHelper(p2, THREE.PointLightHelper, 1, 'blue');
        useHelper(p3, THREE.PointLightHelper, 1, 'pink');
        useHelper(p4, THREE.PointLightHelper, 1, 'cyan');
    }

    const rotation = to([rx, rz, r, shouldRun], (rx, rz, r, shouldRun) => {
        return shouldRun.valueOf() === 0 ?
            [rx, 0, rz] : r;
    });

    return (
        <>
            {/* Intro Content */}
            {!DEBUG && SHOW_HTML && (
                <Html fullscreen>
                    <ThemeProvider theme={theme}>
                        <Styled.IntroContent>
                            <Header>
                                <h1>&#128075; Hey, I'm Jesse!</h1>
                                <p>I'm a full stack web developer based in Austin, TX</p>
                            </Header>
                        </Styled.IntroContent>
                    </ThemeProvider>
                </Html> 
            )}
            
            {/* 3D Canvas Components */}
            <Logo ref={logo} castShadow={true} position={position as any} scale={scale as any} rotation={rotation as any} />
            {/* <Logo ref={logo} castShadow={true} position={[0, 0, 0]} scale={100} rotation={[Math.PI / 2, 0, 0]} /> */}

            <AnimatedOrthographicCamera ref={camera} scale={0.01} position={[0, 0, 5]} makeDefault={!DEBUG} />
            {DEBUG && <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} /> }

            <AnimatedThree.ambientLight intensity={5} />
            <AnimatedThree.pointLight ref={p1} position={pl1.position as any} />
            <AnimatedThree.pointLight ref={p2} position={[-3, -5, -5]} />
            <AnimatedThree.pointLight ref={p3} castShadow={true} intensity={2} position={[5, 2, 2]} />
            <AnimatedThree.pointLight ref={p4} intensity={pl4.timePassed.to([0, 3000, 6000], [0, 1, 0])} position={pl4.position as any} />
        </>
    )
}

export const Intro = withCanvas(_Intro, Styled.IntroContainer);

const Header: React.FC = ({ children }) => {
    const elems = React.Children.toArray(children);
    const trail = useAnimation.content.header(elems.length);

    return <>
        {trail.map(({ opacity, y }, index) => {
            return (
                <AnimatedWeb.div key={index} style={{ opacity, transform: y.to(val => `translateY(${val}px)`) }}>
                    {elems[index]}
                </AnimatedWeb.div>
            )
        })}
    </>
}