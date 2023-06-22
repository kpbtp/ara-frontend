import { NavLink } from "react-router-dom" 

const Footer =() => {
    return (
        <>
            <div className="max-h-full flex justify-center mt-30 b-0 bg-gray-900 text-white">
            <NavLink className=" p-4 m text-center justify-center text-white" to='/aboutus'>ご主人様たち &#160; &#160; &#160; DeMario - Jose - Brandon - Borja &#160; &#160; &#160; みんなさんありがとうございます</NavLink>
            </div>
        </>
       
    )
 }

 export default Footer