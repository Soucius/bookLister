import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  const navigate = useNavigate();

  const deleteAccount = () => {
    window.alert("Are you sure to keep continue delete your account?");

    localStorage.removeItem("username");
    localStorage.removeItem("password");

    navigate("/register");
  };

  const goBooks = () => {
    navigate("/books");
  };

  return (
    <>
      <Navbar />

      <div className="h-screen flex items-center justify-center">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hi {localStorage.getItem("username").toUpperCase()} <br /> Welcome to Book Lister App</h5>
          
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This app made for <em>IKBOX</em></p>

          <div className="flex justify-between">
            <Link onClick={goBooks} to="/books" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              See Your Books

              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </Link>

            <Link onClick={deleteAccount} to="/register" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-800 dark:focus:ring-red-800">
              Delete Account

              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>

            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;