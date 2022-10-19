import "./QuranPages.css";
import { quranTranslate } from "../datas/quran-translate.fa.ansarian";
import { qurnaTranslateMakarem } from "../datas/quran-translate.fa.makarem";
import { memo } from "react";

interface QuranTraslateFarsiPropsTypes {
  ayehIndexSpliced: number;
  pageArr: number[];
}
const QuranTraslateFarsi = ({
  ayehIndexSpliced,
  pageArr,
}: QuranTraslateFarsiPropsTypes) => {
  const quranTextTranslatedSliced = quranTranslate.slice(
    pageArr[0],
    pageArr[1]
  );

  return <>{quranTextTranslatedSliced[ayehIndexSpliced]}</>;
};

export default memo(QuranTraslateFarsi);
