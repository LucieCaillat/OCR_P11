import places from '../../datas/logements.json'
import Error from '../error/Error'
import HostBox from '../../components/hostBox/HostBox'
import TagsBox from '../../components/tags/TagsBox'
import RatingStars from '../../components/ratingStars/RatingStars'
import Dropdown from '../../components/dropdown/Dropdown'
import './place.css'

export default function Place(){
  const id = window.location.pathname.replace(/\/place\//,'')
  const dataPlace = places.filter((place)=> place.id === id)[0]
  const isExistingPlace = dataPlace != null
  if (!isExistingPlace){
    return <Error/>
  }
  const {title, cover, description, host, location, tags, equipments, rating} = dataPlace
  return  <div>
    <img src={cover} alt={title} className="place-cover"/>
    <div className='headline-information-box'>
      <div>
        <h1>{title}</h1>
        <h2>{location}</h2>
        <TagsBox tags={tags}/>
      </div>
      <div className='host-rating-box'>
        <HostBox name={host.name} picture={host.picture}/>
        <RatingStars rating={parseInt(rating)}/>
      </div>
    </div>    
    <div className='place-dropdowns-box'>
      <Dropdown title="Description">
        <p>{description}</p>
      </Dropdown>
      <Dropdown title="Équipements">
        <ul>
          {equipments.map((equipment) => <li key={equipment}>{equipment}</li>)}
        </ul>
      </Dropdown>      
    </div>
  </div>
}