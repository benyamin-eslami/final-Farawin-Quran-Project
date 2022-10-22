import { ChangeEvent, useEffect, useState } from "react";
import makaremImg from "../assets/img/translator-makarem.17a2064.png";
import styles from "./Gharies.module.css";
import { ghariAudioChangeHandler } from "./store/features/audio";
import { useAppDispatch } from "./store/store";

const Gharies = () => {
  const [ghariName, setGhariName] = useState<any>(
    localStorage.getItem("ghari")
      ? localStorage.getItem("ghari")
      : "Menshawi_16kbps"
  );

  useEffect(() => {
    dispatch(ghariAudioChangeHandler(ghariName));
  }, []);
  const dispatch = useAppDispatch();
  const ghariChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setGhariName(event.target.value);
      localStorage.setItem("ghari", event.target.value);
      dispatch(ghariAudioChangeHandler(event.target.value));
    }
  };

  return (
    <div className={styles["translate__sec"]}>
      <label className={styles["translate-label"]} htmlFor="menshavi">
        <input
          onChange={ghariChangeHandler}
          name="ghari"
          id="Menshawi"
          type="radio"
          value="Menshawi_16kbps"
          checked={ghariName === "Menshawi_16kbps"}
        />
        <div className={styles["translate-info__sec"]}>
          <p>منشاوی</p>
          <img src={makaremImg} alt="fooladvand" />
        </div>
      </label>
      <label className={styles["translate-label"]} htmlFor="khalilolhosra">
        <input
          onChange={ghariChangeHandler}
          name="ghari"
          id="Abdullah_Basfar"
          type="radio"
          value="Husary_64kbps"
          checked={ghariName === "Husary_64kbps"}
        />
        <div className={styles["translate-info__sec"]}>
          <p>خلیل الحصری</p>
          <img src={makaremImg} alt="makarem" />
        </div>
      </label>
    </div>
  );
};

export default Gharies;
