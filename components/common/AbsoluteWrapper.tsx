import styled from 'styled-components';

interface Props {
    x: number;
    y: number;
    left?: boolean;
    right?: boolean;
}

export const AbsoluteWrapper = styled.div.attrs<Props>(({ x, y, left, right }) => ({
    style: {
        top: `${y}px`,
        left: (left || !right) && `${x}px`,
        right: right && `${x}px`,
    }
}))<Props>
`
    position: absolute;
    z-index: 0 !important;
`;
