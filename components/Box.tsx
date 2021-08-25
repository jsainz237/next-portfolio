import { BoxGeometryProps, MeshProps } from "@react-three/fiber"
import { useRef } from "react"
import { Vector3 } from "three";

interface BoxProps {
    position: MeshProps['position'];
    dimensions: BoxGeometryProps['args'];
}

export const Box: React.FC<BoxProps> = ({ position, dimensions }) => {
    const ref = useRef<any>();

    const randomPosition = () => {
        return [
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 5,
        ];
    }

    const randomSize = () => {
        const min = 1, max = 3;
        return [
            Math.random() * (max - min) + min,
            Math.random() * (max - min) + min,
            Math.random() * (max - min) + min,
        ];
    }

    return (
        <mesh castShadow={true} receiveShadow={true} position={randomPosition() as any} ref={ref}>
            <boxGeometry args={randomSize() as any} />
            <meshStandardMaterial color="white" />
        </mesh>
    )
}