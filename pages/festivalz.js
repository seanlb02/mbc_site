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
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    //   return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={`${spotlightActive ? 'relative' : ''} scroll-smooth ${spotlightActive ? 'flex-none' : 'flex'} bg-transparent flex-col max-h-[100vh] overflow-y-scroll w-[100vw] cursor-crosshair font-mono no-scrollbar`}>
      {spotlightActive ? <></> : <Hero/>}
      {width > 700 ? <Navbar className="absolute top-0 z-40 bg-transparent" /> : <MobileNavbar />}
      

      {spotlightActive && width > 700 ? 
        <div className="absolute z-20 py-6 pl-10 flex">
          <heading onMouseOver={()=> setNameReel(true)} className="flex text-3xl lg:text-3xl ">Our Festivals</heading> 
          <div className="flex justify-center items-center pl-12 gap-4  animate-fadein ">
            {festivals.map((el)=> <div className="text-sm hover:text-slate-400">{el}</div>)}
          </div>
        </div>
        : 
      <heading className="text-3xl lg:text-5xl m-6 mb-0 lg:m-10">Our Festivals</heading>
      
      }

      {spotlightActive && width > 700 ? 
      <div className ="relative top-0 z-1 h-[100vh] border border-red-500">
          <img className=" z-5 top-0 h-[100vh]" src="/badfridayhero.jpg"></img>
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
