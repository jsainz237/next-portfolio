import styles from './styles.module.scss';

interface SectionBreakProps {
    color?: string;
}

export const SectionBreak: React.FC<SectionBreakProps> = ({ color }) => {
    return (
        <div className={styles['section-break']}>
            <div className={`${styles['break-half']} ${styles['left']}`} style={{ color }} />
            <div className={`${styles['break-half']} ${styles['right']}`} style={{ color }} />
        </div>
    )
}