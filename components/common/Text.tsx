import styled from 'styled-components';

export const SectionText = styled.p`
    color: ${({ theme }) => theme.primary};
    font-size: 1.4rem;

    ${({ theme }) => theme.utils.down('xl')} {
        font-size: 1.3rem;
    }

    ${({ theme }) => theme.utils.down('sm')} {
        font-size: 1rem;
    }
`;

export const SectionTitle = styled.h1`
    color: ${({ theme }) => theme.primary};
    font-size: 3rem;

    ${({ theme }) => theme.utils.down('sm')} {
        font-size: 2rem;
    }
`;

export const SmallText = styled.p`
    font-size: smaller;
    font-weight: 100;
    color: ${({ theme }) => theme.primary};
    margin: 0;
`;