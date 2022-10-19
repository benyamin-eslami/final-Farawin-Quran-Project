import { Link } from "react-router-dom";
import textIcon from "../assets/img/letter-t-pngrepo-com.png";
import play from "../assets/img/play.png";
import haram from "../assets/img/haram2.7b1ffc7.png";
import ghari from "../assets/img/translator-makarem.17a2064.png";
import "./audioPart.css";
import Gharies from "./Gharies";

const AudioPart = () => {
  return (
    <section className="nav__wrapper">
      <nav>
        <Gharies />

        <ul>
          <li className="menu-list">
            <img className="text-icon" src={textIcon} alt="text-setting" />
          </li>
          <li className="menu-list">
            <img className="menu-list-img" src={ghari} alt="home" />
          </li>
          <li className="menu-list">
            <img className="playImg" src={play} alt="play" />
          </li>
          <li className="menu-list">
            <img className="menu-list-img" src={ghari} alt="home" />
          </li>
          <li className="menu-list">
            <img className="menu-list-img" src={haram} alt="haram-home" />
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default AudioPart;
