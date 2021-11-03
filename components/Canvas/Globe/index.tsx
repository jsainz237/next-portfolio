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

    const markerColor = "#45505a";

    return (
        <group 
            position={[3.2, isSmallScreen ? yPositionSmall : yPosition, 0]}
            rotation={[ 0, yRotation, 0]}
        >
            {/* Sphere w/ Texture Map */}
            <mesh
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

            {/* Marker (technically a small cylinder) */}
            <mesh
                position={[-1.25, 0.4, 2.31]}
                rotation={[1.44, 0, 0.1]}
                scale={[0.2, 0.1, 0.2]}
            >
                <cylinderGeometry args={[0.2, 0.2, 2, 20, 1, false]} />
                <meshBasicMaterial color={markerColor} />
            </mesh>
            <mesh
                position={[-1.25, 0.41, 2.42]}
                rotation={[-0.25, -0.35, 0]}
                scale={0.2}
            >
                <ringGeometry args={[0.4, 0.55, 30, 0, 0, 6.3]} />
                <meshBasicMaterial color={markerColor} />
            </mesh>
        </group>
    )
}