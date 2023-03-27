import { Routes, Route} from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';
import Home from '../home/Home';
import AboutUs from '../aboutUs/AboutUs';
import Place from '../place/Place';
import Error from '../Error';
import './layout.css'

export default function Layout(){
  return <div className='screen'>
    <div className='main'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<AboutUs/>}/>
        <Route path="place/:id" element={<Place/>}/>
        <Route path=":error" element={<Error/>}/>
      </Routes>
    </div>      
      <Footer/>
  </div>
}