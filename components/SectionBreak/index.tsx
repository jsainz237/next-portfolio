import { CSSProperties } from 'react';
import {} from 'react-spring';
import * as Styled from './styles';

type Props = Pick<Styled.BreakHalfProps, 'color'> & {
    style?: CSSProperties;
}

export const SectionBreak: React.FC<Props> = ({ color, style }) => {
    return (
        <Styled.SectionBreak style={style}>
            <Styled.BreakHalf color={color} left/>
            <Styled.BreakHalf color={color} right/>
        </Styled.SectionBreak>
    )
}