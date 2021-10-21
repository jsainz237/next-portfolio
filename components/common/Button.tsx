import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import React, { ButtonHTMLAttributes, CSSProperties } from 'react';

interface Props {
    color?: string;
}

const StyledButton = styled.button<Props>`
    background: none;
    color: ${({ color }) => color};
    font-size: 0.835rem;
    border: 1px solid ${({ color }) => color};
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

export const Button: React.FC<Props & ButtonHTMLAttributes<HTMLButtonElement>> = ({color = 'white', children, ...props }) => (
    <StyledButton color={color} {...props}>
        {children}
        <span><FontAwesomeIcon icon={faChevronRight} color={color} /></span>
    </StyledButton>
)