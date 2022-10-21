import { configureStore } from "@reduxjs/toolkit";
import audioReducer from "./features/audio";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { audio: audioReducer },
});

type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const selectAudioSrc = (state: RootState) =>
  state.audio.audioGenerator();
export const selectIsPlayAudioPage = (state: RootState) =>
  state.audio.playAudioPage;
export const selectIsIsPauesed = (state: RootState) => state.audio.isPauesed;
export const selectAudioProgress = (state: RootState) =>
  state.audio.audioProgress;
