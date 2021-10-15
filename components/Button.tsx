import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { CSSProperties } from 'react';

interface Props {
    text: string;
    color?: string;
    style?: CSSProperties;
}

const StyledButton = styled.button<Pick<Props, 'color'>>`
    background: none;
    color: ${({ color }) => color};
    font-size: 0.835rem;
    border: 1px solid gray;
    padding: 0.5rem 1.5rem;
    border-radius: 0.75rem;
    opacity: 0;
    transition: all 0.3s ease;

    &:hover {
        opacity: 0.6 !important;
    }

    span {
        margin-left: 0.25rem;
    }
`

export const Button: React.FC<Props> = ({ text, color = 'white', style }) => (
    <StyledButton color={color} style={style}>
        {text}
        <span><FontAwesomeIcon icon={faChevronRight} color={color} /></span>
    </StyledButton>
)