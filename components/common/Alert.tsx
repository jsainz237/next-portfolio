import { HTMLAttributes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { a } from 'react-spring';

interface Props {
    type: 'success' | 'error';
    direction?: 'rtl' | 'ltr';
    onClose?: () => void;
}

const StyledAlert = styled(a.div)<Omit<Props, 'onClose'>>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    overflow: hidden;
    direction: ${({ direction }) => direction ?? 'ltr'};
    border-radius: 0.25rem;
    padding: 0.25rem 1rem;
    background-color: ${({ type, theme }) => {
        if(type === 'success') return theme.alerts.success;
        if(type === 'error') return theme.alerts.danger;
        return 'none';
    }};

    i {
        margin-left: 2rem;
        &:hover {
            cursor: pointer;
            opacity: 0.5;
        }
    }
`;

export const Alert: React.FC<Props & HTMLAttributes<HTMLDivElement>> = ({ children, direction = 'ltr', onClose, ...props }) => {
    const renderIcon = () => (
        <i onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
        </i>
    );

    return (
        <StyledAlert direction={direction} {...props}>
            {direction === 'rtl' && renderIcon()}
            {children}
            {direction === 'ltr' && renderIcon()}
        </StyledAlert>
    )
}