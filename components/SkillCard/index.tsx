import { HTMLProps } from 'react';
import styles from './styles.module.scss';

export const SkillCard: React.FC<HTMLProps<HTMLDivElement>> = ({ children, ...props }) => {
    return (
        <div className={styles['skill-card']} {...props}>
            { children }
        </div>
    )
}