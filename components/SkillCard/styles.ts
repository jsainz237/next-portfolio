import styled from 'styled-components';

export interface SkillCardStyleProps {
    index: number;
}
export const SkillCard = styled.div<SkillCardStyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 4.25rem;
    width: 100%;

    background-color: #eeeeee;
    font-size: 1.25rem;
    cursor: pointer;
    justify-self: center;
    align-self: center;
    grid-area: ${({ index }) => `s${index}`};

    border: 1px solid lightgray;
    border-radius: 10px;

    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0);
    transform: scale(1);
    z-index: 0;

    transition: all 0.3s ease;

    &:hover {
        z-index: 100;
        transform: scale(1.5);
        box-shadow: ${({ theme }) => `0 0 12px 0 ${theme.bg}`};
    }

    ${({ theme }) => theme.utils.down('sm')} {
        height: 3.25rem;
        svg {
            height: 2rem;
            width: 2rem;
        }
    }
`