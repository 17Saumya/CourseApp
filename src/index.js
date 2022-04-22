import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 

import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from 'react-router-dom';
import AdminApp from './AdminApp';

//import Jumbotron from "react-bootstrap/Jumbotron";
ReactDOM.render(
  <BrowserRouter> 
  <App />
  <AdminApp />
  </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
