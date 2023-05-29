import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";

const Header = ({ current_user, logout }) => {
  return (
    <>
      <div className="max-h-full shadow-sm shadow-gray-600 p-3 bg-black text-white flex justify-between items-center">
        <div>
          <Navigation current_user={current_user} logout={logout} />
        </div>
        <div className="text-3xl text-rose-600 mx-auto">
          <NavLink className="nav-link" to="/">
            <img className="h-20" src="/ARA-Logo.jpg" alt="logo" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
