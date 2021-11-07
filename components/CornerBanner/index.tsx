import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { useSpring, config } from 'react-spring';
import * as Easing from 'd3-ease';

import { Link } from '@components/common';
import * as Styled from './styles';

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
            <Link href="/readme">
                <h6>
                    <span>
                        <FontAwesomeIcon icon={faWrench} style={{ marginRight: '0.25rem' }} />
                    </span>
                    DEV
                </h6>
            </Link>
        </Styled.Banner>
    )
}