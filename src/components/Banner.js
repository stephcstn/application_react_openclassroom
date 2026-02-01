import "../styles/Banner.css";
import logo from "../assets/logo.png";
import Saison from "./Saison";

function Banner() {
  const title = "La maison jungle";
  return (
    <div className="lmj-banner">
      <div>
        <img
          src={logo}
          alt="La maison jungle logo"
          className="lmj-banner-logo"
        />
        <h1 className="lmj-title">{title}</h1>
        <Saison />
      </div>
    </div>
  );
}

export default Banner;
