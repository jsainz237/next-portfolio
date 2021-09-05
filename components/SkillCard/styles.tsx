import styled from 'styled-components';

export interface SkillCardStyleProps {
    index: number;
}
export const SkillCard = styled.div<SkillCardStyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 3.25rem;
    width: 3.75rem;
    margin: 0.25rem;

    background-color: #eeeeee;
    font-size: 1.25rem;
    cursor: pointer;
    grid-area: ${({ index }) => `s${index}`};
    align-self: ${({ index: ind }) => {
        if(ind === 1 || ind === 6) return "flex-end";
        if(ind === 2 || ind === 7) return "flex-start";
        return "center";
    }};

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
`