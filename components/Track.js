import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../atoms/playerAtom";
import { ImHeadphones } from "react-icons/im";

function Track({ track, chooseTrack }) {
  return (
    <div className="group flex cursor-default items-center justify-between space-x-20 rounded-lg py-2 px-4 transition ease-out hover:bg-white/10">
      <div className="flex items-center">
        <img
          src={track.albumUrl}
          alt=""
          className="mr-3 h-12 rounded-xl object-cover"
        />

        <div>
          <h4 className="w-[450px] truncate text-sm font-semibold text-white">
            {track.title}
          </h4>
          <p className="text-[13px] font-semibold text-[rgb(179,179,179)] group-hover:text-white">
            {track.artist}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-2.5 md:ml-auto">
        <div className="flex space-x-1 text-sm font-semibold text-white">
          <ImHeadphones className="text-lg" />
          <h4 className="font-sans">{track.popularity}</h4>
        </div>
      </div>
    </div>
  );
}

export default Track;
