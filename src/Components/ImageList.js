import React from "react";
import ImageContainer from "./ImageContainer";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <ImageContainer
        id={image.id}
        image={image.urls.regular}
        download={image.links.download}       
        likes={image.likes}
        width ={image.width}
        height ={image.height}
      />
    );
  });

  return (
    <div>
     {images}
    </div>
  );
};

export default ImageList;
