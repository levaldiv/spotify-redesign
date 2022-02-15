import { getProviders, signIn, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";

function Signin({ providers }) {
  const { data: session } = useSession();
  return (
    <div className="flex h-screen flex-col items-center space-y-8 bg-black pt-40">
      <Head>
        <title>Spotify - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src="https://rb.gy/y9mwtb"
        height={250}
        width={600}
        objectFit="contain"
        className="animate-pulse"
      />

      {/* Using it as an array, passing all my providers, map through the providers, and get my single provider (spotify)
       * Using an implicit return to return a div without saying "return" */}
      {Object.values(providers).map((provider) => (
        // Key has to be unique (need a key everytime i map)
        <div key={provider.name}>
          <button
            className="rounded-full border border-transparent bg-[#1db954] py-4 px-6 text-xs font-bold uppercase tracking-wider text-white transition duration-300 ease-out hover:scale-105 hover:bg-[#0db146] md:text-base"
            onClick={() => signIn(provider.id)}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Signin;

// fetching providers
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
