import styled from 'styled-components';

interface Props {
    x: number | string;
    y: number | string;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
}

export const AbsoluteWrapper = styled.div.attrs<Props>(({
    x,
    y,
    left,
    right,
    top,
    bottom,
}) => {
    const yVal = typeof y === 'number' ? `${y}px` : y;
    const xVal = typeof x === 'number' ? `${x}px` : x;

    return {
        style: {
            top: (top || !bottom) ? yVal : undefined,
            bottom: bottom ? yVal : undefined,

            left: (left || !right) ? xVal : undefined,
            right: right ? xVal : undefined,
        }
    };
})<Props>
`
    position: absolute;
    z-index: 0 !important;
`;
