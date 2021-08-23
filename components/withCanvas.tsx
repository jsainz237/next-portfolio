import React from 'react';
import { Canvas, Props as R3FCanvasProps } from '@react-three/fiber';

type CanvasProps = Omit<R3FCanvasProps & React.RefAttributes<HTMLCanvasElement>, 'children'>;

export function withCanvas(Component: React.ComponentType, className: string, props?: CanvasProps): React.ComponentType {
    return () => (
        <div className={className}>
            <Canvas {...props}>
                <Component />
            </Canvas>
        </div>
    )
}