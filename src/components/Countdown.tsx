import { useState, useEffect } from "react";
import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
	const [time, setTime] = useState(25 * 60);
	const [active, setActive] = useState(false);

	const minutes = Math.floor(time / 60);
	const seconds = time % 60;

	/* padStart ira preencher o restante com 0 
  para a esquerda caso não tenha numero
  exemplo: 25: '2' '5' ,
            5: '0' '5'
  */
	const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
	const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

	// Setar o countdown para ativo, ja que o useState é false no inicio.
	function startCountdown() {
		setActive(true);
	}

	/*
    Verificar se o countdown esta ativo e o time é maior que 0,
    fazer um setTimeout para algo aconteça depois de um tempo,
    e executar a função depois de 1s.
    Alem de executar quando o active muda, tambem executar
    quando o time muda.
  */
	useEffect(() => {
		if (active && time > 0) {
			setTimeout(() => {
				setTime(time - 1);
			}, 1000);
		}
	}, [active, time]);

	return (
		<div>
			<div className={styles.countdownContainer}>
				<div>
					<span>{minuteLeft}</span>
					<span>{minuteRight}</span>
				</div>
				<span>:</span>
				<div>
					<span>{secondLeft}</span>
					<span>{secondRight}</span>
				</div>
			</div>

			<button
				type="button"
				className={styles.countdownButton}
				onClick={startCountdown}
			>
				Iniciar um ciclo
			</button>
		</div>
	);
}
