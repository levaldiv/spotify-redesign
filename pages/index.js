import Head from "next/head";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spotify Redesign</title>
        <link rel="icon" href="/spoticon.png" />
      </Head>

      {/* Dashboard */}
      <Dashboard />
    </div>
  );
}
