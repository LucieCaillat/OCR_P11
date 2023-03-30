import { Link } from "react-router-dom";
import "./card.css";

export default function Card(props) {
  const { title, cover, id } = props;
  return (
    <div className="card">
      <Link to={"place/" + id}>
        <img src={cover} alt={title} />
      </Link>
      <h2>{title}</h2>
    </div>
  );
}
