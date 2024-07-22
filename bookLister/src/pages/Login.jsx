import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const username = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    if (username.current.value == "" || password.current.value == "") {
      alert("Be sure you fill all the fields.");
    }

    if (username.current.value == localStorage.getItem("username") && password.current.value == localStorage.getItem("password")) {
      navigate("/");
    }
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <form className="max-w-sm mx-auto my-10">
          <div className="mb-5">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>

            <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" ref={username} required />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>

            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" ref={password} required />
          </div>

          <div className="mb-4">
            <Link to="/register" className="rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Do not have an account? Register here!</Link>
          </div>
          
          <button onClick={handleClick} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Login;