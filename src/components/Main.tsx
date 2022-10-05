import "./Main.css";
import logo from "../assets/img/top-logo.svg";
import settingLogo from "../assets/img/setting.svg";
import quranSvg from "../assets/img/quran.svg";
import haramLogo from "../assets/img/haram2.7b1ffc7.png";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="top__header-wrappper">
          <div className="top-header__gradient">
            <div className="top-header">
              <div className="login">
                <svg viewBox="0 0 48 48" width="18" height="15" className="svg">
                  <g
                    className="nc-icon-wrapper"
                    strokeLinecap="square"
                    strokeWidth="4"
                    fill="#fff"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                  >
                    <path
                      data-cap="butt"
                      data-color="color-2"
                      d="M19 24.153V30L8.454 32.812A6.001 6.001 0 004 38.61V46h40v-7.39a6 6 0 00-4.454-5.797L29 30v-5.847"
                      strokeLinecap="butt"
                    />
                    <path d="M24 26h0c-5.523 0-10-6.477-10-12v-2c0-5.523 4.477-10 10-10h0c5.523 0 10 4.477 10 10v2c0 5.523-4.477 12-10 12z" />
                  </g>
                </svg>
              </div>
              <div className="top-header-desc">
                <h3>قرآن رضوی</h3>
                <div className="logo">
                  <img className="logo-img" src={logo} alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
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
            <a className="app__menu-container" href="#">
              <div className="app__menu-item">
                <img
                  className="app__menu-item__img"
                  src={settingLogo}
                  alt="setting"
                />
              </div>
              <p className="app_menu-item__desc">تنظیمات</p>
            </a>
            <a className="app__menu-container" href="#">
              <div className="app__menu-item">
                <img
                  className="app__menu-item__img"
                  src={quranSvg}
                  alt="quran"
                />
              </div>
              <p className="app_menu-item__desc">قرآن</p>
            </a>
          </div>
        </section>
        <section className="nav__wrapper">
          <nav>
            <ul>
              <li className="menu-list">
                <a href="#">
                  <svg
                    viewBox="0 0 48 48"
                    width="30"
                    height="30"
                    className="svg"
                  >
                    <g
                      className="nc-icon-wrapper"
                      strokeLinecap="square"
                      strokeWidth="4"
                      fill="#fff"
                      stroke="gray"
                      strokeMiterlimit="10"
                    >
                      <path
                        data-cap="butt"
                        data-color="color-2"
                        d="M19 24.153V30L8.454 32.812A6.001 6.001 0 004 38.61V46h40v-7.39a6 6 0 00-4.454-5.797L29 30v-5.847"
                        strokeLinecap="butt"
                      />
                      <path d="M24 26h0c-5.523 0-10-6.477-10-12v-2c0-5.523 4.477-10 10-10h0c5.523 0 10 4.477 10 10v2c0 5.523-4.477 12-10 12z" />
                    </g>
                  </svg>
                </a>
              </li>

              <li className="menu-list">
                <a href="#" className="menu-list">
                  <svg
                    viewBox="0 0 22 22"
                    width="30"
                    height="30"
                    className="svg"
                  >
                    <path
                      fill="none"
                      stroke="#848385"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M18.071 18.07c-3.056 3.057-7.581 3.717-11.285 2.005-.546-.22-.995-.398-1.42-.398-1.188.007-2.665 1.157-3.433.39-.767-.767.384-2.246.384-3.44 0-.426-.17-.866-.39-1.414C.212 11.51.873 6.983 3.93 3.928 7.832.025 14.17.025 18.071 3.927c3.909 3.909 3.902 10.242 0 14.143z"
                      clipRule="evenodd"
                    />
                    <path
                      fill="none"
                      stroke="#848385"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.94 11.414h.008m-4.018 0h.01m-4.019 0h.01"
                      opacity=".4"
                    />
                  </svg>
                </a>
              </li>
              <div className="home-nav">
                <a href="#">
                  <img className="haram-img" src={haramLogo} alt="haram" />
                </a>
              </div>
            </ul>
          </nav>
        </section>
      </div>
    </>
  );
};

export default Main;
