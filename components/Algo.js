
import { Html } from "next/document"
import Script from "next/script"
import {useState, useEffect, useRef} from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import htmlString from '../public/html/all'

import { usePathname } from 'next/navigation';


export default function Algo({genre, html}) {
const searchParams = useSearchParams();
const [reload, setReload] = useState("")
const myRef = useRef(null)

const url = new URLSearchParams()
const router = useRouter();
const [genreHolder, setGenreHolder] = useState(url)
const [htmlState, setHtmlState] = useState(htmlString)


myRef.current = htmlString
useEffect(() => {
// myRef.current.innerHTML = htmlString
// document.getElementById("reel").innerHTML = htmlString
// myRef.current.innerHTML = htmlString
  }, [router]);

    

return (
    
    <div >
        <div ref={myRef} ></div>
 
    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
  

    </div>
    )

}