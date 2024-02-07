import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Navbar from "@/components/WNav";
import Listing from "@/components/Listing";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Reel from "@/components/Reel";
import Router from "next/router";
import Testimonial from "@/components/Testimonial";
import { useState, useEffect } from "react";
import MobileNavbar from "@/components/MobileNavbar";
import Draggable from "react-draggable";

const inter = Inter({ subsets: ["latin"] });

export default function Events() {
  const listings = [1, 2, 3, 4, 5];

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
      {width > 700 ? <Navbar className="bg-white" /> : <MobileNavbar />}
      
      <div className=" lg:mx-10 w-fit h-git lg:mt-10">
        <div className="h-fit w-fit flex-col">
          <heading className="flex text-5xl m-10 lg:m-0 pb-6 mb-5">
            Booze, Glorious Booze
          </heading>
          
        </div> 
        <div className="lg:flex lg:flex-row flex flex-col items-center lg:mt-5 mx-5 lg:mx-0 ">
         {width > 700 ? <div className="relative">
                <Draggable>
                  <div className="absolute h-fit w-fit">
                  <div className=" absolute -top-6 right-0 pr-2 h-6 pt-1 z-20 bg-white text-black items-right h-36 cursor-move w-full align-right text-xs text-right">
                  &#10021;  &#10141;
                  </div>
                  <Image
                            priority={true}
                            loading="eager"
                            className="z-1 flex mb-5  lg:h-[60vh] lg:max-w-[60vw] xl:h-[55vh] xl:w-[40vw] lg:mb-0 lg:ml-0"
                            src="/badfridaycrowd2.jpg"
                            height={600}
                            width={500}
                  >

                  </Image>
                  </div>
                </Draggable>
                <Draggable>
                  <div className="relative h-fit w-fit">
                  <div className=" absolute -top-6 right-0 pr-2 h-6 pt-1 z-20 bg-whitetext-black items-right h-36 cursor-move w-full align-right text-xs text-right">
                  &#10021;  &#10141;
                  </div>
                  <Image
                            priority={true}
                            loading="eager"
                            className="z-1 flex mb-5  lg:h-[60vh] xl:h-[55vh] lg:max-w-[60vw] xl:w-[40vw]  lg:mb-0 lg:ml-0"
                            src="/badfridaycrowd.jpg"
                            height={600}
                            width={600}
                  >

                  </Image>
                  </div>
                </Draggable>

          </div>
: <></>}
          {width > 700 ? 
          <div id="contrastText" className="lg:text-2xl z-30 text-black flex flex-col pl-5 flex pb-0 bg-transparent h-full mt-auto"
          >
           
          MBC are experts in all things booze! Served with or without music. We understand what it takes to get
          drinks into peoples hands at events. This means your patrons spend less
          time in lines and more time enjoying your event! We understand it
          because we live it. We work with an array of businesses from 
          </div> : <></>}
        </div>
        <div  className="lg:m-2  ml-10 mr-7 lg:ml-0 text-l lg:text-2xl text-left">
            {width < 700 ? <div  className="lg:text-2xl z-30 text-black flex flex-col p-0 lg:pl-5 flex pb-0 bg-transparent h-full mt-auto"
          >
           
          MBC are experts in all things booze! Served with or without music. We understand what it takes to get
          drinks into peoples hands at events. This means your patrons spend less
          time in lines and more time enjoying your event! We work with an array of businesses from 
          </div> : <></>}
         small bespoke events to large scale outdoor festivals not to mention our own
          events! We work with a number of clients across Australia in a variety of ways from festival
        programming to hospitality solutions.<u
            className="pl-1 hover:text-slate-500 cursor-pointer"
            onClick={() => Router.push("/contact")}
          ><br></br>
            Get in touch
          </u> 
          
        </div>
      </div>

      <heading className="lg:text-5xl text-4xl lg:m-10 m-10 text-left mr-auto mb-6 lg:mb-10">
        Our Friends
      </heading>
      { width < 700 ? <div className="lg:m-12 ml-10 mr-7 mb-10 lg:text-2xl">
      <></>
      </div> : <></>}
      <div className="flex w-full h-[50vh] mr-10 justify-center mb-24">
        <Image
          src="/mates.png"
          priority={true}
          loading="eager"
          height={1000}
          width={1000}
          className="lg:h-full lg:w-2/4 w-3/4 h-[20vh] lg:mb-24"
        ></Image>
      </div>
      <div className="flex flex-col  items-center lg:flex lg:flex-row">
        <Testimonial
          image="/paulstix.png"
          name="Paul Stix"
          text="hey hey testimonial goes here"
        />
        <Testimonial
          image="/stumccarthy.png"
          name="Stu Mccarthey"
          text="hey hey testimonial goes here"
        />
        <Testimonial
          image="/katdopper.png"
          name="Kat Dopper"
          text="hey hey testimonial goes here"
        />
      </div>
      <Hero />
    </main>
  );
}

const styles = {
  pageContainer:
    "flex flex-col overflow-x-hidden h-[100vh] max-w-[100vw] cursor-crosshair font-mono",
};
