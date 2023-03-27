import { Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import './header.css'

  export default function Header(){ 
  const currentPath = window.location.pathname
  const isHomePage = currentPath === "/"
  const isAboutUsPage = currentPath === "/about"
  return <header className='header'>
    <img src={logo} alt="Kaza" className='header-logo'/>
    <nav className='nav'>
        <Link to="/" className={'nav-link ' + (isHomePage && 'curent-link')}>Accueil</Link>
        <Link to="about" className={'nav-link ' + (isAboutUsPage && 'curent-link')}>À Propos</Link>
      </nav>    
    </header>
}
