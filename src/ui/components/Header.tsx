import { Logo } from "./Logo";
import styles from "./Header.module.css";

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles["logo-wrapper"]}>
				<Logo />
			</div>
		</header>
	);
};
