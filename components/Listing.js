import react from "react";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import { Tooltip, Button } from "@material-tailwind/react";

export default function Listing({ name, artist, label, logo, location, date }) {
  const images = [1, 2, 3, 4, 5];
  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    //   return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="flex mb-3 mt-5 flex-col h-[50vh] lg:h-[75vh]  lg:mx-10 mx-2 border border-black overflow-hidden">
      <section className="flex lg:h-20 h-12 border-b border-black">
        <div className="flex h-full pb-2 w-2/5 pl-3 font-bold items-end border-r text-xs lg:text-sm border-black">
          {name}
        </div>
        <div className="flex pb-2 cursor-pointer h-full w-2/5 pl-4 items-end text-xs lg:text-sm">
          {artist}
        </div>
        <div className="flex h-full lg:pb-1 w-1/5 items-end lg:text-sm text-xs pl-3 border-l border-black">
          <div className="flex flex-col gap-1 w-full text-xs lg:text-sm">
            {width > 700 ? (
              <div className="flex w-full gap-12">
                <div>
                  <div className="font-bold">Location</div>
                  <div className="font-bold">When</div>
                </div>
                <div>
                  <div>{location}</div>
                  <div>{date}</div>
                </div>
              </div>
            ) : (
              <div className="text-xs pb-2">Tickets</div>
            )}
          </div>
        </div>
      </section>

      <section id="image-reel" className={styles.itemContainer}>
        <div className={styles.imageBox}>
          <Image
            src={logo}
            width={500}
            height={500}
            className="flex h-1/2 w-1/2 "
          ></Image>
        </div>
        {images.map((el) => (
          <div className={styles.imageBox}>
            <Image
              src="/badfridaycrowd.jpg"
              width={1000}
              height={1000}
              className="h-full w-full"
            ></Image>
          </div>
        ))}
      </section>
    </main>
  );
}

const styles = {
  itemContainer:
    "flex flex-row h-[50vh] w-[100vw] lg:h-full overflow-auto no-scrollbar",
  imageBox:
    "flex flex-col min-w-96 lg:min-w-[30vw] items-center justify-center",
};
