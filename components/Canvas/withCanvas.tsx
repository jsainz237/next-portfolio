import React from 'react';
import { Canvas, Props as R3FCanvasProps } from '@react-three/fiber';

type CanvasProps = Omit<R3FCanvasProps & React.RefAttributes<HTMLCanvasElement>, 'children'>;

export function withCanvas(
    Component: React.ComponentType,
    Wrapper: React.ComponentType<any>,
    props?: CanvasProps
): React.ComponentType {
    return () => (
        <Wrapper>
            <Canvas shadows={true} {...props}>
                <Component />
            </Canvas>
        </Wrapper>
    )
}