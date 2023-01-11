import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const Form = ReactDOM.createForm(document.getElementById('Form'));
Form.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
