import { useTheme } from 'styled-components';

import { SectionBreak } from '../../components/SectionBreak';
import * as Styled from './styles';

export const Projects: React.FC = () => {
    const theme = useTheme();
    
    return (
       <Styled.ProjectsSectionWrapper>
           <SectionBreak color={theme.secondary} />
           <div>HELLO</div>
       </Styled.ProjectsSectionWrapper>
    )
}