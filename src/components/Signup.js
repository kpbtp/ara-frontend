import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ signup }) => {
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
    signup(userInfo);
    navigate("/");
    e.target.reset(); // resets the input field
  };
  return (
    <section className="max-h-full h-screen bg-gradient-to-b p-1 from-gray-950 via-gray-800 to-gray-800">
      <div className="shadow-xl shadow-rose-500 m-20 bg-rose-600  p-10 rounded-xl my-20 flex-col">
        <div className="bg-gray-600  p-3 rounded-lg">
          <h2 className="text-3xl text-center">Sign Up</h2>
          <div className="flex items-center leading-8 justify-center">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="rounded px-2 mb-2 mt-3"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="rounded px-2 mb-2"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Confirm Password"
                  className="rounded px-2 mb-2"
                />
                <input
                  type="submit"
                  value="Sign Up"
                  className="bg-pink-800 hover:bg-pink-600 text-white font-bold  px-2 rounded mb-5"
                />
              </div>
              Already registered?{" "}
              <a
                href="/login"
                className="text-white no-underline hover:text-gray-300"
              >
                <span className="hover:text-pink-400">Login </span>
              </a>
              here
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Signup;
