import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './components/app/app';
import history from './services/history';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <ToastContainer />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'));
