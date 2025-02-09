import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { authContext } from '../../context/Auth/Auth'; // Import auth context

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setUserToken } = useContext(authContext); // Access authentication state

  const buttonProps = {
    type: 'button',
    className:
      'sm:w-36 w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
  };

  function handleDemoLogin() {
    setIsLoading(true);

    setTimeout(() => {
      const demoToken = "demoUserToken"; // Simulated token
      localStorage.setItem("authToken", demoToken); // Store in localStorage
      setUserToken(demoToken); // Update context

      setIsLoading(false);
      navigate('/'); // Redirect to homepage
    }, 1000); // Simulated loading delay
  }

  const validate = Yup.object({
    email: Yup.string().required('Email is required').email('Email is not valid'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: () => {
      alert('Coming Soon');
    },
    validationSchema: validate,
  });

  return (
    <>
      <Helmet>
        <title>BNC</title>
      </Helmet>

      <div className="container">
        <form className="max-w-md mx-auto md:mt-12 mt-0" onSubmit={formik.handleSubmit}>
          <h1 className="text-2xl text-gray-500 mb-5 font-bold">Login Now</h1>

          {/* Email Input */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-green-600 peer"
              placeholder=" "
            />
            <label htmlFor="email" className="absolute text-sm text-gray-500">
              Email address
            </label>
            {formik.errors.email && formik.touched.email && (
              <span className="text-red-600 font-light text-sm">{formik.errors.email}</span>
            )}
          </div>

          {/* Password Input */}
          <div className="relative z-0 w-full group">
            <input
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-green-600 peer"
              placeholder=" "
            />
            <label htmlFor="password" className="absolute text-sm text-gray-500">
              Password
            </label>
            {formik.errors.password && formik.touched.password && (
              <span className="text-red-600 font-light text-sm">{formik.errors.password}</span>
            )}
          </div>

          <Link to="/forgotPassword" className="text-green-800 text-sm underline block my-3">
            Forgot password?
          </Link>

          {/* Buttons */}
          <div className="flex space-x-2">
            {/* Login Button (Shows "Coming Soon") */}
            <button
              type="button"
              onClick={() => alert('Coming Soon')}
              className={buttonProps.className}
            >
              Login
            </button>

            {/* Demo Login Button (Proceeds to Homepage) */}
            {isLoading ? (
              <button type="button" className={buttonProps.className} disabled>
                <i className="fa-solid fa-spinner animate-spin"></i>
              </button>
            ) : (
              <button type="button" onClick={handleDemoLogin} className={buttonProps.className}>
                Demo Login
              </button>
            )}

            {/* Admin Login Button (Shows "Coming Soon") */}
            <button
              type="button"
              onClick={() => alert('Coming Soon')}
              className={buttonProps.className}
            >
              Admin Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
