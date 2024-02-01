import { useState, useEffect } from 'react'

import Navbar from "@/components/WNav"
import VenueSlider from "@/components/VenueSlider"
import MobileNavbar from '@/components/MobileNavbar'




export default function Venues() {

    const [width, setWidth] = useState(0)
    const handleResize = () => setWidth(window.innerWidth)
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        //   return () => window.removeEventListener('resize', handleResize)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (


        <div className="cursor-crosshair">
            {width > 700 ? <Navbar/> : <MobileNavbar/>}
            <VenueSlider/>
        </div>
    )
}