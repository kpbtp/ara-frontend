import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Login = ({ login }) => {
  const formRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    //stop the default behavior of the form.  We want to send it with fetch.
    e.preventDefault();
    // store the form entries in a variable
    const formData = new FormData(formRef.current);
    // create and object from the entries
    const data = Object.fromEntries(formData);
    // store user's info in format that can be used with jwt.
    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    login(userInfo);
    navigate("/");
    e.target.reset(); // resets the input field
  };

  return (
    <div>
      <h2>Login</h2>
      <form  ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name="email" placeholder="email" />
        <br />
        Password:{" "}
        <input type="password" name="password" placeholder="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <div>
        Not registered yet?, <a href="/signup">Signup</a> here.
      </div>
    </div>
  );
};

export default Login;
