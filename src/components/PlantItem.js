import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function PlantItem({ name, cover, id, light, water}) {
    return (
        <li key={id} className="lmj-plant-item" onClick={() => handleClick(name)}>
            <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale scaleValue={light} careType="light" />
                <CareScale scaleValue={water} careType="water" />
            </div>
        </li>
    )
}

function handleClick(plantName) {
    console.log("Vous avez acheté 1 " + plantName);
}

export default PlantItem;