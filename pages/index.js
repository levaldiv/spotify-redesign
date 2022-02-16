import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Dashboard from "../components/Dashboard";
import Loader from "../components/Loader";

export default function Home() {
  const router = useRouter();
  const { status, data: session } = useSession({
    // This ensures that no one can login without sigining in first
    onUnauthenticated() {
      router.push("/auth/signin");
    },
  });

  // console.log(session);

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <div>
      <Head>
        <title>Spotify Redesign</title>
        <link rel="icon" href="/spotifyicon.png" />
      </Head>

      {/* Dashboard */}
      <Dashboard />
    </div>
  );
}
