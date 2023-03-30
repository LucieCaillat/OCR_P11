import PropTypes from "prop-types";
import Card from "../../components/card/Card";
import cover from "../../assets/home-cover.jpg";
import "./home.css";

export default function Home({ places }) {
  return (
    <div>
      <img src={cover} alt="Accueil" className="home-cover" />
      <h1 className="hidden">Page d'accueil</h1>
      <h2 className="home-title">Chez vous, partout et ailleurs</h2>
      <div className="card-container">
        {places.map((place) => (
          <Card
            title={place.title}
            cover={place.cover}
            id={place.id}
            key={place.id}
          />
        ))}
      </div>
    </div>
  );
}

Home.propTypes = {
  places: PropTypes.array,
};
