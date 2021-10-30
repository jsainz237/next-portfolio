import { useTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

import { SmallText } from '../common';
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
                        <FontAwesomeIcon icon={faGithub} color={theme.primary} size="2x" />
                        <FontAwesomeIcon icon={faLinkedin} color={theme.primary} size="2x" />
                        <FontAwesomeIcon icon={faFileAlt} color={theme.primary} size="2x" />
                    </Styled.Links>
                    <SmallText>Made by yours truly © 2021</SmallText>
                </div>
            </Styled.FooterContainer>
        </Styled.FooterWrapper>
    )
}