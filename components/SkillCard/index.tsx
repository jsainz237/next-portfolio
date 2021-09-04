import { HTMLProps } from 'react';
import * as Styled from './styles';

export const SkillCard: React.FC<HTMLProps<HTMLDivElement>> = ({ children, ...props }) => {
    return (
        // @ts-ignore
        <Styled.SkillCard {...props}>
            { children }
        </Styled.SkillCard>
    )
}