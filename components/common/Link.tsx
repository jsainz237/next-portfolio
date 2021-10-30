import styled from "styled-components";

const StyledA = styled.a`
    transition: opacity 0.3s ease;
    &:hover {
        opacity: 0.3;
    }
`;

interface Props {
    href: string;
}

export const Link: React.FC<Props> = ({ href, children }) => (
    <StyledA href={href} target="_blank">
        {children}
    </StyledA>
);
