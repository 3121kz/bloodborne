import React from "react";
import { ItemList } from "../helpers/ItemList";
import Consumable from "../components/Consumable";
import "../styles/Items.css";

function Items() {
  return (
    <div className="items">
      <h1 className="listTitle"> Items </h1>
      <div className="itemList">
        {ItemList.map((consumable, key) => {
          return (
            <Consumable
              key={key}
              image={consumable.image}
              name={consumable.name}
              price={consumable.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Items;
