import "./QuranPages.css";
import { QuranDataSura } from "../datas/quran-metadata";
import { quranTextEmla } from "../datas/QuranTextEmla";
import QuranAyeh from "./QuranAyeh";
import { v4 as uuidv4 } from "uuid";

const AllQuranPages = () => {
  return (
    <>
      <div className="container">
        <div className="top__header-wrappper">
          <div className="top-header__gradient">
            <div className="top-header">
              <div className="top-header__icon-wrapper">
                <svg width="38" height="41" viewBox="0 0 30 30" className="svg">
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M14.526 17.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
                    <path d="M22.526 14a8.023 8.023 0 00-.188-1.713l2.714-2.055-2-3.464-3.143 1.326a7.982 7.982 0 00-2.961-1.719L16.526 3h-4l-.422 3.375c-1.1.352-2.11.939-2.961 1.719L6 6.768l-2 3.464 2.714 2.055a7.904 7.904 0 000 3.426L4 17.768l2 3.464 3.143-1.326a7.983 7.983 0 002.961 1.719L12.526 25h4l.422-3.375a7.982 7.982 0 002.961-1.719l3.143 1.326 2-3.464-2.714-2.055A8.023 8.023 0 0022.526 14v0z" />
                  </g>
                </svg>
                <svg width="38" height="41" viewBox="0 0 29 29" className="svg">
                  <g
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    fill="none"
                  >
                    <path
                      strokeLinecap="square"
                      d="M24 23l-4.5-4.5M12 19a8 8 0 100-16 8 8 0 000 16z"
                    />
                    <path d="M7 11a5 5 0 015-5" />
                  </g>
                </svg>
              </div>
              <div className="top-header-desc">
                <div className="top-header-desc__text">
                  <h3>
                    سوره الرحمن<span>1آیه</span>
                  </h3>
                  <p>صفحه 2</p>
                </div>
                <div className="back__wrapper">
                  <img className="back__img" src="./img/back.svg" alt="back" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="search-wrapper">
          {QuranDataSura.map((data) => {
            const start = +data[0];
            const end = +data[0] + +data[1];
            const arrr = quranTextEmla.slice(start, end);
            return (
              <ul key={uuidv4()} className="search__result-wrapper">
                <div className="quran__badge-container">
                  <span className="search__result-list-badge">
                    <small>ص1</small>شروع صفحه 1
                  </span>
                  <div className="quran__banner-container">
                    <p className="quran__text quran__title-text-weight">
                      {data[4]}
                    </p>
                    <p>سوره 1</p>
                  </div>
                </div>
                {arrr.map((ayeh, i) => {
                  return <QuranAyeh key={uuidv4()} ayehIndex={i} ayeh={ayeh} />;
                })}
              </ul>
            );
          })}
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
                  <img
                    className="haram-img"
                    src="./img/haram2.7b1ffc7.png"
                    alt="haram"
                  />
                </a>
              </div>
            </ul>
          </nav>
        </section>
      </div>
    </>
  );
};

export default AllQuranPages;
