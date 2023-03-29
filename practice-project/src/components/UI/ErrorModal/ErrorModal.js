import styles from "./ErrorModal.module.css";
import Button from "../Button/Button";
import Card from "../Card/Card";

const ErrorModal = (props) => {
	return (
		<div>
			<div className={styles.backdrop} onClick={props.changeVaild}>
				<Card className={styles.modal}>
					<header className={styles.header}>
						<h2>{props.errorMsg.header}</h2>
					</header>
					<div className={styles.content}>
						<p>{props.errorMsg.content}</p>
					</div>
					<footer className={styles.actions}>
						<Button onClick={props.changeVaild}>Okay</Button>
					</footer>
				</Card>
			</div>
		</div>
	);
};

export default ErrorModal;
