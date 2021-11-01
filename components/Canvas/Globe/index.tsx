import { useMemo } from "react";
import { MeshProps } from "@react-three/fiber";
import * as THREE from 'three';

import { useInterpolateScroll, useScreenSize } from "@utils/hooks";
import { theme } from 'styles/theme';
import * as shaders from './shaders';

type Props = MeshProps

export const Globe: React.FC<Props> = (props) => {
    const [yPosition] = useInterpolateScroll([-20, -0.9]);
    const [yRotation] = useInterpolateScroll([-1, 0]);

    const [_, bp] = useScreenSize({});
    const [yPositionSmall] = useInterpolateScroll([-15, 0.4]);
    const isSmallScreen = useMemo(() => theme.breakpts[bp] <= theme.breakpts['sm'], [bp]);

    const earthMap = useMemo(() => {
        return new THREE.TextureLoader().load('assets/earth-dot-map.png');
    }, []);

    return (
        <>
            <mesh
                position={[3.2, isSmallScreen ? yPositionSmall : yPosition, 0]}
                rotation={[0, yRotation, 0]}
                scale={0.27}
                {...props}
            >
                <sphereGeometry args={[10, 100, 100]} />
                <shaderMaterial
                    vertexShader={shaders.vertex}
                    fragmentShader={shaders.fragment}
                    uniforms={{
                        globeTexture: {
                            value: earthMap
                        }
                    }}
                />
            </mesh>

            {/* Haven't figured the marker out yet... */}
            {/* <mesh
                ref={markerRef}
                position={[markerPX, -2.75, 4.25]}
                rotation={[1.28, 0, markerRZ]}
                scale={0.1}
            >
                <cylinderGeometry args={[0.3, 0.3, 1, 20, 1, false]} />
                <meshNormalMaterial color="#ff00ff" />
            </mesh> */}
        </>
    )
}