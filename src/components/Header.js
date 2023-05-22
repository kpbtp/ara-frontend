import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";


const Header = ({ current_user, logout }) => {

  return (
    <>
      <NavLink className="nav-link" to="/">
        Logo
      </NavLink>
      <Navigation current_user={current_user} logout={logout}/>
    </>
  );
};

export default Header;
