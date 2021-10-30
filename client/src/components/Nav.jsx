import {Link, useHistory} from "react-router-dom";
import {logout} from "../services";

const Nav = (props) => {
  const history = useHistory();
  const handleClick = async() => {
    await logout();
    props.setUser(null);
    history.push("/");
  }
  return (
    <nav>
      {props.user ? (
        <>
          <button onClick={handleClick}>Log out!</button>
        </>
      ): (
        <>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  );
};

export default Nav;