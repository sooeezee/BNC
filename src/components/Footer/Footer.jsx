import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-5">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 text-center">
          
          {/* Quick Links (Icons Only) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex justify-center space-x-6">
              <Link to="/" className="text-gray-400 hover:text-purple-600">
                <i className="fas fa-home fa-lg"></i>
              </Link>
              <Link to="/cart" className="text-gray-400 hover:text-purple-600">
                <i className="fas fa-shopping-cart fa-lg"></i>
              </Link>
              <Link to="/brands" className="text-gray-400 hover:text-purple-600">
                <i className="fas fa-phone fa-lg"></i>
              </Link>
              <Link to="/categories" className="text-gray-400 hover:text-purple-600">
                <i className="fas fa-list fa-lg"></i>
              </Link>
            </div>
          </div>

          {/* Quick Contacts (Icons Only) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Contacts</h3>
            <div className="flex justify-center space-x-6">
              <a href="https://www.facebook.com/BncComputech" target="_blank" className="text-gray-400 hover:text-purple-600">
                <i className="far fa-envelope fa-lg"></i>
              </a>
              <a href="https://www.facebook.com/BncComputech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.facebook.com/BncComputech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-600">
                <i className="fas fa-phone"></i>
              </a>
              <a href="https://www.facebook.com/BncComputech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-600">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

        </div>

        <hr className="border-gray-700 my-6" />
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} BnC Computech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
