import React, { useEffect, useState, useRef } from "react"
import { config, useSpring } from '@react-spring/three';
import { ContactShadows, Html, OrbitControls, OrthographicCamera  } from '@react-three/drei';
import * as THREE from 'three';

import { withCanvas } from '../../components/withCanvas';
import { Logo } from "../../components/Logo";
import styles from './styles.module.scss';

const _Intro: React.FC = () => {
    const logo = useRef<THREE.Mesh>();
    const camera = useRef<any>();
    const light = useRef<any>();
    const [rotation, setRotation] = useState<number[]>([Math.PI / 2, 0, 0]);
    const spring = useSpring({ rotation, config: config.gentle });

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    })

    const handleMouseMove = (e: MouseEvent) => {
        const halfWindowHeight = window.innerHeight / 2;
        const halfWindowWidth = window.innerWidth / 2;

        const x = (Math.PI / 2) + (e.clientY - halfWindowHeight) / -1500;
        const z = (e.clientX - halfWindowWidth) / 1500;
        setRotation([x, 0, z]);
    }

    return (
        <>
            {/* Intro Content */}
            <Html fullscreen>
                <h1>Hey, I'm Jesse</h1>
            </Html>
            
            {/* 3D Canvas Components */}
            <Logo ref={logo} castShadow={true} position={[4, 0.11, 0]} rotation={spring.rotation as any} />
            <ContactShadows position={[0, -1.3, 0]} opacity={0.3} width={20} height={10} far={20} rotation={[Math.PI / 2, 0, 0]} />

            <OrthographicCamera ref={camera} scale={0.01} position={[-2, 1.7, 5]} makeDefault />
            <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />

            <ambientLight intensity={0.5} />
            <pointLight castShadow={false} position={[0, 10, 0]} />
            <pointLight ref={light} castShadow={true} intensity={2} position={[5, 2, 2]} />
            <pointLight castShadow={false} position={[-3, -5, -5]} intensity={0.3} />
        </>
    )
}

export const Intro = withCanvas(_Intro, styles['intro-container']);