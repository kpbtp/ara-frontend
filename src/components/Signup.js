import { useRef } from "react";
import { useNavigate} from "react-router-dom";

const Signup = ({signup}) => {

  const formRef = useRef();
  const navigate = useNavigate()
  const handleSubmit = (e) => { 
      //stop the default behavior of the form.  We want to send it with fetch.
      e.preventDefault()
      // store the form entries in a variable
      const formData = new FormData(formRef.current)
      // create and object from the entries
      const data = Object.fromEntries(formData)
      // store user's info in format that can be used with jwt.
      const userInfo = {
          "user":{ email: data.email, password: data.password }
      }
      signup(userInfo)
      navigate("/")
      e.target.reset()  // resets the input field
};
  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name="email" placeholder="email" />
        <br />
        Password:{" "}
        <input type="password" name="password" placeholder="password" />
        <br />
        Password Confirmation:{" "}
        <input
          type="password"
          name="password_confirmation"
          placeholder="password confirm"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <div>
        Already registered, <a href="/login">Login</a> here.
      </div>
    </div>
  );
};
export default Signup;
