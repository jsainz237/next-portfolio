import styled from 'styled-components';

export const SkillCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3.25rem;
    width: 3.75rem;
    background-color: #eeeeee;
    border: 1px solid lightgray;
    border-radius: 10px;
    font-size: 1.25rem;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0);
    transform: scale(1);
    margin: 0.25rem;
    z-index: 0;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        z-index: 100;
        transform: scale(1.5);
        box-shadow: ${({ theme }) => `0 0 12px 0 ${theme.bg}`};
    }
`