import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Error from './pages/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <Home/>
  <AboutUs/>
  <Error/>
</React.StrictMode>  
);

