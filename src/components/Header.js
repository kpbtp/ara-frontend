 import Navigation from "./Navigation"

 const Header =( { current_user } ) => {
    return (
        <>
            <h1>Logo</h1>
            <Navigation current_user={current_user} />
        </>
    )
 }

 export default Header