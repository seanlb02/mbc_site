import react from "react";
import { useState, useEffect, useContext} from "react";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";
import Hero from "./Hero";
import Algo from "./Algo";
import { useRouter } from "next/router";
import Draggable from "react-draggable";


export default function Reel() {
    const arr =  Array.apply(null, Array(50))
    .map(function (y, i) { return i; });
    
    const [genreShow, setGenreShow] = useState(false)
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
                                    <a id="contrastText" className="flex z-50  w-fit text-sm hover:translate-y-2 py-1 " href={`/shows?q=&hPP=20&p=0&dFR[Categories][0]=${el}&is_v=1`} onClick={()=>updateProp(el)}>{el}</a>
                                </>
                            )}
                        </div>
                        :
                        <></>
                        }
                    <div className="flex flex-col w-[100vw] lg:flex-row">
                        <div className=" cursor-move flex flex-col items-center h-[75vh] w-[100vw] bg-transparent">
                        {width < 800 ? <div className="mx-3 mt-2 text-sm" onClick={()=> setGenreShow(!genreShow)}>[Select by genre]</div> : <></>}
                        { width < 800 && genreShow ? 
                          <div className="flex bg-white border border-black px-16 m-5 mt-3 z-0 h-36 flex-col items-center overflow-y-scroll no-scrollbar">
                              {genres.map((el)=><a id="contrastText" className="flex z-50 text-sm w-fit py-1 " href={`/shows?q=&hPP=20&p=0&dFR[Categories][0]=${el}&is_v=1`}>{el}</a>)}
                          </div>
                          :
                          <></>
                        }
                            {width < 700 ?
                            <Draggable>
                                <div className="top-20 z-30  h-full px-3 w-fit  pb-3 border-black bg-white lg:border-4 overflow-y-scroll overflow-x-hidden no-scrollbar"> 
                                {width > 700 ? <div  className="sticky top-0 right-0 pr-2 h-6 pt-1 z-20 bg-white text-black items-right h-fit w-full align-right text-xs text-right">[drag me] </div> : <></>}

                                    <Algo genre={genreProp}/>
                                </div>
                            </Draggable>
                            :
                            <Draggable>
                            <div className="top-20 z-30  h-full px-3 w-fit mt-0 pb-3 border-black bg-white border-4 overflow-y-scroll overflow-x-hidden no-scrollbar"> 
                            <div className="sticky top-0 z-20 bg-transparent h-24 w-full">[drag me]</div>

                                <Algo genre={genreProp}/>
                            </div>
                            </Draggable>


                            }
                    </div> 
                    {width > 700 ?
                    <Draggable> 
                    <div className="lg:p-2 lg:border-4 border-black bg-white h-full w-[50wv] relative cursor-move">   
                        <div className="absolute top-0 z-20 bg-transparent h-36 w-full"> </div>
                        <iframe  src="https://open.spotify.com/embed/playlist/0rTCBABs8clQ8CsLqL3da2?utm_source=generator" className="h-[60vh] w-[30vw]"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        
                    </div>
                    </Draggable>
                    :
                    <></>}
                    
                    </div>
                    </div>
                    <Hero className="z-0 mt-10"/>  
            </div>
        </div>

    )
}

const styles = {

}