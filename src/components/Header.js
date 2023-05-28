import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";


const Header = ({ current_user, logout }) => {

  return (
    <>
      <div className="max-h-full p-3 mt-30 top-0-0 bg-black text-white">
      <NavLink className="nav-link" to="/">
        Logo
      </NavLink>
      <Navigation current_user={current_user} logout={logout}/>
      </div>
    </>
  );
};

export default Header;
