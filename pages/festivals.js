import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Navbar from '@/components/WNav'
import Listing from '@/components/Listing'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import Reel from '@/components/Reel'
import { useState, useEffect } from 'react'
import MobileNavbar from '@/components/MobileNavbar'

const inter = Inter({ subsets: ['latin'] })

export default function Festivals() {
    const festivals = ['King St Carnival','Bad Friday', 'Beer, Footy n Food', 'Country and Inner Western', 'Off the Rails']
    const logos = ['/kingstreet.png', '/badfriday.png', '/beerfooty.png', '/countryinner.png']

    const [width, setWidth] = useState(0)
    const handleResize = () => setWidth(window.innerWidth)
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        //   return () => window.removeEventListener('resize', handleResize)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    
    <main className={styles.pageContainer}>

      <Hero/>
      {width > 700 ? <Navbar className="bg-white"/> : <MobileNavbar/>}
      
      <heading className="text-3xl lg:text-5xl m-6 mb-0 lg:m-10">
            Our Festivals 
        </heading>
        <Listing name={festivals[0]} artist='Press' logo={logos[0]}/>
        <Listing name={festivals[1]} artist='Press' logo={logos[1]}/>
        <Listing name={festivals[2]} artist='Press' logo={logos[2]}/>
        <Listing name={festivals[3]} artist='Press' logo={logos[3]}/>
        <Listing name={festivals[4]} artist='Press' logo={logos[4]}/>


    </main>
  )
}

const styles = {
  pageContainer: "flex flex-col h-fit w-[100vw] cursor-crosshair font-mono no-scrollbar"
}