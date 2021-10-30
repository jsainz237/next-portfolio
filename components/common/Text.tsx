import styled from 'styled-components';

export const SectionText = styled.p`
    color: ${({ theme }) => theme.primary};
    font-size: 1.4rem;
`;

export const SectionTitle = styled.h1`
    color: ${({ theme }) => theme.primary};
    font-size: 3rem;
`;

export const SmallText = styled.p`
    font-size: smaller;
    font-weight: 100;
    color: ${({ theme }) => theme.primary};
    margin: 0;
`;