import styles from "../styles/components/Profile.module.css";

export function Profile() {
	return (
		<div className={styles.profileContainer}>
			<img src="https://github.com/marcellodinizr.png" alt="Marcello Diniz" />

			<div>
				<strong>Marcello Diniz</strong>
				<p>
					<img src="icons/level.svg" alt="Level"/>
					Level 1
					</p>
			</div>
		</div>
	);
}
