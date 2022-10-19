import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface audioInitTypes {
  audioSrc: string;
}
const audioInitial: audioInitTypes = {
  audioSrc: "",
};
const audioSlice = createSlice({
  name: "audioSlice",
  initialState: audioInitial,
  reducers: {
    playAudio(state, action: PayloadAction<string>) {
      state.audioSrc = action.payload;
    },
    changeGhari() {},
  },
});

export const { playAudio, changeGhari } = audioSlice.actions;

export default audioSlice.reducer;
