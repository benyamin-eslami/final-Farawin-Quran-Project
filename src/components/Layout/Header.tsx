import backImg from "../../assets/img/back.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../QuranPages.css";
import { pauseAudio } from "../store/features/audio";
import { useAppDispatch } from "../store/store";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div className="top__header-wrappper">
      <div className="top-header__gradient">
        <div className="top-header">
          <div className="top-header__icon-wrapper">
            <Link onClick={() => dispatch(pauseAudio(true))} to={"/setting"}>
              <svg width="38" height="41" viewBox="0 0 30 30" className="svg">
                <g
                  fill="none"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M14.526 17.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
                  <path d="M22.526 14a8.023 8.023 0 00-.188-1.713l2.714-2.055-2-3.464-3.143 1.326a7.982 7.982 0 00-2.961-1.719L16.526 3h-4l-.422 3.375c-1.1.352-2.11.939-2.961 1.719L6 6.768l-2 3.464 2.714 2.055a7.904 7.904 0 000 3.426L4 17.768l2 3.464 3.143-1.326a7.983 7.983 0 002.961 1.719L12.526 25h4l.422-3.375a7.982 7.982 0 002.961-1.719l3.143 1.326 2-3.464-2.714-2.055A8.023 8.023 0 0022.526 14v0z" />
                </g>
              </svg>
            </Link>
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
              <h3>قرآن</h3>
            </div>
            <div
              onClick={() => {
                dispatch(pauseAudio(true));
                navigate(-1);
              }}
              className="back__wrapper"
            >
              <img className="back__img" src={backImg} alt="back" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
