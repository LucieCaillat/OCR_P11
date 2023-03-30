import { Link } from "react-router-dom";
import "./error.css";

export default function Error() {
  return (
    <div className="error-box">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
