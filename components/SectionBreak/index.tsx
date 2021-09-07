import * as Styled from './styles'; 

export const SectionBreak: React.FC<Pick<Styled.BreakHalfProps, 'color'>> = ({ color }) => {
    return (
        <Styled.SectionBreak>
            <Styled.BreakHalf color={color} left/>
            <Styled.BreakHalf color={color} right/>
        </Styled.SectionBreak>
    )
}