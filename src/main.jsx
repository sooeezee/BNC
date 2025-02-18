import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // ✅ Import this
import { store } from './redux/store';  // ✅ Ensure the correct store import
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Provider store={store}>  {/* ✅ Wrap App inside Provider */}
        <App />
      </Provider>
    </HelmetProvider>
  </StrictMode>
);
