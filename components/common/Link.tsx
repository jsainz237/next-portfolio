import styled from "styled-components";
import NextLink from 'next/link';

const StyledA = styled.a`
    transition: opacity 0.3s ease;
    color: ${({ theme }) => theme.secondary};
    text-decoration: none;

    & > * {
        transition: opacity 0.3s ease;
    }

    &:hover, & > *:hover {
        color: ${({ theme }) => theme.secondary};
        opacity: 0.5;
    }
`;

interface Props {
    href: string;
}

export const Link: React.FC<Props> = ({ href, children }) => (
    <NextLink href={href} passHref>
        <StyledA target={href.startsWith('/') ? undefined : "_blank"}>
            {children}
        </StyledA>
    </NextLink>
);
