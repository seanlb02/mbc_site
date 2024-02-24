import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Navbar from "@/components/WNav";
import Listing from "@/components/Listing";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Reel from "@/components/Reel";
import { useState, useEffect } from "react";
import MobileNavbar from "@/components/MobileNavbar";
import FestivalsMobile from "@/components/FestivalsMobile";
import FestivalsDesktop from "@/components/FestivalsDesktop";

const inter = Inter({ subsets: ["latin"] });

export default function Festivals() {


  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    //   return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={styles.pageContainer}>
      {width < 700 ? <FestivalsMobile/>
      :
      <FestivalsDesktop/>}
    </main>
  );
}

const styles = {
  pageContainer:
    "scroll-smooth flex flex-col h-fit w-[100vw] cursor-crosshair font-mono no-scrollbar",
};
