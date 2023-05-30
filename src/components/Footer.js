import { NavLink } from "react-router-dom" 

const Footer =() => {
    return (
        <>
            <div className="max-h-full mt-30 b-0 bg-gray-800 text-white">
            <NavLink className="fixed bottom-0 w-full p-4 m text-center justify-center bg-gray-800 text-white" to='/aboutus'>ご主人様たち &#160; &#160; &#160; DeMario - Jose - Brandon - Borja &#160; &#160; &#160; みんなさんありがとうございます</NavLink>
            </div>
        </>
       
    )
 }

 export default Footer