import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

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

export const FormControl = styled(Form.Control)`
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
export const FormControlFeedback = styled(Form.Control.Feedback)<FeedbackProps>`
    display: block;
    top: unset;
    bottom: ${({ top }) => top ? "100%" : 0};
    right: 0;
    z-index: 1000;
`;