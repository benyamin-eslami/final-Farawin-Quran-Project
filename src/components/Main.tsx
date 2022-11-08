import style from "./Main.module.css";
import settingLogo from "../assets/img/setting.svg";
import quranSvg from "../assets/img/quran.svg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <section className={style["main-content"]}>
        <div className={style["app__menu"]}>
          <Link to={"/setting"} className={style["app__menu-container"]}>
            <div className={style["app__menu-item"]}>
              <img
                loading="lazy"
                className={style["app__menu-item__img"]}
                src={settingLogo}
                alt="setting"
              />
            </div>
            <p className={style["app_menu-item__desc"]}>تنظیمات</p>
          </Link>
          <Link to={"/search"} className={style["app__menu-container"]}>
            <div className={style["app__menu-item"]}>
              <img
                loading="lazy"
                className={style["app__menu-item__img"]}
                src={quranSvg}
                alt="quran"
              />
            </div>
            <p className={style["app_menu-item__desc"]}>قرآن</p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Main;
