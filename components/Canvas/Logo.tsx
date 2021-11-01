/*
(Partially) Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import * as Ease from 'd3-ease';
import { useGLTF } from '@react-three/drei'
import { a, config, to, useSpring } from '@react-spring/three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { MeshPhongMaterialProps } from '@react-three/fiber';

import { useInterpolateScroll, useScreenSize } from '@utils/hooks';
import { theme } from 'styles/theme';

type GLTFResult = GLTF & {
  nodes: {
    Union_4001: THREE.Mesh
  }
  materials: {
    ['SVGMat.005']: THREE.MeshStandardMaterial
  }
}

interface Props {
    color?: MeshPhongMaterialProps['color'];
}

const LOGO_PROPS = {
  position: [3.63, -0.2, 2.5],
  rotation: [0.861, -0.48, 0.38],
  scale: 300,
}

const POINT_LIGHT_PROPS = {
  position: [0, 4, 1],
}

export const Logo: React.FC<Props> = ({ color }) => {
    const { nodes } = useGLTF('/logo.gltf') as GLTFResult;

    const logoRef = useRef<any>();
    const plRef = useRef<any>();

    const [yDiff] = useInterpolateScroll([0, 18]);
    const [yDiffSm] = useInterpolateScroll([0, 24]);
    const [_, bp] = useScreenSize({});

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

    const logoPosition = animation.py.to(y => {
        const diff = theme.breakpts[bp] <= theme.breakpts['lg'] ? yDiffSm : yDiff;
        const [x, _, z] = LOGO_PROPS.position;
        return [x, y + diff, z];
    });

    const logoRotation = to([animation.rx, animation.rz], (rx, rz) => {
        const [_x, y, _z] = LOGO_PROPS.rotation;
        return [rx, y, rz];
    });

    const lightPosition = to([], () => {
        const [x, y, z] = POINT_LIGHT_PROPS.position;
        return [x, y + yDiff, z];
    });

    return (
        <>
            <a.mesh 
                ref={logoRef}
                geometry={nodes.Union_4001.geometry}
                scale={LOGO_PROPS.scale}
                position={logoPosition as any}
                rotation={logoRotation as any}
            >
                <a.meshPhongMaterial shininess={5} color={color || '#5A5A5A'} />
            </a.mesh>

            <a.ambientLight intensity={animation.pl2Intensity.to([0, 1], [0.770, 0]) as any} />
            <a.pointLight
                ref={plRef}
                color="#C2E0FF"
                position={lightPosition as any}
                intensity={animation.pl2Intensity as any}
            />
        </>
    )
}

useGLTF.preload('/logo.gltf');
