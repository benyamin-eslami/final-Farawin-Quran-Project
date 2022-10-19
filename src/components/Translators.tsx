import fooladvandImg from "../assets/img/translator-fooladvand.0c7065d.png";
import makaremImg from "../assets/img/translator-makarem.17a2064.png";
const Translators = () => {
  return (
    <div className="translate__sec">
      <label className="translate-label" htmlFor="makarem">
        <input name="translate" id="makarem" type="radio" />
        <div className="translate-info__sec">
          <p>فولادوند</p>
          <img src={fooladvandImg} alt="fooladvand" />
        </div>
      </label>
      <label className="translate-label" htmlFor="fooladvand">
        <input name="translate" id="fooladvand" type="radio" />
        <div className="translate-info__sec">
          <p>مکارم شیرازی</p>
          <img src={makaremImg} alt="makarem" />
        </div>
      </label>
    </div>
  );
};

export default Translators;
