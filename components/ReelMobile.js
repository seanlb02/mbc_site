import react from "react";
import { useState, useEffect, useContext} from "react";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";
import Hero from "./Hero";
import Algo from "./Algo";
import { useRouter } from "next/router";
import Draggable from "react-draggable";


export default function ReelMobile() {
    const arr =  Array.apply(null, Array(50))
    .map(function (y, i) { return i; });
 
    const [width, setWidth] = useState(0)
    const handleResize = () => setWidth(window.innerWidth)
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        //   return () => window.removeEventListener('resize', handleResize)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const router = useRouter();
    const [url, setUrl] = useState("hi");

    const updateProp = function(item) {
        setGenreProp(item)
        Router.push(`/shows?q=&hPP=20&p=0&dFR[Categories][0]=${item}&is_v=1`)
    }

const [genreProp, setGenreProp] = useState("")

    const genres = ['Rock', 'Indie', 'Punk', 'Pop', 'Alternative', 'Hip Hop', 'Blues', 'Folk', 'Dance', 'Electronic', 'RnB', 'Soul', 'Acoustic', 'Afrobeat', 'Community', 'Funk', 'Hardcore', 'Heavy Metal', 'Psychadelic', 'Reggae', 'Tribute', 'World']

    return (
        <div className="relative sticky top-16 z-30  justify-center w-[100vw] flex flex-col items-center bg-transparent font-mono">
            <div className="flex flex-col items-center  max-w-[100vw] top-0 mx-10 bg-transparent">
                <div className=" flex flex-col items-center w-[100vw] h-fit bg-transparent">


                        {width > 700 ? 
                        <div  className="flex gap-2 w-[100vw] justify-center pt-4 word-wrap flex-wrap">
                            {genres.map((el) => 
                                <>
                                    <a id="contrastText" className="flex z-50  w-fit text-sm hover:translate-y-2 py-1 " onClick={()=>updateProp(el)}>{el}</a>
                                </>
                            )}
                        </div>
                        :
                        <></>
                        }
                    <div className="flex flex-col w-[100vw] lg:flex-row">
                        <div className=" cursor-move flex flex-col items-center  h-[40vh] w-[100vw] bg-transparent">

                                <div className="top-20 z-30 relative h-full px-3 w-fit  pb-3 border-black bg-white border-4 overflow-y-scroll overflow-x-hidden no-scrollbar"> 

                                    <Algo genre={genreProp}/>
                                </div>
                    </div> 
                    <div className="p-2 border-4 border-black bg-white h-fit relative">   
                        <iframe  src="https://open.spotify.com/embed/playlist/0rTCBABs8clQ8CsLqL3da2?utm_source=generator" width={500} height={352} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        
                    </div>
                    
                    
                    </div>
                    </div>
                    <Hero className="z-0 mt-10"/>  
            </div>
        </div>

    )
}

const styles = {

}