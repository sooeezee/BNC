import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MainLayout from './pages/MainLayout/MainLayout';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import AuthContextProvider from './context/Auth/Auth';
import Home from './pages/Home/Home';

import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute';
import Shop from './pages/Shop/Shop'; 
import ProductDetails from './pages/Shop/ProductDetails'; // ✅ Added ProductDetails page
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Brands from './pages/Call/Call';
import Categories from './pages/Categories/Categories';
import RedirectIfAuthenticated from './components/RedirectIfAuthenticated/RedirectIfAuthenticated';

function App() {

  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: 'login',
          element: (
            <RedirectIfAuthenticated>
              <Login />
            </RedirectIfAuthenticated>
          ),
        },
        {
          path: 'forgotPassword',
          element: <ForgotPassword />,
        },
        {
          path: 'brands',
          element: (
            <ProtectedRoute>
              <Brands />
            </ProtectedRoute>
          ),
        },
        {
          path: 'categories',
          element: (
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
          ),
        },
        {
          path: 'shop', 
          element: (
            <ProtectedRoute>
              <Shop />
            </ProtectedRoute>
          ),
        },
        {
          path: 'shop/product/:id', // ✅ Added product details route
          element: (
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          ),
        },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);

  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthContextProvider>
  );
}

export default App;
