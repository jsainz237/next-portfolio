import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useSpring, config } from 'react-spring';
import * as Easing from 'd3-ease';

import * as Styled from './styles';

const StyledLink = styled.a`
    color: ${({ theme }) => theme.secondary};
    opacity: 1;
    transition: opacity 0.3s ease;
    font-weight: bolder;
    text-decoration: none;
    font-family: 'Roboto Slab', serif;

    &:hover {
        opacity: 0.7;
        color: ${({ theme }) => theme.secondary};
    }
`

export const CornerBanner: React.FC = () => {

    const { top, right } = useSpring({
        delay: 1000,
        from: { top: -8, right: -8 },
        to: { top: 0.75, right: -3 },
        config: { 
            ...config.gentle,
            duration: 1200,
            easing: Easing.easeQuadInOut,
        }
    });

    const topInter = top.to(val => `${val}rem`);
    const rightInter = right.to(val => `${val}rem`)

    return (
        <Styled.Banner style={{ top: topInter, right: rightInter }}>
            <StyledLink href="/readme">
                <span>
                    <FontAwesomeIcon icon={faWrench} style={{ marginRight: '0.25rem' }} />
                </span>
                DEV
            </StyledLink>
        </Styled.Banner>
    )
}