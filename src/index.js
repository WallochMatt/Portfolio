import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ScrollToTop />
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

