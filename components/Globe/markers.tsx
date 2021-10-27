import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Props {
    lat: number;
    lng: number;
    radius?: number;
    height?: number;
}

export const Marker: React.FC<Props> = ({ lat, lng, radius = 100, height = 50 }) => {
    const mesh = useRef<any>();
  
    useEffect(() => {
        mesh.current?.geometry.translate(0, height / 2, 0);
        mesh.current?.lookAt(getVertex(Math.PI, lng, radius));
    }, [mesh, lng, radius]);
  
    return (
        <mesh ref={mesh} position={getVertex(lat, lng, radius)}>
            <cylinderGeometry args={[0.3, 0.3, height, 10, 1, false]} />
            <meshBasicMaterial color="#ff00ff" />
        </mesh>
    );
}

function getVertex(lat: number, lng: number, radius: number) {
    const vector = new THREE.Vector3().setFromSpherical(
        new THREE.Spherical(
            radius,
            THREE.MathUtils.degToRad(90 - lat),
            THREE.MathUtils.degToRad(lng)
        )
    );
    return vector;
}