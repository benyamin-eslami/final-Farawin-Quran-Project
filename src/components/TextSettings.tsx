const TextSettings = () => {
  return (
    <div className="translate__sec translate__text-setting">
      <p className="translate__option-title">اندازه متن:</p>
      <div className="translate-size">
        <label className="translate-label" htmlFor="big">
          بزرگ
          <input name="translate-size" id="big" type="radio" />
        </label>
        <label className="translate-label" htmlFor="average">
          متوسط
          <input name="translate-size" id="average" type="radio" />
        </label>
        <label className="translate-label" htmlFor="small">
          کوچک
          <input name="translate-size" id="small" type="radio" />
        </label>
      </div>
      <p className="translate__option-title">فونت:</p>
      <div className="translate-size">
        <label className="translate-label" htmlFor="vazir">
          وزیر
          <input name="translate-font" id="vazir" type="radio" />
        </label>
        <label className="translate-label" htmlFor="yekan">
          یکان
          <input name="translate-font" id="yekan" type="radio" />
        </label>
      </div>
    </div>
  );
};

export default TextSettings;
