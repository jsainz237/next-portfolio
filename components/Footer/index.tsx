import { useTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

import config from 'config';
import { SmallText, Link } from '@components/common';
import { useScreenSize } from '@utils/hooks';
import Logo from 'public/logo.svg';
import * as Styled from './styles';
import { useMemo } from 'react';

export const Footer: React.FC = () => {
    const theme = useTheme();
    const [_, bp] = useScreenSize({});

    const isSmallScreen = useMemo(() => theme.breakpts[bp] <= theme.breakpts['sm'], [bp]);

    return (
        <Styled.FooterWrapper>
            <Styled.FooterContainer isSmallScreen={isSmallScreen}>
                <div>
                    <Logo height={35} fill={theme.primary} style={{ marginBottom: '0.5rem' }} />
                    { !isSmallScreen && <SmallText>Made by yours truly © 2021</SmallText> }
                </div>
                
                <div style={!isSmallScreen ? undefined : { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Styled.Links style={!isSmallScreen ? undefined : { margin: '1rem 0' }}>
                        <Link href={config.links.github}>
                            <FontAwesomeIcon icon={faGithub} color={theme.primary} size="2x" />
                        </Link>
                        <Link href={config.links.linkedin}>
                            <FontAwesomeIcon icon={faLinkedin} color={theme.primary} size="2x" />
                        </Link>
                        <Link href={config.links.resume}>
                            <FontAwesomeIcon icon={faFileAlt} color={theme.primary} size="2x" />
                        </Link>
                    </Styled.Links>
                    <Link href="https://jsainz.me">
                        <SmallText>Visit my old website here</SmallText>
                    </Link>
                    { isSmallScreen && <SmallText style={{ marginTop: '1rem' }}>Made by yours truly © 2021</SmallText> }
                </div>
            </Styled.FooterContainer>
        </Styled.FooterWrapper>
    )
}