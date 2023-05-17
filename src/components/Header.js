 import Navigation from "./Navigation"

 const Header =( { current_user } ) => {
    return (
        <>
            <Navigation current_user={current_user} />
        </>
    )
 }

 export default Header