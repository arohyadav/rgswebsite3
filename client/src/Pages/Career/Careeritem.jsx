import React from "react";
import "./Careercard.scss"

 export const Careeritem = ({ item, width }) => {
  return (
    <div className="career-card-item" style={{ width: width }}>
    <div></div>
      <img className="career-card-img"  src={item.icon} alt=""/>
      <div className="career-item-text">{item.description}</div>
    </div>
  );
};

