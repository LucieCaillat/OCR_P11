import places from '../../datas/logements.json'
import Dropdown from '../../components/dropdown/Dropdown'
import './place.css'

export default function Place(){
  const id = window.location.pathname.replace(/\/place\//,'')
  const {title, cover, description, host, location, tags, equipments, rating} = places.filter((place)=> place.id === id)[0]
  return <div>
    <img src={cover} alt={title} className="place-cover"/>
    <div>
      <h1>{title}</h1>
      <h2>{location}</h2>
      {tags.map((tag)=> <div key={tag}>{tag}</div>)}
    </div>
    <div>
      <div>{host.name}</div>
      <img src={host.picture} alt={host.name} />
      <div>note : {rating}</div>
    </div>
    <div>
      <Dropdown title="Description">
        {description}
      </Dropdown>
      <Dropdown title="Équipements">
        <ul>
          {equipments.map((equipment) => <li key={equipment}>{equipment}</li>)}
        </ul>
      </Dropdown>      
    </div>
  </div>
}