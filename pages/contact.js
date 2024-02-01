import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Navbar from '@/components/WNav'
import Listing from '@/components/Listing'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import Reel from '@/components/Reel'
import Router from 'next/router'
import {useState, useEffect } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import MobileNavbar from '@/components/MobileNavbar'
import Demoform from '@/components/Demoform'

const inter = Inter({ subsets: ['latin'] })

export default function Events() {
    const [notRobot, setNotRobot] = useState(false)
    const [recaptcha, setRecaptcha] = useState(false)
    const [demoForm, setDemoForm] = useState(false)

    const allowEmail = function() {
        setNotRobot(true)
        setRecaptcha(false)
    }

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
      {demoForm ? <Demoform/> : <></>}
      
      {width > 700 ? <Navbar className="bg-white"/> : <MobileNavbar/>}

      {recaptcha ?
        <div className="flex h-[50vh] justify-center align-center items-center w-[100vw] lur-lg from-transparent bg-white top-56 absolute z-30">
             <ReCAPTCHA
                sitekey="6LcNxGMpAAAAAMLyG22hY46YoeXTKz_YNDUsMW41"
                onChange={()=>allowEmail()}/>
        </div>
        :
        <></>
      }

      <heading className="text-4xl lg:text-5xl m-8 lg:m-10">
            Contact 
        </heading>


        <div className='m-11 flex text-justify'>
           
            <div className="flex flex-col text-l lg:w-3/4 w-4/4 overflow-y-scroll no-scrollbar">
                <div>+61 999 9999 999</div>
                <div>742 Evergreen Tr, Princess Highway.</div>
                <div>Sydney, Australia</div>
                {notRobot ?
                <>
               <a href='mailto:johndoe@fakeemail.com'><div><u>jack@dickhead.com</u> (Promoters and Venues)</div></a>
               <div onClick={()=>setDemoForm(true)}><u>Submit music</u></div>

                </>
                :
                <div className="flex flex-col mt-5">
                <div onClick={()=>setRecaptcha(true)}><u>Email</u> (Promoters and Venues)</div>
                <div onClick={()=>setRecaptcha(true)}><u>Submit music</u></div>
                </div>
                }   
                
                <div className="mt-10 lg:pr-24 pr-8 gap-6 flex flex-col text-xs">
                    <div>While we do accept music from bands, musicians and djs we currently do not have the capacity to respond to all submissions. </div>
                    <div>Every submission gets added to our database which is checked regularly for when slots become free</div>

                </div>
                <div className="bg-white z-40 bottom-10 mb-2 m-10 lg:mt-12 py-8 px-2 border border-black text-center text-xs">Aknowledgement of country text here maybe?</div>

            </div>
            {width > 700 ? 
            <div className="flex pl-5 text-l align-center w-1/4  h-[40vh] border-l-black border-l">
                <div className="flex gap-2 flex-col w-1/2">
                    <div>Mon-Friday</div> 
                    <div>Weekends</div>
                </div>
                <div className="flex flex-col w-1/2 text-xs gap-5">
                    <div>10am - 5pm</div> 
                    <div>Closed</div>
                </div>
               
            </div>
            :
            <></>
            } 

        </div>

      <Hero />


    </main>
  )
}

const styles = {
  pageContainer: "flex flex-col h-[100vh]  cursor-crosshair font-mono"
}