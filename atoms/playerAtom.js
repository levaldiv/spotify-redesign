import { atom } from "recoil";

// this provides access to the whole app
// if the song is playing or not
export const playState = atom({
  key: "playState",
  default: false,
});

// which track is currently playing
export const playingTrackState = atom({
  key: "playingTrackState",
  default: "",
});
