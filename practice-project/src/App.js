import React from "react";
import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
	const [users, setUsers] = useState([]);

	const addUserHandler = (userInfo) => {
		console.log(userInfo);
		setUsers(users => [...users, userInfo]);
	};
	return (
		<div>
			<AddUser addUser={addUserHandler}></AddUser>
			<UserList users={users}></UserList>
		</div>
	);
}

export default App;
