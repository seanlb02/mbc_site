import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'
import MobileNavbar from '@/components/MobileNavbar'
import MenuButton from '@/components/MenuButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [rearrange, setRearrange] = useState(true)

  const scrolly = () => setRearrange(false);

  useEffect(() => {
    

    if (typeof window !== "undefined") {
      window.addEventListener('scroll', scrolly)
    }

  }, []);

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


        <div className="relative h-[100vh] w-[100vw] ">
          
           
          <video autoplay="autoplay" muted loop className='absolute z-0 h-[100vh] lg:h-[172vh] w-[100vw] flex flex-col'> <source src='/badbrains.mp4' type="video/mp4"/>  </video> 
          {rearrange ? 
            <div className="flex flex-col absolute z-2">
            <Hero className="z-38 w-full top-0 "/>
            {width > 700 ? <Navbar className="absolute z-10 bg-transparent"/> : <MenuButton/>}
            {width < 700 ? <div className="absolute z-0 h-[70vh] lg:h-[100vh] w-[100vw] flex justify-center items-center align-center"><Image priority={true} loading='eager' height={1000} width={2000} src='/white_spin_logo.gif'></Image></div> : <></>}

            </div>

            :

            <div className="absolute w-full h-[100vh] lg:h-[150vh]  z-2 ">
              <div className="relative w-full h-[100vh] lg:h-[170vh]">
                {width > 700 ? <Navbar className="absolute z-50 bg-transparent"/> : <MenuButton/>}
                <div className="absolute z-0 h-[50vh] lg:h-[100vh] w-[100vw] flex justify-center items-center align-center"><Image priority height={500} width={1000} src='/white_spin_logo.gif'></Image></div>

                <div className="absolute bottom-0">
                  <Hero className=" "/></div>
              </div>
            </div>
          } 

      
         

        </div>
        

    </main>
  )
}

const styles = {
  pageContainer: " h-fit w-[100vw] cursor-crosshair font-mono"
}