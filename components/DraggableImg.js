import { Html } from "next/document";
import Script from "next/script";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import htmlString from "@/public/html/all";
import Draggable from "react-draggable";


export default function DraggableImg({ src, h, w }) {
  const searchParams = useSearchParams();




  return (
    <div className='h-[30vh] w-[30vw]'>
        <Draggable>
            <img src='/badfridaycrowd.jpg' width="500" height="600"/>
           
        </Draggable>
    </div>
  );
}
