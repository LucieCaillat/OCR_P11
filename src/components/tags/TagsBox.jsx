import PropTypes from "prop-types";
import Tag from "./Tag";
import "./tagsBox.css";

export default function TagsBox({ tags }) {
  return (
    <div className="tags-box">
      {tags.map((tag) => (
        <Tag key={tag} name={tag} />
      ))}
    </div>
  );
}

TagsBox.propTypes = {
  tags: PropTypes.array,
};
