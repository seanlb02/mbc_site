import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Listing from "@/components/Listing";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Reel from "@/components/Reel";
import { useState, useEffect } from "react";
import MobileNavbar from "@/components/MobileNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function Festivals() {
  const festivals = [
    "King St Carnival",
    "Bad Friday",
    "Beer, Footy n Food",
    "Country and Inner Western",
    "Off the Rails",
  ];
  const logos = [
    "/kingstreet.png",
    "/badfriday.png",
    "/beerfooty.png",
    "/countryinner.png",
  ];

  const [spotlightActive, setSpotlightActive] = useState(false)
  const [nameReel, setNameReel] = useState(false)
  const [width, setWidth] = useState(0);
  const [counter, setCounter] = useState(logos.length);
  const handleResize = () => setWidth(window.innerWidth);
const arr = ['badfridaycrowd.']

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    //   return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={`${spotlightActive ? 'relative' : ''} overflow-y-hidden scroll-smooth ${spotlightActive ? 'flex-none' : 'flex'} bg-transparent flex-col max-h-[100vh] h-[100vh] w-[100vw] cursor-crosshair font-mono no-scrollbar`}>
      {spotlightActive ? <></> : <Hero/>}
      {width > 700 ? <Navbar className="absolute top-0 z-30 bg-transparent" /> : <MobileNavbar />}
      

      {spotlightActive && width > 700 ? 
        <div className="absolute z-20 py-6 pl-10 flex">
          <heading onMouseOver={()=> setNameReel(true)} className="flex text-3xl lg:text-3xl animate-blurin">Our Festivals</heading> 
          <div id="contrastTextBlack" className="flex justify-center p-2  items-center ml-12 gap-4 bg-transparent animate-fadein ">
            {festivals.map((el)=> <div  className="flex z-40 py-1 text-xs  hover:text-slate-400">{el}</div>)}
          </div>
        </div>
        : 
      <heading className="text-3xl lg:text-5xl m-6 mb-0 lg:m-10 ">Our Festivals</heading>
      
      }

      {spotlightActive && width > 700 ? 
      <div className="flex top-0  h-[100vh]">
          <div className="absolute z-40 w-full top-0 animate-pullopen bg-white right-0 left-0"></div>
          <div className="absolute z-40 w-[40vw] h-[100vh]  bg-transparent top-0 flex flex-col justify-center text-white text-justify left-0"> 
          <div id="contrastText" className="mt-12 ml-10">olor nostrud sint eiusmod
              dolore ea. Irure eiusmod incididunt occaecat excepteur eiusmod ad
              voluptate cillum. Dolor nostrud sint eiusmod dolore ea. Irure
              eiusmod incididunt occaecat excepteur eiusmod ad voluptate cillum.</div>
          </div>
          <img className="absolute z-5 h-[100vh] top-0 " src="/badfridayhero.jpg"></img>
          <div className="flex flex-col z-6 bg-white absolute top-0 right-0 w-[38vw] h-[100vh]">
            <div className="relative h-1/2">
              {
              
              logos.map((el, i)=> 
                    <>
                        <div onClick={()=>setCounter(counter - 1)} className="z-40 text-2xl p-5 absolute bottom-0 left-5">&#10141;</div>
                        <Image onClick={()=>setCounter(counter - 1)} className={`z-40 absolute top-0 h-full bg-white ${counter > i ? "" : "hidden"}`} src={el} fit priority={true} height={1000} width={1000}></Image>
                        <div onClick={()=>setCounter(logos.length)} className="z-1 text-2xl p-5 absolute bottom-0 right-5">&#10227;</div>
                    </>
              )}
              
            </div>

            <div className="h-1/2">
            <video
                autoplay="autoplay"
                muted
                loop
                className=" z-1 h-full w-full flex flex-col"
              ><source src="/badbrains.mp4" type="video/mp4" />{" "}
        </video>
            </div>
          </div>
      </div>
      :
      <></>
      }

      {width > 700 && !spotlightActive ? 
      <div className={`flex flex-col z-40 ${spotlightActive ? 'absolute' : ''} right-0 left-0 top-36`}>
        {festivals.map((el)=> 
        <div
          onClick={()=> setSpotlightActive(true)}
          className={` flex border border-black mx-10 h-16 text-sm mb-4 ${spotlightActive ? 'bg-transparent' : 'bg-white'} hover:bg-green-50 cursor-pointer`}
        >
          <div className="flex border-r items-end pl-3 py-2 border-black w-2/5">
            {el} 
          </div>
          <div className="flex border-r items-end pl-3 py-2 border-black w-2/5">
            Press
          </div>
          <div className="flex flex-col justify-end pl-3 font-bold w-1/5">
            <div>Where</div>
            <div>When</div>
          </div>
        </div>)
        }
      </div>
      :
      <></>
      }
      
    </main>
  );
}

const styles = {
  pageContainer:""
};
