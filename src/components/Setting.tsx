import "./Setting.css";

import Gharies from "./Gharies";
import Translators from "./Translators";
import TextSettings from "./TextSettings";

const Setting = () => {
  return (
    <>
      <section className="search-wrapper rtl">
        <section className="setting__wrapper">
          <p className="setting-title">انتخاب ترجمه</p>

          <Translators />
          <div className="examole__translate">
            <p className="examole__translate-title">نمونه:</p>
            <p className="examole__translate-bio">
              و آنان كه بدانچه به سوى تو فرود آمده، و به آنچه پيش از تو نازل شده
              است، ايمان مى آورند؛ و آنانند كه به آخرت يقين دارند.
            </p>
          </div>

          <p className="setting-title">انتخاب قاری</p>

          <Gharies />
          <p className="setting-title">تنظیمات متون ترجمه</p>

          <TextSettings />
          <div className="examole__translate">
            <p className="examole__translate-title">نمونه:</p>
            <p className="examole__translate-bio">
              و آنان كه بدانچه به سوى تو فرود آمده، و به آنچه پيش از تو نازل شده
              است، ايمان مى آورند؛ و آنانند كه به آخرت يقين دارند.
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Setting;
