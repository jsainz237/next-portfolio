import * as Styled from './styles'; 

interface SectionBreakProps {
    color?: string;
}

export const SectionBreak: React.FC<SectionBreakProps> = ({ color }) => {
    return (
        <Styled.SectionBreak>
            <Styled.BreakHalf left/>
            <Styled.BreakHalf right/>
        </Styled.SectionBreak>
    )
}