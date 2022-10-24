import { Link } from "react-router-dom";
import textIcon from "../assets/img/letter-t-pngrepo-com.png";
import close from "../assets/img/close.png";
import play from "../assets/img/play-img.png";
import pause from "../assets/img/pause-img.png";
import haram from "../assets/img/haram2.7b1ffc7.png";
import basfar from "../assets/img/basfar.jpg";
import menshavi from "../assets/img/menshavi.png";
import fooladvandImg from "../assets/img/translator-fooladvand.0c7065d.png";
import makaremImg from "../assets/img/translator-makarem.17a2064.png";
import upArrow from "../assets/img/up-arrow.png";
import "./audioPart.css";
import Gharies from "./Gharies";
import { useSelector } from "react-redux";
import {
  selectAudioSrc,
  selectGhariName,
  selectTranslator,
  useAppDispatch,
} from "./store/store";
import { SyntheticEvent, useRef, useState } from "react";
import {
  audioProgressHandler,
  pauseAudio,
  playNextAudio,
} from "./store/features/audio";
import { selectIsIsPauesed } from "./store/store";
import Translators from "./Translators";
import TextSettings from "./TextSettings";

const AudioPart = () => {
  const [isShowTranslatorPart, setIsShowTranslatorPart] =
    useState<boolean>(false);
  const [isShowGhariPart, setIsShowGhariPart] = useState<boolean>(false);
  const [isShowTextSetting, setIsShowTextSetting] = useState<boolean>(false);

  const audioSrcSelect = useSelector(selectAudioSrc);
  const isPauesed = useSelector(selectIsIsPauesed);
  const ghariSelected = useSelector(selectGhariName);
  const translatorSelected = useSelector(selectTranslator);

  const dispatch = useAppDispatch();
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioPartSection = useRef<HTMLElement>(null);
  const ShowAudioRef = useRef<HTMLLIElement>(null);

  isPauesed && audioRef.current?.pause();

  const closeAudioPartHandler = () => {
    audioPartSection.current!.style.display = "none";
    audioRef.current?.pause();
    dispatch(pauseAudio(true));
    ShowAudioRef.current!.style.display = "flex";
  };
  const showAudioPartHandler = () => {
    ShowAudioRef.current!.style.display = "none";

    audioPartSection.current!.style.display = "block";
  };

  const playPauseHandler = () => {
    if (audioRef.current?.paused) {
      dispatch(pauseAudio(false));
      audioRef.current?.play();
    } else {
      dispatch(pauseAudio(true));
      audioRef.current?.pause();
    }
  };

  const audioFinishedHandler = (e: SyntheticEvent<HTMLAudioElement>) => {
    dispatch(playNextAudio());
  };

  // dispatch(
  //   audioProgressHandler(
  //     ((audioRef.current?.currentTime ? audioRef.current!.currentTime : 0) /
  //       (audioRef.current?.duration ? audioRef.current!.duration : 1)) *
  //       100
  //   )
  // );

  const closeGhariHandler = (isClose: boolean) => {
    isClose && setIsShowGhariPart(false);
  };
  const closeTranslatorHandler = (isClose: boolean) => {
    isClose && setIsShowTranslatorPart(false);
  };
  const closeTextSettingHandler = (isClose: boolean) => {
    isClose && setIsShowTextSetting(false);
  };

  return (
    <>
      <li
        ref={ShowAudioRef}
        onClick={showAudioPartHandler}
        className="show__wrapper"
      >
        <p>نمایش پنل مدیریت صوت</p>
        <img src={upArrow} alt="show-audio-part" className="show-img" />
      </li>
      <section ref={audioPartSection} className="nav__wrapper">
        <audio
          onEnded={audioFinishedHandler}
          ref={audioRef}
          autoPlay
          src={audioSrcSelect}
        ></audio>
        <nav>
          <li onClick={closeAudioPartHandler} className="close__wrapper">
            <img className="close" src={close} alt="text-setting" />
          </li>
          {isShowGhariPart && (
            <Gharies
              isShowGhariPart={isShowGhariPart}
              closeGhariHandler={closeGhariHandler}
            />
          )}
          {isShowTranslatorPart && (
            <Translators
              isShowTranslatorPart={isShowTranslatorPart}
              closeTranslatorHandler={closeTranslatorHandler}
            />
          )}
          {isShowTextSetting && (
            <TextSettings
              isShowTextSetting={isShowTextSetting}
              closeTextSettingHandler={closeTextSettingHandler}
            />
          )}

          <ul>
            <li
              className="menu-list"
              onClick={() => setIsShowTextSetting((prev: boolean) => !prev)}
            >
              <img className="text-icon" src={textIcon} alt="text-setting" />
            </li>
            <li
              className="menu-list"
              onClick={() => setIsShowTranslatorPart((prev: boolean) => !prev)}
            >
              <img
                className="menu-list-img"
                src={
                  translatorSelected === "fooladvand"
                    ? fooladvandImg
                    : makaremImg
                }
                alt="home"
              />
            </li>
            <li onClick={playPauseHandler} className="menu-list">
              <img
                className="playImg"
                src={isPauesed ? play : pause}
                alt="play"
              />
            </li>
            <li
              className="menu-list"
              onClick={() => setIsShowGhariPart((prev: boolean) => !prev)}
            >
              <img
                className="menu-list-img"
                src={
                  ghariSelected === "Abdullah_Basfar_32kbps" ? basfar : menshavi
                }
                alt="home"
              />
            </li>
            <Link to={"/Main"}>
              <li className="menu-list">
                <img className="menu-list-img" src={haram} alt="haram-home" />
              </li>
            </Link>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default AudioPart;
