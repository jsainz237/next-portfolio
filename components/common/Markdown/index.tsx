import { useInterpolateScroll, useScreenSize } from '@utils/hooks';
import * as Styled from './styles';

export const Markdown: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [barX] = useInterpolateScroll([-45, 145]);
    const [styles] = useScreenSize({
        default: { height: '3rem' },
        md: { height: '40px' },
        sm: { height: '40px' },
        xs: { height: '40px' },
    });

    return (
        <Styled.MarkdownWrapper>
            <Styled.DecorationBar
                style={styles}
                x={barX}
                y={64}
            />
            <Styled.MarkdownContent>
                { children }
            </Styled.MarkdownContent>
        </Styled.MarkdownWrapper>
    )
}