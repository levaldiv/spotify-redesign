import React from "react";
import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../atoms/playerAtom";

function RecentlyPlayed({ track, chooseTrack }) {
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  return (
    <div>
      <img
        src={track.albumUrl}
        alt=""
        className="h-[52px] w-[52px] rounded-full "
      />
    </div>
  );
}

export default RecentlyPlayed;
