import { useMemo } from "react";
import { MeshProps } from "@react-three/fiber";
import * as THREE from 'three';

import * as shaders from './shaders';
import { useInterpolateScroll } from "../../_utils/hooks/useInterpolateScroll";

type Props = MeshProps

export const Globe: React.FC<Props> = (props) => {
    const [yPosition] = useInterpolateScroll([-20, -3.3]);
    const [yRotation] = useInterpolateScroll([-1, 0]);

    const earthMap = useMemo(() => {
        return new THREE.TextureLoader().load('assets/earth-dot-map.png');
    }, []);

    return (
        <>
            <mesh
                position={[3.4, yPosition, 0]}
                rotation={[0, yRotation, 0]}
                scale={0.3}
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