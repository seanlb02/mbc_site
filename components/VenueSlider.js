import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from 'react'
import ven from '@/public/venueinfo'
import Algo from '@/components/Algo'
import Map from "@/components/Map"

// html strings
import bootleggers from '@/public/html/bootleggers'
import thegreatclub from "@/public/html/thegreatclub"
import waywards from "@/public/html/waywards"
import chippo from "@/public/html/thechippo"
import Draggable from "react-draggable"

export default function VenueSlider(){

    // Set up window width listener for conditional mobile rendering

    const [width, setWidth] = useState(0)
    const handleResize = () => setWidth(window.innerWidth)
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        //   return () => window.removeEventListener('resize', handleResize)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const venues = ['The Chippo', 'The Great Club', 'The House of Music and Booze', 'The Vic on the Park', 'The Royal', 'Waywards' ]
    const [venueSpotlight, setVenueSpotlight] = useState("We pair music with venues like no one else.");
    const [dropNavShow, setDropNavShow] = useState(false)

    const selectVenue = function(venue) {
        setDropNavShow(false)
        setVenueSpotlight(venue)

    }

    return (
    <div className="h-[100vh]">

        { width < 700 ?             
            
            <div className="font-mono flex bg-white md:px-0 mg:mx-0 z-20 w-[100vw] h-fit lg:h-full mr-10 pt-5  gap-5 flex-col p-5 lg:p-12">
                <div className="text-sm" onClick={()=>setDropNavShow(!dropNavShow)}>[Select venue]</div>
                    {   dropNavShow ? 
                        venues.map((el)=><div className="text-sm hover:text-slate-500"  onClick={()=> selectVenue(el)}>{el}</div>)
                        :
                <></>                    }
            </div>
            :
            <></>
        }
            <div className="flex h-[100vh] w-[100vw] z-0 font-mono">
            <div className="flex flex-col  overflow-y-scroll no-scrollbar mx-5 bg-white h-[100vh] lg:w-3/4 w-full z-0 lg:ml-10 lg:animate-left1 items-center">
            
            
            <div className="flex flex-col h-fit bg-white   lg:mr-5 m-0 z-0 "> 
                <div className="text-2xl lg:text-5xl w-full ml-2 lg:mt-10 md:mt-10 md:text-3xl">{venueSpotlight}</div>
                                { venueSpotlight == "We pair music with venues like no one else." ?
                                    <div className="flex h-[50vh] w-full flex justify-center items-center"><Image priority={true} loading="eager" height={500} width={1000} src='/white_spin_logo.gif'></Image></div>
                                    :
                                    <div className="flex w-full align-center lg:mb-10 lg:mt-10 ">
                                        {width > 1300 ? <div className="flex flex-end mt-auto h-[50vh] w-1/2">
                                            <Map latitude={-33.89408834621491} longitude={151.17954556766304}/>
                                        </div> : <></>}

                                        {width > 1300 ? <Draggable>
                                            <Image  priority={true} loading="eager" className="flex flex-start lg:ml-auto lg:h-4/5 lg:w-2/5 w-full mb-5 mt-5 lg:m-10" src={ven.images[venueSpotlight]} height={300} width={600}></Image>
                                        </Draggable> : 
                                        <Image  priority={true} loading="eager" className="flex flex-start lg:ml-auto lg:h-4/5 lg:w-2/5 w-full mb-5 mt-5 lg:m-10" src={ven.images[venueSpotlight]} height={300} width={600}></Image>
                                        }


                                    </div>
                                }
                <div className="text-sm lg:text-lg mb-10 lg:mx-5">This is a paragraph about the venue,  Dolor nostrud sint eiusmod dolore ea. Irure eiusmod incididunt occaecat excepteur eiusmod ad voluptate cillum. Dolor nostrud sint eiusmod dolore ea. Irure eiusmod incididunt occaecat excepteur eiusmod ad voluptate cillum.</div>
                </div>


                    {/* render venue shows - Very hacky: no time to init Algolia search in nextjs so used oztix raw html which would re-render reactively... */}
                    {venueSpotlight == "The Great Club" ?
                    <div className="min-h-[80vh] w-full lg:w-3/5 border-2 border-black overflow-y-scroll" dangerouslySetInnerHTML={{ __html: thegreatclub }}></div>
                    :
                    <div className="hidden w-full lg:w-3/5 border-2 border-black overflow-y-scroll" dangerouslySetInnerHTML={{ __html: thegreatclub }}></div>
                    }
                    {venueSpotlight == "The Chippo" ?
                    <div className="min-h-[80vh] w-full lg:w-3/5 border-2 border-black overflow-y-scroll" dangerouslySetInnerHTML={{ __html: chippo }}></div>
                    :
                    <div className="hidden h-[100vh] w-full lg:w-3/5 border-2 border-black overflow-y-scroll" dangerouslySetInnerHTML={{ __html: chippo }}></div>
                    }
            </div>  

        {/* conditionally render top nav over side for mobile */}
        
        { width > 700 ? 
        <div className="flex bg-white border border-r-black border-l-black z-0 w-1/4 h-full mr-10 animate-left gap-5 flex-col p-12">
            {venues.map((el)=><div className="text-md hover:text-slate-500"  onClick={()=> setVenueSpotlight(el)}>{el}</div>)}

        </div>
        :
        <></>
        }

    </div>
    </div>
    )

}
