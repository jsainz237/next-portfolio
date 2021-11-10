import React, { Suspense } from "react"
import styled from 'styled-components';
import { a as animatedWeb } from 'react-spring';
import { OrthographicCamera } from '@react-three/drei';

import { withCanvas } from './withCanvas';
import { Logo } from "./Logo";
import { Globe } from "./Globe";

const Canvas: React.FC = () => {
    return (
        <>    
            <OrthographicCamera scale={0.01} position={[0, 0, 10]} makeDefault />
        
            <Suspense fallback={null}>
                <Logo color="#242424" />
            </Suspense>
            <Suspense fallback={null}>
                <Globe />
            </Suspense>
        </>
    )
}

const CanvasContainer = styled(animatedWeb.div)`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1000;
    pointer-events: none;
`;

export default withCanvas(Canvas, CanvasContainer);
