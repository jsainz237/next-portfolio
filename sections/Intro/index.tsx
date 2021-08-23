import React, { useRef } from "react"
import { GridHelper, PointLightHelper } from 'three';
import { OrbitControls, PerspectiveCamera, useHelper } from '@react-three/drei';

import { Box } from '../../components/Box';
import { withCanvas } from '../../components/withCanvas'
import styles from './styles.module.scss';

const _Intro: React.FC = () => {
    const pointLight1 = useRef();
    const pointLight2 = useRef();
    const pointLight3 = useRef();
  
    useHelper(pointLight1, PointLightHelper, 0.5, 'red');
    useHelper(pointLight2, PointLightHelper, 0.5, 'green');
    useHelper(pointLight3, PointLightHelper, 0.5, 'blue');

    return (
        <>
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            <ambientLight intensity={0.5} />
            <pointLight position={[0, 10, 0]} ref={pointLight1} />
            <pointLight position={[4, 4, 4]} ref={pointLight2} />
            <pointLight position={[-3, -5, -5]} intensity={0.3} ref={pointLight3} />
            <Box position={[2, 2, 0]} dimensions={[1, 1, 1]} />
        </>
    )
}

export const Intro = withCanvas(_Intro, styles['intro-canvas-container']);