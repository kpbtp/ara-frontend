import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";


const Header = ({ currentUser, logout }) => {

  return (
    <>
      <NavLink className="nav-link" to="/">
        Logo
      </NavLink>
      <Navigation currentUser={currentUser} logout={logout}/>
    </>
  );
};

export default Header;
