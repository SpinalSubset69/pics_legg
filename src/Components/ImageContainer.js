import React from "react";

const ImageContainer = (props) => {
  return (
    <div className="content">
      <div className="ui link card">
        <div className="card">
          <div className="image">           
           <a href={props.download} target="_blank"> <img
              className="tiny image-list"
              key={props.id}
              src={props.image}
              alt="Something"
            /> </a>           
          </div>          
          <div className="card-text">
            <span className="right floated">
              <i className="thumbs up outline icon"></i>
              Likes: {props.likes}
            </span>
            <span>
              <i className="expand arrows alternate icon"></i>
              Size: {props.width} x {props.height}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
