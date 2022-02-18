import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import SpotifyWebApi from "spotify-web-api-node";
import { playingTrackState } from "../atoms/playerAtom";
import Body from "./Body";
import Right from "./Right";
import Sidebar from "./Sidebar";

const spotifyApi = new SpotifyWebApi({
  // fetching users client id when they are signed in
  clientId: process.env.SPOTIFY_CLIENT_ID,
});

function Dashboard() {
  // updating the state globally (also avail globally)
  const { data: session } = useSession();
  const accessToken = session?.accessToken;
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    setShowPlayer(track);
  }, []);

  const chooseTrack = (track) => {
    setPlayingTrack(track);
  };

  return (
    <main className="flex min-h-screen min-w-max bg-black lg:pb-24">
      <Sidebar />
      {/* sending that id to the body */}
      <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      <Right spotifyApi={spotifyApi} chooseTrack={chooseTrack} />

      <div>
        
      </div>
    </main>
  );
}

export default Dashboard;
