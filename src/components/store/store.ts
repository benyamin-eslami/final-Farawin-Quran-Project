import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import audioReducer from "./features/audio";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { audio: audioReducer },
});

type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const selectAudioSrc = (state: RootState) => state.audio.audioSrc;
