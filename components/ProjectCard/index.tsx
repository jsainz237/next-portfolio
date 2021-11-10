import { useEffect, useState } from 'react';
import { Button, Link } from '@components/common';
import * as Styled from './styles';

export interface ProjectCardProps extends Styled.ProjectCardProps {
    title: string;
    description: string;
    tech: any[];
    buttonText: string;
    link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    tech,
    buttonText,
    link,
    ...props 
}) => {
    const iconSize = "1.5rem";
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isPressable, setIsPressable] = useState<boolean>(false);

    // This prevents mobile users from accidentally
    // clicking the button when opacity is 0
    useEffect(() => {
        if(isHovered) {
            setIsPressable(true);
        } else {
            setTimeout(() => setIsPressable(false), 300);
        }
    }, [isHovered])

    return (
        <Styled.AspectRatio
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...props}
        >
            <Styled.ProjectContainer>
                <Styled.Overlay />
                <Styled.Border />
                <h1>{title}</h1>
                <Styled.IconsWrapper>
                    {
                        tech.map(({ Icon }, ind) => 
                            <Icon key={ind} height={iconSize} width={iconSize} />) 
                    }
                </Styled.IconsWrapper>
                <p>{description}</p>
                <Link href={link}>
                    <Button style={{ pointerEvents: isPressable ? 'unset' : 'none' }}>
                        {buttonText}
                    </Button>
                </Link>
            </Styled.ProjectContainer>
        </Styled.AspectRatio>
    )
}