import PropTypes from "prop-types";
import { useState } from "react";
import "./gallery.css";

export default function Gallery({ pictures, title }) {
  const [loading, udateLoading] = useState(false);
  const [imageIndex, updateImageIndex] = useState(0);
  const indexOflastPicture = pictures.length - 1;
  const isJustOnePicture = indexOflastPicture === 0;
  function handleClickLeft() {
    udateLoading(true);
    if (imageIndex === 0) {
      updateImageIndex(indexOflastPicture);
    } else {
      updateImageIndex(imageIndex - 1);
    }
  }
  function handleClickRight() {
    udateLoading(true);
    if (imageIndex === indexOflastPicture) {
      updateImageIndex(0);
    } else {
      updateImageIndex(imageIndex + 1);
    }
  }
  return (
    <div>
      <div className="gallery">
        <i
          className={`fa-solid fa-chevron-left ${
            isJustOnePicture ? "hidden" : ""
          }`}
          onClick={handleClickLeft}
        ></i>
        <img
          src={pictures[imageIndex]}
          alt={title}
          className={`gallery-cover ${loading ? "loading" : ""}`}
          onLoad={() => {
            udateLoading(false);
          }}
        />
        <i
          className={`fa-solid fa-chevron-right ${
            isJustOnePicture ? "hidden" : ""
          }`}
          onClick={handleClickRight}
        ></i>
      </div>
      <p className="numbering">
        {imageIndex + 1}/{indexOflastPicture + 1}
      </p>
    </div>
  );
}

Gallery.propTypes = {
  pictures: PropTypes.array,
  title: PropTypes.string,
};
