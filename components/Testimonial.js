import react from "react";
import { useState, useEffect, useContext} from "react";
import Link from "next/link";
import Image from "next/image";

export default function Testimonial ({image, name, text}){
    return (
        <div className="flex flex-col mx-10 items-center w-[100vw]">
            <div className="max-h-56 max-w-56 align-center">
                <Image src={image} height={200} width={200} className="w-full h-full"></Image>
            </div>
            <header className="lg:text-3xl font-bold">
                {name}
            </header>
            <section className="text-justify mb-10">
                {text}
            </section>




        </div>
    )
}