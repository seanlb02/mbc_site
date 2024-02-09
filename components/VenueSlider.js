import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ven from "@/public/venueinfo";
import Algo from "@/components/Algo";
import Map from "@/components/Map";

// html strings
import bootleggers from "@/public/html/bootleggers";
import thegreatclub from "@/public/html/thegreatclub";
import waywards from "@/public/html/waywards";
import chippo from "@/public/html/thechippo";
import Draggable from "react-draggable";

export default function VenueSlider() {
  // Set up window width listener for conditional mobile rendering

  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    //   return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const venues = [
    "The Chippo",
    "The Great Club",
    "The House of Music and Booze",
    "The Vic on the Park",
    "The Royal",
    "Waywards",
  ];
  const [venueSpotlight, setVenueSpotlight] = useState(
    "We pair music with venues like no one else.",
  );
  const [dropNavShow, setDropNavShow] = useState(false);

  const selectVenue = function (venue) {
    setDropNavShow(false);
    setVenueSpotlight(venue);
  };

  return (
    <div className="h-[100vh] no-scrollbar">
      {width < 700 ? (
        <div className="font-mono no-scrollbar flex bg-white md:px-0 mg:mx-0 z-20 w-[100vw] h-full lg:h-full mr-10 pt-5  gap-5 flex-col p-5 lg:p-12">
          <div className="text-sm" onClick={() => setDropNavShow(!dropNavShow)}>
            [Select venue]
          </div>
          {dropNavShow ? (
            venues.map((el) => (
              <div
                className="text-sm hover:text-slate-500"
                onClick={() => selectVenue(el)}
              >
                {el}
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
      <div className="flex h-fit w-[100vw] z-0 font-mono">
        <div className="flex flex-col cursor-s-resize  overflow-y-scroll no-scrollbar mx-5 bg-white lg:max-h-[100vh] h-fit lg:w-3/4 w-full z-0 lg:ml-10 lg:animate-blurin items-center">
          <div className="flex flex-col h-[fit] bg-white  lg:ml-5 lg:mr-5 m-0 z-0 ">
            <div className="flex text-2xl lg:text-5xl h-fit w-full ml-0 lg:ml-5 lg:mt-10 md:mt-10 md:text-3xl">
              {venueSpotlight}
            </div>
            {venueSpotlight == "We pair music with venues like no one else." ? (
              <div className="flex h-[30vh] w-full justify-center items-center">
                <img
                 
                  height={500}
                  width={1000}
                  src="/white_spin_logo.gif"
                ></img>
              </div>
            ) : (
              <div className="flex-col w-full lg:flex lg:flex-row mt-5 lg:mt-0 items-center lg:align-center lg:mb-10 lg:mt-10 ">
                <div className="fixed left-24 bottom-5 text-xl h-fit w-fit text-black z-25">&darr;&darr;&darr;</div>
                <div className="flex lg:ml-3 flex-end mt-auto lg:h-[50vh] h-[35vh]  lg:w-1/2 w-full">
                  <Map
                    latitude={-33.89408834621491}
                    longitude={151.17954556766304}
                  />
                </div>

                {width > 1300 ? (
                 
                    <img
                      
                      className="flex flex-start lg:ml-auto lg:h-4/5 lg:w-2/5 w-full mb-5 mt-5 lg:m-10"
                      src={ven.images[venueSpotlight]}
                      height={300}
                      width={600}
                    ></img>
                
                ) : (
                  <Image
                    priority={true}
                    loading="eager"
                    className="flex flex-start lg:ml-auto lg:h-4/5 lg:w-2/5 w-full mb-5 mt-5 lg:m-10"
                    src={ven.images[venueSpotlight]}
                    height={300}
                    width={600}
                  ></Image>
                )}
              </div>
            )}
            <div className="flex text-sm lg:text-lg mb-10 lg:mx-5">
              This is a paragraph about the venue, Dolor nostrud sint eiusmod
              dolore ea. Irure eiusmod incididunt occaecat excepteur eiusmod ad
              voluptate cillum. Dolor nostrud sint eiusmod dolore ea. Irure
              eiusmod incididunt occaecat excepteur eiusmod ad voluptate cillum.
            </div>
          </div>

          {/* render venue shows - Very hacky: no time to init Algolia search in nextjs so used oztix raw html which would re-render reactively... */}
          {venueSpotlight == "The Great Club" ? (
            <div
              className="min-h-[80vh] max-h-[80vh] p-2 no-scrollbar mb-5 w-full lg:w-3/5 border-2 border-black overflow-y-scroll"
              dangerouslySetInnerHTML={{ __html: thegreatclub }}
            ></div>
          ) : (
            <div
              className="hidden w-full lg:w-3/5 border-2 border-black overflow-y-scroll"
              dangerouslySetInnerHTML={{ __html: thegreatclub }}
            ></div>
          )}
          {venueSpotlight == "The Chippo" ? (
            <div
              className="min-h-[80vh] w-full lg:w-3/5 no-scrollbar mb-5 border-2 border-black overflow-y-scroll"
              dangerouslySetInnerHTML={{ __html: chippo }}
            ></div>
          ) : (
            <div
              className="hidden h-[100vh] w-full lg:w-3/5 border-2 border-black overflow-y-scroll"
              dangerouslySetInnerHTML={{ __html: chippo }}
            ></div>
          )}
          {venueSpotlight == "Waywards" ? (
            <div
              className="min-h-[80vh] w-full lg:w-3/5 no-scrollbar mb-5 border-2 border-black overflow-y-scroll"
              dangerouslySetInnerHTML={{ __html: waywards }}
            ></div>
          ) : (
            <div
              className="hidden h-[100vh] w-full lg:w-3/5 border-2 border-black overflow-y-scroll"
              dangerouslySetInnerHTML={{ __html: waywards }}
            ></div>
          )}
        </div>

        {/* conditionally render top nav over side for mobile */}

        {width > 700 ? (
          <div className="flex bg-white  animate-blurinslow z-0 w-1/4 h-full mr-10  gap-5 flex-col p-12">
            {venues.map((el) => (
              <div
                className="text-md hover:text-slate-500"
                onClick={() => setVenueSpotlight(el)}
              >
                {el}
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
