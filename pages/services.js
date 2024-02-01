import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Navbar from '@/components/WNav'
import Listing from '@/components/Listing'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import Reel from '@/components/Reel'
import Router from 'next/router'
import Testimonial from '@/components/Testimonial'
import {useState, useEffect} from 'react'
import MobileNavbar from '@/components/MobileNavbar'

const inter = Inter({ subsets: ['latin'] })

export default function Events() {
    const listings = [1,2,3,4,5]

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

      
      {width > 700 ? <Navbar className="bg-white"/> : <MobileNavbar/>}

      <heading className="text-5xl lg:m-10 m-10 mb-5">
            Booze, Glorious Booze 
        </heading>
        <div className='lg:m-11 ml-10 mr-6 text-l lg:text-2xl text-left'>MBC are experts in all things booze! We understand what it takes to get drinks into peoples hands at events. This means your patrons spend less time in lines and more time enjoying your event! We understand it because we live it. We work with an array of businesses from small bespoke events to large scale outdoor festivals not to mention our own events!
         <u className="pl-1 hover:text-slate-500 cursor-pointer" onClick={()=> Router.push('/contact')}>Get in touch</u></div>

        <heading className="lg:text-5xl text-4xl lg:m-10 m-10 mb-50">
            Our Friends 
        </heading>
        <div className='lg:m-12 mx-10  lg:text-2xl'>We work with a number of clients in a variety of ways from festival programming to hospitality solutions. Check out some of our mates below.</div>
        <div className="flex w-full h-[50vh] justify-center mb-24">
            <Image src="/mates.png" height={1000} width={1000}  className='h-full lg:w-2/4 w-3/4 m-10'></Image>
        </div>
        <div className="flex flex-col border items-center lg:flex-row">
            <Testimonial image="/paulstix.png" name="Paul Stix" text="hey hey testimonial goes here"/>
            <Testimonial image="/paulstix.png" name="Paul Stix" text="hey hey testimonial goes here"/>
            <Testimonial image="/paulstix.png" name="Paul Stix" text="hey hey testimonial goes here"/>
        </div>
      <Hero />


    </main>
  )
}

const styles = {
  pageContainer: "flex flex-col items-center overflow-x-hidden h-[100vh] max-w-[100vw] cursor-crosshair font-mono"
}