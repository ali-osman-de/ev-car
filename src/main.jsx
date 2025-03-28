import { createRoot } from 'react-dom/client'
import './index.css';
import { store } from './store/store.js';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)
