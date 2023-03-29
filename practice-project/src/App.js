import React from "react";
import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
	const [users, setUsers] = useState([]);

	const addUserHandler = (userInfo) => {
		console.log(userInfo);
		setUsers(users => [...users, userInfo]);
	};
	return (
		<div>
			<AddUser addUser={addUserHandler}></AddUser>
			<UsersList users={users}></UsersList>
		</div>
	);
}

export default App;
