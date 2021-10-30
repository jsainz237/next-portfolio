import { useTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

import config from 'config';
import { SmallText, Link } from '../common';
import Logo from '../../public/logo.svg';
import * as Styled from './styles';

export const Footer: React.FC = () => {
    const theme = useTheme();
    return (
        <Styled.FooterWrapper>
            <Styled.FooterContainer>
                <Logo height={59} fill={theme.primary} style={{ marginRight: '1rem' }} />
                
                <div>
                    <Styled.Links>
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
                    <SmallText>Made by yours truly © 2021</SmallText>
                </div>
            </Styled.FooterContainer>
        </Styled.FooterWrapper>
    )
}