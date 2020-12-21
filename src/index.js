import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WritePost from "./WritePost";
import MyNavbar from "./MyNavbar.js"

import {Route, Link, BrowserRouter as Router} from '../node_modules/react-router-dom';
var myRoute =(
   <App></App>

)
ReactDOM.render(myRoute,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
