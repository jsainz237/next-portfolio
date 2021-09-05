import { HTMLProps } from 'react';
import * as Styled from './styles';

type SkillCardProps = Styled.SkillCardStyleProps & HTMLProps<HTMLDivElement>;

export const SkillCard: React.FC<SkillCardProps> = ({ children, ...props }) => {
    return (
        // @ts-ignore
        <Styled.SkillCard {...props}>
            { children }
        </Styled.SkillCard>
    )
}