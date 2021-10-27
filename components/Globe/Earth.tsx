import React from "react";
import { a } from '@react-spring/three';
import { FeatureCollection } from 'geojson';

import { theme } from '../../styles/theme';
import { GeoJsonGeometry } from "../../_utils/three-geojson-geometry";
import GEOJSON from '../../public/assets/earth.geo.json';

interface Props {
    position: [number, number, number];
    radius?: number;
}

// NOTE - stashing for now...
// PROBLEM = position on scroll is too hard because all line segments are different pieces
// hard to move all those with efficency => animation is very choppy
export const Earth = React.forwardRef<React.ReactNode, Props>(({ position, radius = 3 }, ref) => {
    const geoJson: FeatureCollection = GEOJSON as any;

    return (
        <a.mesh position={position} ref={ref}>
            {geoJson.features.map(({ geometry }, index) => {
                return (
                    <lineSegments
                        key={index}
                        geometry={new GeoJsonGeometry(geometry as any, radius)}
                    >
                        <lineBasicMaterial color={theme.primary} />
                    </lineSegments>
                );
            })}
        </a.mesh>
    );
})
