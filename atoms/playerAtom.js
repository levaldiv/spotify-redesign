import { atom } from "recoil";

// this provides access to the whole app
export const playState = atom({
  key: "playState",
  default: false,
});

export const playingTrackState = atom({
  key: "playingTrackState",
  default: "",
});
