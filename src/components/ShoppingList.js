import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";
import { useState } from "react";
import Categories from "./Categories";

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState("");
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    [],
  );

  function addToCart(item) {
    if (cart.find((cartItem) => cartItem.id === item.id)) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      updateCart(updatedCart);
    } else {
      updateCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  return (
    <div>
      <Categories
        setActiveCategory={setActiveCategory}
        categories={categories}
        activeCategory={activeCategory}
      />

      <ul className="lmj-plant-list">
        {plantList
          .filter((item) => !activeCategory || activeCategory === item.category)
          .map((item) => (
            <div key={item.id} className="lmj-plant-item">
              <PlantItem
                name={item.name}
                cover={item.cover}
                id={item.id}
                light={item.light}
                water={item.water}
                price={item.price}
              />
              <button onClick={() => addToCart(item)}>Ajouter</button>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
