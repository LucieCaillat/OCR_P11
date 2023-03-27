import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link} from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Error from './pages/Error';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <Router>
    <div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="about">À propos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<AboutUs/>}/>
        <Route path=":error" element={<Error/>}/>
      </Routes>

    </div>
  </Router>
</React.StrictMode>  
);

