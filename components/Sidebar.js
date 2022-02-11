import Image from "next/image";
import React from "react";

function Sidebar() {
  return (
    <section className="fixed top-0 z-40 flex h-screen w-[90px] flex-col items-center space-y-8 bg-black p-4">
      <Image
        src="https://rb.gy/nw0evo"
        width={45}
        height={45}
        objectFit="contain"
      />
    </section>
  );
}

export default Sidebar;
