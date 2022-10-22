import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { QuranDataSura } from "../../../datas/quran-metadata";

interface audioInitTypes {
  ayehNumberNew: string;
  surahNumberNew: string;
  ghariName: string;

  playAudioPage: boolean;
  isPauesed: boolean;
  audioProgress: number;

  audioGenerator: () => string;
}

interface audioPlayActionTypes {
  ayehNumberNew: string;
  surahNumberNew: string;
}

const ayehFormatGenerator = (number: number) => {
  let result = "0";
  let numberLenght = number.toString().length;
  if (numberLenght === 3) {
    result = `${number}`;
  } else if (numberLenght === 2) {
    result = `0${number}`;
  } else if (numberLenght === 1) {
    result = `00${number}`;
  }
  return result;
};

const audioInitial: audioInitTypes = {
  playAudioPage: false,
  ayehNumberNew: "",
  surahNumberNew: "",
  ghariName: "Menshawi_16kbps",
  isPauesed: false,
  audioProgress: 0,

  audioGenerator() {
    return `http://www.everyayah.com/data/${this.ghariName}/${this.surahNumberNew}${this.ayehNumberNew}.mp3`;
  },
};
const audioSlice = createSlice({
  name: "audioSlice",
  initialState: audioInitial,
  reducers: {
    playAudio(state, action: PayloadAction<audioPlayActionTypes>) {
      if (
        +QuranDataSura[+action.payload.surahNumberNew - 1][0] ===
        +action.payload.ayehNumberNew
      ) {
        state.ayehNumberNew = "001";
        state.surahNumberNew = ayehFormatGenerator(
          +action.payload.surahNumberNew
        );
      } else {
        state.ayehNumberNew = ayehFormatGenerator(
          +action.payload.ayehNumberNew
        );
        state.surahNumberNew = ayehFormatGenerator(
          +action.payload.surahNumberNew
        );
      }
    },
    playNextAudio(state) {
      const surahNumberIndex = +state.surahNumberNew - 1;
      const totalAyehNumber =
        +QuranDataSura[surahNumberIndex][1] +
        +QuranDataSura[surahNumberIndex][0] -
        +QuranDataSura[surahNumberIndex][0];
      if (+state.ayehNumberNew < totalAyehNumber) {
        state.ayehNumberNew = ayehFormatGenerator(+state.ayehNumberNew + 1);
      } else if (+state.surahNumberNew + 1 !== 115) {
        state.ayehNumberNew = "001";
        state.surahNumberNew = ayehFormatGenerator(+state.surahNumberNew + 1);
      }
    },
    playAudioPage(state, action: PayloadAction<number>) {},
    pauseAudio(state, action: PayloadAction<boolean>) {
      state.isPauesed = action.payload;
    },
    audioProgressHandler(state, action: PayloadAction<number>) {
      state.audioProgress = action.payload;
    },
    ghariAudioChangeHandler(state, action: PayloadAction<string>) {
      state.ghariName = action.payload;
    },
  },
});

export const {
  playAudio,
  playNextAudio,
  playAudioPage,
  pauseAudio,
  audioProgressHandler,
  ghariAudioChangeHandler,
} = audioSlice.actions;

export default audioSlice.reducer;
