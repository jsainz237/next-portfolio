import { config, useSpring, useTrail } from '@react-spring/three';
import * as Ease from 'd3-ease';

export namespace useAnimation {

    export namespace logo {

        export namespace rotation {

            export const z = () => useSpring({
                from: { rz: Math.PI / 2 },
                to: { rz: 0 },
                config: {
                    ...config.gentle,
                    duration: 5000,
                    easing: Ease.easeCubicInOut
                }
            });
    
            export const x = () => useSpring({
                from: { rx: Math.PI },
                to: { rx: Math.PI / 2 },
                delay: 2500,
                config: {
                    ...config.gentle,
                    duration: 2500,
                    easing: Ease.easeQuadInOut,
                }
            });
        }

        export const attrs = () => useSpring({
            from: {
                shouldRun: 0,
                position: [0, 0, 0],
                rotation: [Math.PI / 2, 0, 0],
                scale: 100,
            },
            to: { 
                shouldRun: 1,
                position: [5, 0, 0],
                rotation: [1.8, 0.02, -0.24],
                scale: 65,
            },
            delay: 5000,
            config: {
                ...config.gentle,
                duration: 2000,
                easing: Ease.easeCubicInOut,
            }
        });
    }

    export namespace lights {

        export const pl1 = () => useSpring({
            from: { position: [-3, 5.5, 9] },
            to: { position: [0, 10, 0] },
            delay: 1500,
            config: {
                ...config.gentle,
                duration: 4000,
                easing: Ease.easeQuadInOut,
            }
        });

        export const pl4 = () => useSpring({
            from: { 
                position: [5, 1, 1.5],
                timePassed: 0,
            },
            to: {
                position: [-5.7, -1.6, 3.3],
                timePassed: 6000,
            },
            delay: 2000,
            config: {
                ...config.gentle,
                duration: 6000,
                easing: Ease.easeCubicInOut,
            }
        });
    }

    export namespace content {
        export const header = (count: number) => useTrail(count, {
            delay: 6000,
            from: { opacity: 0, y: -45 },
            to: { opacity: 1, y: 0 },
            config: config.slow,
        });
        
    }
}