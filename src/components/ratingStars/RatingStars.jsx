import PropTypes from "prop-types";
import "./ratingStars.css";

export default function RatingStars({ rating }) {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="star-box">
      {range.map((numb) => (
        <i
          className={`fa-solid fa-star ${rating >= numb ? "filled-star" : ""}`}
          key={`star-${numb}`}
        ></i>
      ))}
    </div>
  );
}

RatingStars.propTypes = {
  rating: PropTypes.number,
};
