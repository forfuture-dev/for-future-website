import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<h1 className="title-lg">website under construction</h1>
				<p className="text-lg">
					<a
						className="link-unstyled"
						href="mailto:info@for-future.org"
					>
						info@for-future.org
					</a>
				</p>
			</main>
		</div>
	);
}

/* info@for-future.org */
