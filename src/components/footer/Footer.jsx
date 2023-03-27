import './footer.css'
import whiteLogo from '../../assets/white-logo.png'

export default function Footer(){
  return <footer className='footer'>
    <img src={whiteLogo} alt="Kaza"/>
    <div>© 2020 Kasa. All rights reserved</div>
  </footer>
}
