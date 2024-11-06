import styles from './Button.module.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

const Button = ({ children, ...props }: IButtonProps) => {
	return (
		<button className={styles.wrapper} {...props}>
			{children}
		</button>
	);
};

export default Button;
