import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const Login = ({ login }) => {
  const formRef = useRef();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData);
      setUserInfo({ email: data.email, password: data.password });

      const response = await login(userInfo);
      
      if (response.success) {
        // Successful login
        setErrorMessage("");
        navigate("/");
      } else {
        // Login failed, display error message
        setErrorMessage(response.message);
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <section className="max-h-full h-screen bg-gradient-to-b p-1 from-gray-950 via-gray-800 to-gray-800">
      <div className="shadow-xl shadow-rose-500 m-20 bg-rose-600  p-10 rounded-xl my-20 flex-col">
        <div className="bg-gray-600  p-3 rounded-lg">
          <h2 className="text-3xl text-center">Login</h2>
          <div className="flex items-center leading-8 justify-center">
            <form className="px-3" ref={formRef} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="rounded mb-2 mt-3 px-1"
                  value={userInfo.email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="rounded px-1 mb-2"
                  value={userInfo.password}
                  onChange={handleChange}
                />
                <input
                  type="submit"
                  value="Login"
                  className="bg-pink-800 hover:bg-pink-600 text-white font-bold px-2 rounded mb-5"
                />
              </div>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              Need an account?{" "}
              <a
                href="/signup"
                className="text-white no-underline hover:text-gray-300"
              >
                <span className="hover:text-pink-400">Signup </span>
              </a>
              here!
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
