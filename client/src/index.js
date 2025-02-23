import React from 'react';
import ReactDOM from 'react-dom/task-manager';
import App from './App';
import { Provider } from "react-redux";
import Store from './Redux/store';
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>  <App /></Provider>
  </React.StrictMode>
);
