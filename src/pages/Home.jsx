import places from '../datas/logements.json'
import Card from "../components/card/Card"

export default function Home(){
  
  return <div>
    <h1>Page d'accueil</h1>
    {places.map((place) => (<Card title={place.title} cover={place.cover} id={place.id} key={place.id}/>))}
  </div>
}
