import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface settingInitialStateInitTypes {
  translator: string;
  fontFamily: string;
  fontSize: string;
}
const settingInitialState = {
  translator: "fooladvand",
  fontFamily: "iranSans",
  fontSize: "average",
};

const settingSlice = createSlice({
  name: "setting",
  initialState: settingInitialState,
  reducers: {
    translatorTextChangor(state, action: PayloadAction<string>) {
      state.translator = action.payload;
    },
    translateTextFontFamilyChangor(state, action: PayloadAction<string>) {
      state.fontFamily = action.payload;
    },
    translateTextFontSizeChangor(state, action: PayloadAction<string>) {
      state.fontSize = action.payload;
    },
  },
});

export const {
  translatorTextChangor,
  translateTextFontFamilyChangor,
  translateTextFontSizeChangor,
} = settingSlice.actions;

export default settingSlice.reducer;
