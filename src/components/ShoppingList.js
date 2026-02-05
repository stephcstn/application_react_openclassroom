import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";

function ShoppingList({cart, updateCart}) {

  function addToCart(item) {
    if (cart.find((cartItem) => cartItem.id === item.id)) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      updateCart(updatedCart);
    }else {
      updateCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  return (
    <div>
      <ul className="lmj-plant-list">
        {plantList.map((item) => (
          <div key={item.id} className="lmj-plant-item">
            <PlantItem 
              key={item.id} 
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