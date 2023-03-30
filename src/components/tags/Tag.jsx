import PropTypes from "prop-types";
import "./tag.css";

export default function Tag({ name }) {
  return <div className="tag">{name}</div>;
}

Tag.propTypes = {
  name: PropTypes.string,
};
