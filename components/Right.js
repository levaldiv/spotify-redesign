import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import { ViewGridIcon } from "@heroicons/react/solid";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import RecentlyPlayed from "./RecentlyPlayed";

import React from "react";

function Right({ chooseTrack, spotifyApi }) {
  const { data: session } = useSession();
  const { accessToken } = session;
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

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
      </div>
    </section>
  );
}

export default Right;
