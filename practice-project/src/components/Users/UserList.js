import Card from '../UI/Card/Card';
import styles from "./UserList.module.css";

const UserList = (props) => {

	return props.users.length === 0 ? null : (
		<Card className={styles.users}>
				<ul>
					{props.users.map((user, index) => (
						<li key={index} onClick={props.removeUser}> {`${user.enteredUsername} (${user.enteredAge} years old)`} </li>
					))}
				</ul>
		</Card>
	);
};

export default UserList;
