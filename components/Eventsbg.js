import react from "react";
import { useState, useEffect, useContext} from "react";
import Link from "next/link";
import Image from "next/image";

import { Tooltip, Button } from "@material-tailwind/react";



export default function Eventsbg({name, artist, label}) {

    const arr = [1,2,3,4,5,6,7,8,8,8,8,8,]

    return (
        <main className=" flex flex-col items-center mb-3 h-[200vh] v-[100vw] relative overflow-auto">
                {/* <div className="absolute border flex flex-col items-center top-20 h-fit w-fit">
                        <div className="top-20 fixed z-50  h-[50vh] p-12 w-[50vw] bg-white border overflow-y-scroll"> 
                        {arr.map((el) => <div>oztix event slist goes here</div>)}
                    </div>
                </div> */}

                    <video autoplay="autoplay" muted loop className='absolute  h-full w-[100vw] flex flex-col'> <source src='/badbrains.mp4' type="video/mp4"/> </video> 
        </main>
    )
}

const styles = {
    itemContainer: "flex h-full w-full overflow-x-auto ms:w-full font-mono",
    imageBox: "flex min-h-max justify-center items-center lg:w-2/5 md:shrink-0 sm:w-2/2"
}