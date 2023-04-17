import { Component, Fragment } from "react";
import UsersContext from "../store/users-context";
import classes from "./UserFinder.module.css";
import Users from "./Users";
import ErrorBoundary from "./ErrorBoundary";

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    console.log(this.context);
    // HTTP 요청 등.. (useEffect에 빈배열을 의존성으로 준 경우와 같음.)
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    // useEffect에 seachTerm을 포함한 의존성 배열을 준 경우와 같음.
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  clickHandler() {
    this.setState({
      searchTerm: '',
    })
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" value={this.state.searchTerm} onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary onClick={this.clickHandler.bind(this)}>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <input type="search" onChange={searchChangeHandler} />
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
