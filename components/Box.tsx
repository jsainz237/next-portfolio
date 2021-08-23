import { BoxGeometryProps, MeshProps } from "@react-three/fiber"
import { useRef } from "react"

interface BoxProps {
    position: MeshProps['position'];
    dimensions: BoxGeometryProps['args'];
}

export const Box: React.FC<BoxProps> = ({ position, dimensions }) => {
    const ref = useRef<any>();

    return (
        <mesh castShadow={true} receiveShadow={true} position={position} ref={ref}>
            <boxGeometry args={dimensions} />
            <meshStandardMaterial color="white" />
        </mesh>
    )
}