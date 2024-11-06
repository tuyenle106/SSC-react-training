import styles from './GlobalStyles.module.scss';

interface IGlobalStylesProps {
	children: React.ReactNode;
}

const GlobalStyles = ({ children }: IGlobalStylesProps) => {
	return <div className={styles.global}>{children}</div>;
};

export default GlobalStyles;
