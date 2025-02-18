import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import logo from "../../assets/LOGO.png";
import { authContext } from "../../context/Auth/Auth";

export default function Navbar() {
  const { userToken, setUserToken } = useContext(authContext);
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function logout() {
    setUserToken(null);
    localStorage.removeItem("authToken");
  }

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-white bg-purple-700 px-4 py-2 rounded lg:bg-transparent lg:text-purple-500 lg:dark:text-purple-500"
      : "text-gray-900 px-4 py-2 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-purple-700 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white";
  };

  return (
    <nav className="bg-white border-gray-200 shadow-md dark:bg-gray-900 fixed top-0 w-full z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo on the Left */}
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-12" alt="BNC Logo" />
        </Link>

        {/* Centered Navigation Links */}
        {userToken && (
          <div className="hidden lg:flex space-x-10">
            <Link to="/" className={getLinkClass("/")}>
              <div className="flex flex-col items-center">
                <i className="fas fa-home"></i>
                <span>Home</span>
              </div>
            </Link>
            <Link to="/brands" className={getLinkClass("/brands")}>
              <div className="flex flex-col items-center">
                <i className="fa-solid fa-phone"></i>
                <span>Call</span>
              </div>
            </Link>
            <Link to="/shop" className={getLinkClass("/shop")}>
              <div className="flex flex-col items-center">
                <i className="fas fa-cart-shopping"></i>
                <span>Shop</span>
              </div>
            </Link>
            <Link to="/categories" className={getLinkClass("/categories")}>
              <div className="flex flex-col items-center">
                <i className="fa-solid fa-list"></i>
                <span>Categories</span>
              </div>
            </Link>
          </div>
        )}

        {/* Profile Icon with Dropdown */}
        {userToken && (
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-gray-900 dark:text-white focus:outline-none"
            >
              <FaUser className="text-2xl hover:text-purple-700" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <button
                  onClick={logout}
                  className="flex items-center w-full px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
