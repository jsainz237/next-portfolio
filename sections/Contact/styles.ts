import styled, { keyframes } from 'styled-components';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IndicatorProps {
    color?: string;
}

export const InputIndicator = styled.div<IndicatorProps>`
    position: absolute;
    display: block;
    bottom: -0.5rem;
    left: 0;
    height: 0.25rem;
    width: 100%;
    border-radius: 1rem;
    background: ${({ theme, color }) => color ?? theme.primary};
    z-index: 0;
    transition: all 0.3s ease;
`;

export const FormControl = styled(Form.Control as any)`
    position: relative;
    margin-bottom: 1rem;
    padding: 0.5rem 0.75rem;
    z-index: 500;

    &:focus {
        box-shadow: none;
        border-color: unset;
    }
`;

interface FeedbackProps {
    top?: boolean;
}
export const FormControlFeedback = styled(Form.Control.Feedback as any)<FeedbackProps>`
    display: block;
    top: unset;
    bottom: ${({ top }) => top ? "100%" : 0};
    right: 0;
    z-index: 1000;
`;

const rotate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const RotatingIcon = styled(FontAwesomeIcon)`
    animation: ${rotate} 1s linear infinite;
    color: ${({ theme }) => theme.primary};
`