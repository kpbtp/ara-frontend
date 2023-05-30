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
                className="rounded mb-2 mt-3 px-1 justify-center"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="rounded px-1"
              />
              </div>
              <br />
              <div className="flex justify-center">
                <input
                  type="submit"
                  value="Submit"
                  className="bg-pink-800 hover:bg-pink-600 text-white font-bold  px-2 rounded"
                />
              </div>
              <br />
              Already registered?{" "}
              <a
                href="/signup"
                className="text-white no-underline hover:text-gray-300"
              >
                <span className="hover:text-pink-400">Signup</span>
              </a>{" "}
              here!
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
