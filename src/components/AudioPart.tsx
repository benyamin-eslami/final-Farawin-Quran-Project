import { Link } from "react-router-dom";
import textIcon from "../assets/img/letter-t-pngrepo-com.png";
import play from "../assets/img/play-img.png";
import pause from "../assets/img/pause-img.png";
import haram from "../assets/img/haram2.7b1ffc7.png";
import ghari from "../assets/img/translator-makarem.17a2064.png";
import "./audioPart.css";
import Gharies from "./Gharies";
import { useSelector } from "react-redux";
import {
  selectAudioProgress,
  selectAudioSrc,
  useAppDispatch,
} from "./store/store";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import {
  audioProgressHandler,
  pauseAudio,
  playNextAudio,
} from "./store/features/audio";
import { selectIsIsPauesed } from "./store/store";

const AudioPart = () => {
  const audioSrcSelect = useSelector(selectAudioSrc);
  const isPauesed = useSelector(selectIsIsPauesed);
  const audioProgressPercentage = useSelector(selectAudioProgress);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const dispatch = useAppDispatch();
  const audioRef = useRef<HTMLAudioElement>(null);

  console.log(isPauesed);

  isPauesed && audioRef.current?.pause();

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

  dispatch(
    audioProgressHandler(
      ((audioRef.current?.currentTime ? audioRef.current!.currentTime : 0) /
        (audioRef.current?.duration ? audioRef.current!.duration : 1)) *
        100
    )
  );

  return (
    <section className="nav__wrapper">
      <audio
        onEnded={audioFinishedHandler}
        ref={audioRef}
        autoPlay
        src={audioSrcSelect}
      ></audio>

      <nav>
        <Gharies />

        <ul>
          <li className="menu-list">
            <img className="text-icon" src={textIcon} alt="text-setting" />
          </li>
          <li className="menu-list">
            <img className="menu-list-img" src={ghari} alt="home" />
          </li>
          <li onClick={playPauseHandler} className="menu-list">
            <img
              className="playImg"
              src={isPauesed ? play : pause}
              alt="play"
            />
          </li>
          <li className="menu-list">
            <img className="menu-list-img" src={ghari} alt="home" />
          </li>
          <Link to={"/Main"}>
            <li className="menu-list">
              <img className="menu-list-img" src={haram} alt="haram-home" />
            </li>
          </Link>
        </ul>
      </nav>
    </section>
  );
};

export default AudioPart;
