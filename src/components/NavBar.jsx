import "./NavBar.css";
import { Link } from "react-router-dom";
import * as userService from "../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <div>
      <Link to="/orders/new">
        <button>New Orders</button>
      </Link>
      &nbsp;| &nbsp;
      <Link to="/orders">
        <button>Orders History</button>
      </Link>
      &nbsp;&nbsp;<span>Welcome, {user.name}</span>
      &nbsp;&nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </div>
  );
}
