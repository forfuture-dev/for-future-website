import { Logo } from "./Logo";
import styles from "./Footer.module.css";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<svg
				className={styles.figures}
				viewBox="0 0 393 125"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M124.475 0H248.95V124.724H124.475V0Z" fill="#1D1E56" />
				<path
					d="M124.475 62.362C124.475 96.8036 96.6105 124.724 62.2376 124.724C27.8647 124.724 0 96.8036 0 62.362C0 27.9204 27.8647 0 62.2376 0C96.6105 0 124.475 27.9204 124.475 62.362Z"
					fill="#FFD412"
				/>
				<path d="M320.975 0L393 125H248.95L320.975 0Z" fill="#E90000" />
			</svg>
		</footer>
	);
};
