import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import MobileNavbar from "@/components/MobileNavbar";
import MenuButton from "@/components/MenuButton";
import DraggableImg from "@/components/DraggableImg";
import Draggable from "react-draggable";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [rearrange, setRearrange] = useState(true);
  const [fade, setFade] = useState(true);

  const scrolly = () => setRearrange(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrolly);
    }
  }, []);

  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    setFade(fade);
    handleResize();
    window.addEventListener("resize", handleResize);
    //   return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fade]);

  return (
    <main className={styles.pageContainer}>
      <div className="relative h-[100vh] w-[100vw] ">
        
        <video
          autoplay="autoplay"
          muted
          loop
          className="absolute z-0 h-[100vh] lg:h-[172vh] w-[100vw] flex flex-col"
        >
          
          {" "}
          <source src="/badbrains.mp4" type="video/mp4" />{" "}
        </video>
       
          {width > 1000 ? <div className="flex absolute gap-4 justify-center items-end pb-28 z-48 lg:h-[150vh] w-[100vw] ">
          <Draggable><div className="flex z-50 text-white border max-h-[35vh] max-w-[25vw]"><div className="absolute top-0 text-right pt-1 pr-2 text-white h-16 cursor-move w-full">&#10021;</div><img src='/badfridaycrowd.jpg' height='300' width='1000'></img></div></Draggable>
          <Draggable><div className="flex z-50 text-white border max-h-[35vh] max-w-[25vw]"><div className="absolute top-0 text-right pt-1 pr-2 text-white h-16 cursor-move w-full">&#10021;</div><img src='/badfridaycrowd.jpg' height='300' width='1000'></img></div></Draggable>
          <Draggable><div className="flex z-50 text-white border max-h-[35vh] max-w-[25vw]"><div className="absolute top-0 text-right pt-1 pr-2 text-white h-16 cursor-move w-full">&#10021;</div><img src='/badfridaycrowd.jpg' height='300' width='1000'></img></div></Draggable>

          
          </div>
          :
          <></>}
        
        {width > 700 ? <div className="fixed left-24 bottom-10 text-xl h-fit w-fit text-white z-25">&darr;&darr;&darr;</div> : <></>}
        {rearrange ? (
          <div className="flex flex-col h-full absolute z-2">
            <Hero className=" " />
            {width > 700 ? (
              <Navbar className="absolute z-10 bg-transparent" />
            ) : (
              <MenuButton />
            )}
            {width < 700 ? (
              <div className="absolute z-0 h-[70vh] lg:h-[100vh] w-[100vw] flex justify-center items-center align-center">
                <img
                  
                  height={1000}
                  width={2000}
                  src="/white_spin_logo.gif"
                ></img>
              </div>
            ) : (
              <></>
            )}
            {width < 700 ? (
              <div
                id="cube"
                className="flex flex-row max-h-42  bg-white z-40 bottom-36 mb-10 left-0 right-0 text-center absolute mb-2 mx-10 lg:mt-12 pb-5 pt-1 px-2 border border-black text-center text-xs"
              >
                {fade ? (
                  <div
                    className={`flex flex-col ${fade ? "animate-fadein" : "animate-fadeout"} flex-auto  overflow-x-scroll no-scrollbar`}
                  >
                    <div
                      onClick={() => setFade(!fade)}
                      className="flex p-1 flex-col text-right items-right w-full  text-sm"
                    >
                      &#10141;
                    </div>
                    Aknowledgement of country text goes here
                  </div>
                ) : (
                  <div
                    className={`flex flex-col animate-fadein flex-auto  overflow-x-scroll no-scrollbar`}
                  >
                    <div
                      onClick={() => setFade(!fade)}
                      className="flex p-1 flex-col text-right items-right w-full  text-sm"
                    >
                      &#10141;
                    </div>
                    Bio/services goes here
                  </div>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div className="absolute w-full h-[100vh] lg:h-[150vh]  z-2 ">
            <div className="relative w-full h-[100vh] lg:h-[170vh]">
              {width > 700 ? (
                <Navbar className="absolute z-50 bg-transparent" />
              ) : (
                <MenuButton />
              )}
              <div className="absolute z-0 h-[50vh] lg:h-[100vh] w-[100vw] flex justify-center items-center align-center">
                <Image
                  priority
                  height={500}
                  width={1000}
                  src="/white_spin_logo.gif"
                ></Image>
              </div>
              {width < 700 ? (
                <div className="flex flex-row max-h-36 min-w-  bg-white z-40 bottom-16 left-0 right-0 text-center absolute mb-2 m-10 lg:mt-12 py-8 px-2 border border-black text-center text-xs">
                  <div className="flex animate-fadein hidden text-white flex-auto w-72 max-h-36">
                    <div>&#10141;</div>
                    Aknowledgement of country text here maybe or
                    bio?Aknowledgement of country text here maybe or
                    bio?Aknowledgement of country text here maybe or bio?
                  </div>
                </div>
              ) : (
                <></>
              )}
              <div className="absolute bottom-0">
                <Hero className=" " />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

const styles = {
  pageContainer: " h-fit w-[100vw] cursor-crosshair font-mono",
};
