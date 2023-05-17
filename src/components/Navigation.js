import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom" 

const Navigation = ( { current_user } ) => {
    return(
        <>
            <Nav className="nav">
                { current_user && (
                    <>
                        <NavItem>
                            <NavLink className='nav-link' to='/myanimelist'>My Anime List</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/index'>Browse All</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/animelistnew'>Create a List</NavLink> 
                        </NavItem>
                    </>
                ) }
                { !current_user && (
                    <>
                        <NavItem>
                            <NavLink className='nav-link' to='/signup'>Sign Up</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/login'>Login</NavLink> 
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/index'>Browse All</NavLink>
                        </NavItem>
                        
                    </>
                ) }
            </Nav>
        </>
    )
}

export default Navigation 