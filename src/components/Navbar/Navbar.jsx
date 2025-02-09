import logo from '../../assets/LOGO.png';
import { Link, useLocation } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { authContext } from '../../context/Auth/Auth';
import { initFlowbite } from 'flowbite';

export default function Navbar() {
  const { userToken, setUserToken } = useContext(authContext);
  const location = useLocation();

  function logout() {
    setUserToken(null);
    localStorage.removeItem('authToken');
  }

  useEffect(() => {
    initFlowbite();
  }, []);

  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'text-white bg-purple-700 px-4 py-2 rounded lg:bg-transparent lg:text-purple-500 lg:dark:text-purple-500'
      : 'text-gray-900 px-4 py-2 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-purple-700 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white';
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
          <div className="hidden lg:flex space-x-13.7"> 
            <Link to="/" className={getLinkClass('/')}>
              <div className="flex flex-col items-center">  
                <i className="fas fa-home"></i>
                <span>Home</span>
              </div>
            </Link>
            <Link to="/brands" className={getLinkClass('/brands')}>
              <div className="flex flex-col items-center">
                <i className="fa-solid fa-phone"></i>
                <span>Call</span>
              </div>
            </Link>
            <Link to="/cart" className={getLinkClass('/cart')}>
              <div className="flex flex-col items-center">
                <i className="fas fa-cart-shopping"></i>
                <span>Shop</span>
              </div>
            </Link>
            <Link to="/categories" className={getLinkClass('/categories')}>
              <div className="flex flex-col items-center">
                <i className="fa-solid fa-list"></i>
                <span>Categories</span>
              </div>
            </Link>
          </div>
        )}

        {/* Logout Button on the Right */}
        {userToken && (
          <Link to="/login" onClick={logout} className="text-red-500 hover:text-red-700 font-semibold px-4 py-2">
            <div className="flex flex-col items-center">
              <i className="fas fa-arrow-right-from-bracket"></i>
              <span>Logout</span>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
}
