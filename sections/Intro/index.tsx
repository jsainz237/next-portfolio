import React, { useRef } from "react"
import { PointLightHelper } from 'three';
import { Html, OrbitControls, useHelper } from '@react-three/drei';

import Logo from '../../public/logo.svg';
import { Box } from '../../components/Box';
import { withCanvas } from '../../components/withCanvas'
import styles from './styles.module.scss';

const _Intro: React.FC = () => {

    return (
        <>
            {/* Intro Content */}
            <Html fullscreen>
                <div className={styles['intro-content']}>
                    <Logo fill="#707070" />
                </div>
            </Html>
            
            {/* 3D Canvas Components */}
            <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />
            <ambientLight intensity={0.5} />
            <pointLight position={[0, 10, 0]} />
            <pointLight position={[4, 4, 4]} />
            <pointLight position={[-3, -5, -5]} intensity={0.3} />

            { new Array(15).fill(null).map((_, i) => <Box key={i} position={[-1, -1, 3]} dimensions={[1, 1, 1]} />) }
        </>
    )
}

export const Intro = withCanvas(_Intro, styles['intro-container']);