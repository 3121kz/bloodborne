import React from "react";

function Consumable({ name, image, price }) {
  return (
    <div className="consumable">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name} </h1>
      <p>{price} </p>
    </div>
  );
}

export default Consumable;
