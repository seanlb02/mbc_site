import react from "react";
import { useState, useEffect, useContext} from "react";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";
import { ThemeSwitcher } from "./ThemeSwitcher";
// import  useWidth  from '@Hooks/useWindowSize';



export default function Hero() {
    const [width, setWidth] = useState(0)
    const handleResize = () => setWidth(window.innerWidth)
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        //   return () => window.removeEventListener('resize', handleResize)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
<>
        {width > 1000 ?  
        
        <main className={styles.pageContainer}>
            <section id="header" className={styles.main}> 
            
            <div className="flex flex-col w-1/4 border-r border-black p-4 text-left">
                <div className="flex flex-col text-sm">
                Bio or something here<br></br>Quis laborum ea exercitation labore ea eiusmod ipsum. <b></b>
                <n></n>
                Dolor nostrud sint eiusmod dolore ea. Irure eiusmod incididunt occaecat excepteur eiusmod ad voluptate cillum. 
                </div>

            </div>

            <div className="flex flex-col gap-2 w-2/4 items-center justify-center border-black">
                <Image src="/MBC_logo.png" onClick={() => Router.push('/')} height={200} width={400}></Image>
            </div>

            <div className="flex flex-col gap-4 w-1/4 border-l border-black p-4 text-left">
                <div className="flex mx-auto h-fit w-4/5  items-start">

                   <div className="flex w-1/2 font-bold items-center">Sydney </div>
                    <div className="flex flex-col gap-2 w-1/2 text-xs">
                        <div>742 Evergreen Tr, Princess Highway.</div>
                        <div>(02) 9999 9999</div>
                        <div className={styles.email} onClick={()=> Router.push('/contact')}><u>Contact us</u></div>
                    </div>

                        

                </div>

              

                <div className="flex mx-auto h-fit w-4/5 items-start">

                   <div className="flex w-1/2 font-bold items-center ">The House</div> 
                    <div className="flex w-1/2 text-xs items-center ">Thursday - Sunday 
                    <br></br>12-pm till Late-pm.</div>

                </div>

                <icons className="flex w-4/5 mx-auto  h-fit items-center  gap-6 pt-1">
                    <socialIcon><a className="fa fa-facebook fa-2x hover:fa-3x"  href ="https://github.com/seanlb02" target= "_blank"></a></socialIcon>
                    <socialIcon><a className="fa fa-instagram fa-2x" href="https://www.linkedin.com/in/sean-gyuris-72b5a1127/ "target= "_blank"></a></socialIcon>
                    <socialIcon><a className="fa fa-spotify fa-2x" href="https://soundcloud.com/cult-trip-records"target= "_blank"></a></socialIcon>
                </icons>

            </div>

            
            </section>


        </main>
        :
        <></>
            }    </>)
}

const styles = {
    pageContainer: " flex flex-col items-center  z-0 top-0 h-52 m-10 mb-5 border border-black font-mono cursor-logo bg-white",
    main: "flex h-full flex z-0 ",
    email: "cursor-pointer"
}