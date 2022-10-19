import "./Main.css";
import settingLogo from "../assets/img/setting.svg";
import quranSvg from "../assets/img/quran.svg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <section className="main-content">
        <div className="date__container">
          <div className="date__container-pattern-holder">
            <div className="date__content-container">
              <div className="date-section date__ghamari">
                <p>صفر1444 7</p>
                <p>یا ذالجلال و الاکرام</p>
              </div>
              <div className="date-section date__shamsi">
                <p>13</p>
                <p>شهریور 1401</p>
              </div>
            </div>
          </div>
        </div>

        <div className="app__menu">
          <Link to={"/setting"} className="app__menu-container">
            <div className="app__menu-item">
              <img
                className="app__menu-item__img"
                src={settingLogo}
                alt="setting"
              />
            </div>
            <p className="app_menu-item__desc">تنظیمات</p>
          </Link>
          <Link to={"/search"} className="app__menu-container">
            <div className="app__menu-item">
              <img className="app__menu-item__img" src={quranSvg} alt="quran" />
            </div>
            <p className="app_menu-item__desc">قرآن</p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Main;
