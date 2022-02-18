import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import { ViewGridIcon } from "@heroicons/react/solid";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import RecentlyPlayed from "./RecentlyPlayed";

function Right({ chooseTrack, spotifyApi }) {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  // Recently played tracks hook .....
  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getMyRecentlyPlayedTracks({ limit: 20 }).then((res) => {
      setRecentlyPlayed(
        res.body.items.map(({ track }) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.album.images[0].url,
          };
        })
      );
    });
  }, [accessToken]);

  return (
    <section className="space-y-8 p-4 pr-8">
      <div className="flex items-center justify-between space-x-2">
        
        {/* creating icons here */}
        <div className="flex h-12 items-center space-x-4 rounded-full border-2 border-[#262626] py-3 px-4">
          <HiOutlineShieldCheck className="text-xl text-[#CCCCCC]" />
          <MdOutlineSettings className="text-xl text-[#CCCCCC]" />
          <div>
            <BiBell className="text-xl text-[#CCCCCC]" />
          </div>
        </div>

        {/* creating profile dropdown */}
        <Dropdown />
      </div>

      {/* Recently played tracks */}
      <div className="space-y-4 rounded-xl border-2 border-[#262626] bg-[#0D0D0D] p-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-white">Recently Played</h4>
          <ViewGridIcon className="h-6 text-[#686868]" />
        </div>

        <div className="scrollbar-hide h-[250px] space-y-4 overflow-x-hidden overflow-y-scroll md:h-[400px]">
          {recentlyPlayed.map((track, index) => (
            <RecentlyPlayed
              key={index}
              track={track}
              chooseTrack={chooseTrack}
            />
          ))}
        </div>

        <button className="w-full rounded-2xl bg-[#1A1A1A] bg-opacity-80 py-3.5 px-4 text-[13px] font-bold text-[#CECECE] transition ease-out hover:bg-opacity-100">
          View All
        </button>
      </div>
    </section>
  );
}

export default Right;
