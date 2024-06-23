import styled from "styled-components";
import NextLink from 'next/link';

const StyledLink = styled(NextLink)`
    transition: opacity 0.3s ease;
    color: ${({ theme }) => theme.primary};
    text-decoration: none;

    & > * {
        transition: opacity 0.3s ease;
    }

    &:hover, & > *:hover {
        color: ${({ theme }) => theme.primary};
        opacity: 0.7;
    }
`;

interface Props {
    href: string;
    children: React.ReactNode;
}

export const Link: React.FC<Props> = ({ href, children }) => {
    const isInternalHref = href.startsWith('/') || href.startsWith('#');

    return (
        <StyledLink
            href={href}
            passHref
            target={isInternalHref ? undefined : "_blank"}
            rel={isInternalHref ? undefined : "noreferrer"}
        >
            {children}
        </StyledLink>
    )
};
