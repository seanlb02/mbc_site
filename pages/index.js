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

  // const scrolly = () => setRearrange(false);
  const scrolly = () => null;


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
      <div className="absolute z-0 h-[50vh] lg:h-[100vh] w-[100vw] flex justify-center items-center align-center">
                <Image
                  priority
                  height={500}
                  width={1000}
                  src="/white_spin_logo.gif"
                ></Image>
              </div>
        {rearrange ? <video
          autoplay="autoplay"
          muted
          loop
          className="absolute z-1 h-[100vh] lg:h-[100vh] w-[100vw] flex flex-col"
        >
          
          {" "}
          <source src="/badbrains.mp4" type="video/mp4" />{" "}
        </video> : 
        <video
        autoplay="autoplay"
        muted
        loop
        className="absolute z-1 h-[100vh] lg:h-[172vh] w-[100vw] flex flex-col"
      >
        
        {" "}
        <source src="/badbrains.mp4" type="video/mp4" />{" "}
      </video>
        
        }

        {/* load spinning logo on render */}


       
        
        {width > 700 ? <div className="flex flex-col">{ rearrange ? <div onClick={()=> setRearrange(false)} className="fixed left-24 bottom-16 text-sm h-fit w-fit text-white z-50">Enter &#8962;</div> : <div onClick={()=> setRearrange(false)} className="fixed left-24 bottom-10 text-xl h-fit w-fit text-white z-50">&darr;&darr;&darr;</div>}</div> : <></>}
        {rearrange ? (
          <div className="flex overflow-hidden flex-col h-full absolute z-2">
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
                        {width > 1000 ? 
                    <div className="relative flex flex-col h-[110vh] w-fit overflow-x-hidden overflow-y-auto"> 
                    <div className=" flex z-35 h-[50vh] pb-10 lg:h-[100vh] max-w-[100vw] flex justify-center items-center">
                        <Image
                          className="flex  pb-12"
                          priority
                          height={500}
                          width={1000}
                          src="/white_spin_logo.gif"
                        >                   
                        </Image>
                    </div>
                    <div className="w-[100vw] h-fit flex-col flex items-center ">
                        <div className="flex flex-row border-l mb-4 gap-4 overflow-x-scroll border-r no-scrollbar w-[95vw] justify-start z-30 lg:h-fit hover:cursor-e-resize">
                          <Draggable disabled={true}><div className="flex animate-left1 z-50 text-white border max-h-[35vh] min-w-[25vw]"><div className="absolute top-0 text-right pt-1 pr-2 text-white h-16 cursor-move w-full">&#10021;</div><img src='/badfridaycrowd.jpg' height='300' width='1000'></img></div></Draggable>
                          <Draggable disabled={true}><div className="flex animate-left1 z-50 text-white border max-h-[35vh] min-w-[25vw]"><div className="absolute top-0 text-right pt-1 pr-2 text-white h-16 cursor-move w-full">&#10021;</div><img src='/badfridaycrowd.jpg' height='300' width='1000'></img></div></Draggable>
                          <Draggable disabled={true}><div className="flex animate-left1 z-50 text-white border max-h-[35vh] min-w-[25vw]"><div className="absolute top-0 text-right pt-1 pr-2 text-white h-16 cursor-move w-full">&#10021;</div><img src='/badfridaycrowd.jpg' height='300' width='1000'></img></div></Draggable>
                          <Draggable disabled={true}><div className="flex animate-left1 z-50 text-white border max-h-[35vh] min-w-[25vw]"><div className="absolute top-0 text-right pt-1 pr-2 text-white h-16 cursor-move w-full">&#10021;</div><img src='/badfridaycrowd.jpg' height='300' width='1000'></img></div></Draggable>
                          <Draggable disabled={true}><div className="flex animate-left1 z-50 text-white border max-h-[35vh] min-w-[25vw]"><div className="absolute top-0 text-right pt-1 pr-2 text-white h-16 cursor-move w-full">&#10021;</div><img src='/badfridaycrowd.jpg' height='300' width='1000'></img></div></Draggable>
                          <Draggable disabled={true}><div className="flex animate-left1 z-50 text-white border max-h-[35vh] min-w-[25vw]"><div className="absolute top-0 text-right pt-1 pr-2 text-white h-16 cursor-move w-full">&#10021;</div><img src='/badfridaycrowd.jpg' height='300' width='1000'></img></div></Draggable>
                        </div>
                        <div className="flex flex-row border-l mb-4 gap-4 overflow-x-scroll border-r no-scrollbar w-[95vw] justify-start z-30 lg:h-fit hover:cursor-e-resize">
                          <Draggable disabled={true}><div className="flex animate-rightslow z-50 text-white border max-h-[35vh] min-w-[25vw]"><div className="absolute top-0 text-right pt-1 pr-2 text-white h-16 cursor-move w-full">&#10021;</div><img src='/badfridaycrowd.jpg' height='300' width='1000'></img></div></Draggable>
                          <Draggable disabled={true}><div className="flex animate-rightslow z-50 text-white border max-h-[35vh] min-w-[25vw]"><div className="absolute top-0 text-right pt-1 pr-2 text-white h-16 cursor-move w-full">&#10021;</div><img src='/badfridaycrowd.jpg' height='300' width='1000'></img></div></Draggable>
                          <Draggable disabled={true}><div className="flex animate-rightslow z-50 text-white border max-h-[35vh] min-w-[25vw]"><div className="absolute top-0 text-right pt-1 pr-2 text-white h-16 cursor-move w-full">&#10021;</div><img src='/badfridaycrowd.jpg' height='300' width='1000'></img></div></Draggable>
                          <Draggable disabled={true}><div className="flex animate-rightslow z-50 text-white border max-h-[35vh] min-w-[25vw]"><div className="absolute top-0 text-right pt-1 pr-2 text-white h-16 cursor-move w-full">&#10021;</div><img src='/badfridaycrowd.jpg' height='300' width='1000'></img></div></Draggable>
                          <Draggable disabled={true}><div className="flex animate-rightslow z-50 text-white border max-h-[35vh] min-w-[25vw]"><div className="absolute top-0 text-right pt-1 pr-2 text-white h-16 cursor-move w-full">&#10021;</div><img src='/badfridaycrowd.jpg' height='300' width='1000'></img></div></Draggable>
                          <Draggable disabled={true}><div className="flex animate-rightslow z-50 text-white border max-h-[35vh] min-w-[25vw]"><div className="absolute top-0 text-right pt-1 pr-2 text-white h-16 cursor-move w-full">&#10021;</div><img src='/badfridaycrowd.jpg' height='300' width='1000'></img></div></Draggable>
                        </div>
                        <div className="flex flex-row border-l mb-4 gap-4 overflow-x-scroll border-r no-scrollbar w-[95vw] justify-start z-30 lg:h-fit hover:cursor-e-resize">
                          <Draggable disabled={true}><div className="flex animate-left z-50 text-white border max-h-[35vh] min-w-[25vw]"><div className="absolute top-0 text-right pt-1 pr-2 text-white h-16 cursor-move w-full">&#10021;</div><img src='/badfridaycrowd.jpg' height='300' width='1000'></img></div></Draggable>
                          <Draggable disabled={true}><div className="flex animate-left z-50 text-white border max-h-[35vh] min-w-[25vw]"><div className="absolute top-0 text-right pt-1 pr-2 text-white h-16 cursor-move w-full">&#10021;</div><img src='/badfridaycrowd.jpg' height='300' width='1000'></img></div></Draggable>
                          <Draggable disabled={true}><div className="flex animate-left z-50 text-white border max-h-[35vh] min-w-[25vw]"><div className="absolute top-0 text-right pt-1 pr-2 text-white h-16 cursor-move w-full">&#10021;</div><img src='/badfridaycrowd.jpg' height='300' width='1000'></img></div></Draggable>
                          <Draggable disabled={true}><div className="flex animate-left z-50 text-white border max-h-[35vh] min-w-[25vw]"><div className="absolute top-0 text-right pt-1 pr-2 text-white h-16 cursor-move w-full">&#10021;</div><img src='/badfridaycrowd.jpg' height='300' width='1000'></img></div></Draggable>
                          <Draggable disabled={true}><div className="flex animate-left z-50 text-white border max-h-[35vh] min-w-[25vw]"><div className="absolute top-0 text-right pt-1 pr-2 text-white h-16 cursor-move w-full">&#10021;</div><img src='/badfridaycrowd.jpg' height='300' width='1000'></img></div></Draggable>
                          <Draggable disabled={true}><div className="flex animate-left z-50 text-white border max-h-[35vh] min-w-[25vw]"><div className="absolute top-0 text-right pt-1 pr-2 text-white h-16 cursor-move w-full">&#10021;</div><img src='/badfridaycrowd.jpg' height='300' width='1000'></img></div></Draggable>
                        </div>

                        <div className="border border-white bg-transparent text-white mt-36 word-wrap py-4 w-[30vw] text-center">The Music ad Booze co. operates on <br></br> [Aknowledgement of country here?]<br></br>sdfds</div>







                    </div>
                    
                    
                    
                    </div>
      :
          <></>}

              <div className="flex absolute z-50 bottom-0">
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
