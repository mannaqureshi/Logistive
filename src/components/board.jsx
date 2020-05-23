import React from "react";
import "./board.css";
export const Board = ({ title, imageDesktop, imageMobile }) => {
  return (
    <div className="board shadow">
      <p className="heading-primary tc-primary">{title}</p>
      <img src={window.innerWidth > 767 ? imageDesktop : imageMobile}></img>
    </div>
  );
};
