import React from "react";

import myImage from "../assets/image.png";
import "./image-component.style.css";

const ImageComponent = () => {
  return (
    <div className="image-container">
      <img src={myImage} alt="my-profile-image" />
    </div>
  );
};

export default ImageComponent;
