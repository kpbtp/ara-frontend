import { Nav, NavItem, Button} from "reactstrap"
import { NavLink, useNavigate } from "react-router-dom" 

const Navigation = ( { current_user, logout } ) => {

    const navigate = useNavigate()
    const handleClick = () => {
        logout()
        navigate("/")
      }

    return(
        <>
            <Nav className="nav">
                { current_user && (
                    <>
                        <NavItem>
                            <NavLink className='nav-link text-white' to='/myanimelist'>My Anime List</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link text-white' to='/animeindex'>Browse All</NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink className='nav-link' to='/myanimelistnew'>Create a List</NavLink> 
                        </NavItem> */}
                        <NavItem>
                            <NavLink className='nav-link text-white' to='/aboutus'>The MCs</NavLink> 
                        </NavItem>
                        <NavItem>
                            <Button className='nav-link text-white' onClick={handleClick}>Logout</Button> 
                        </NavItem>
                    </>
                ) }
                { !current_user && (
                    <>
                        <NavItem>
                            <NavLink className='nav-link text-white' to='/signup'>Sign Up</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link text-white' to='/login'>Login</NavLink> 
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link text-white' to='/animeindex'>Browse All</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link text-white' to='/aboutus'>I hath no wit</NavLink> 
                        </NavItem>
                        
                    </>
                ) }
            </Nav>
        </>
    )
}

export default Navigation 