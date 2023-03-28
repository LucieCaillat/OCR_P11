import places from '../../datas/logements.json'
import Dropdown from '../../components/dropdown/Dropdown'
import RatingStars from '../../components/ratingStars/RatingStars'
import './place.css'

export default function Place(){
  const id = window.location.pathname.replace(/\/place\//,'')
  const {title, cover, description, host, location, tags, equipments, rating} = places.filter((place)=> place.id === id)[0]
  return <div>
    <img src={cover} alt={title} className="place-cover"/>
    <div className='headline-information-box'>
      <div>
        <h1>{title}</h1>
        <h2>{location}</h2>
        <div className='tags-box'>
          {tags.map((tag)=> <div key={tag} className='tag'>{tag}</div>)}
        </div>        
      </div>
      <div className='host-rating-box'>
        <div className='host-box'>
          <div className='host-name'>
            <div>{host.name.split(' ')[0]}</div>
            <div>{host.name.split(' ')[1]}</div>
          </div>
          <img src={host.picture} alt={host.name} />
        </div>        
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