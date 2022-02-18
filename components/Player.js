import { useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../atoms/playerAtom";
import {
  BsFillPlayFill,
  BsFillSkipEndFill,
  BsFillSkipStartFill,
} from "react-icons/bs";
import { FiVolume2 } from "react-icons/fi";
import { RiPlayList2Fill, RiComputerLine } from "react-icons/ri";
import { MdOutlineSpeaker } from "react-icons/md";
import { BiShuffle } from "react-icons/bi";
import { IoRepeatOutline } from "react-icons/io5";
import { CgArrowsExpandRight } from "react-icons/cg";

function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  useEffect(() => {
    //   if it exists
    if (trackUri) {
      setPlay(true);
    }
  }, [trackUri]);

  //   if there is no access token
  if (!accessToken) return null;

  return <div>Player</div>;
}

export default Player;
