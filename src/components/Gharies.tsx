import makaremImg from "../assets/img/translator-makarem.17a2064.png";
import styles from "./Gharies.module.css";

const Gharies = () => {
  return (
    <div className={styles["translate__sec"]}>
      <label className={styles["translate-label"]} htmlFor="menshavi">
        <input name="ghari" id="menshavi" type="radio" />
        <div className={styles["translate-info__sec"]}>
          <p>منشاوی</p>
          <img src={makaremImg} alt="fooladvand" />
        </div>
      </label>
      <label className={styles["translate-label"]} htmlFor="khalilolhosra">
        <input name="ghari" id="khalilolhosra" type="radio" />
        <div className={styles["translate-info__sec"]}>
          <p>خلیل احصری</p>
          <img src={makaremImg} alt="makarem" />
        </div>
      </label>
    </div>
  );
};

export default Gharies;
