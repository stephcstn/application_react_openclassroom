import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";

function ShoppingList() {
    const categories = plantList.reduce((acc, plant) => {
        if (!acc.includes(plant.category)) {
            acc.push(plant.category);
        }
        return acc;
    }, []);

  return (
    <div>
      <ul>
        {categories.map((category) => (
            <li key={category}>{category}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({ name, cover, id, light, water }) => (
            <PlantItem 
              key={id} 
              name={name} 
              cover={cover} 
              id={id} 
              light={light} 
              water={water}
             />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;