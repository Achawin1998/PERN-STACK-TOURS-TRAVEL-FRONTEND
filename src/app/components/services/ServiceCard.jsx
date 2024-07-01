import React from "react";
import "./service-card.css";

function ServiceCard({ item }) {
  const { imgUrl, title } = item;

  return (
    <div className="wrap__info">
      <div className="service__item">
        <div className="service__img">
          <img src={imgUrl} />
        </div>
        <h5>{title}</h5>
      </div>
    </div>
  );
}

export default ServiceCard;
