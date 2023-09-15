import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './componenets/App.jsx'
import { BrowserRouter } from 'react-router-dom';

// import "./style/main.scss";
import './style/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
