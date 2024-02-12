import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Reel from "@/components/Reel";
import MobileNavbar from "@/components/MobileNavbar";
import { useRouter } from "next/router";
import ReelMobile from "@/components/ReelMobile";
import NavbarFixed from "@/components/NavbarFixed";

const inter = Inter({ subsets: ["latin"] });

export default function Shows() {
  const [rearrange, setRearrange] = useState(false);

  const scrolly = () => setRearrange(false);

  useEffect(() => {
    // if (typeof window !== "undefined") {
    //   window.addEventListener('scroll', scrolly)
    // }
  }, []);

  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const router = useRouter();

  useEffect(() => {
    // logic to run when id value updates
  }, [router.query.slug]);

  return (
    <main className={styles.pageContainer}>
      <div className="relative min-h-fit w-[100vw] ">
        {width < 700 ? (
          <></>
        ) : (<img className="absolute -top-5 bottom-0 z-2 h-[135vh] w-[100vw] flex flex-col" src='/badfridayhero.jpg'></img>
          // <video
          //   autoplay="autoplay"
          //   muted
          //   loop
          //   className="absolute top-0 z-2 h-[125vh] w-[100vw] flex flex-col"
          // >
          //   {" "}
          //   <source src="/badbrains.mp4" type="video/mp4" />{" "}
          // </video>
        )}

        {rearrange ? (
          <div className="flex flex-col absolute z-2">
            <Hero className="z-0 w-full " />
            <NavbarFixed className="z-50 bg-transparent" />
            <Reel onClick={() => setRearrange(false)} />
          </div>
        ) : (
          <div className=" w-full h-full  z-2 ">
            <div className="relative w-full h-[100vh]">
              {width < 700 ? <MobileNavbar /> : <NavbarFixed />}
              {/* <Navbar className="absolute z-50 bg-transparent"/> */}
              <div className="flex flex-col mb-10">
                <Reel />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

const styles = {
  pageContainer: " max-h-full w-[100vw] bg-white cursor-crosshair font-mono",
};
