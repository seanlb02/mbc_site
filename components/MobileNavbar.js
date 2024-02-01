import react from "react";
import { useState, useEffect, useContext} from "react";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";




export default function MobileNavbar() {

    const [venueShow, setVenueShow] = useState(false);


    return (
        <>

            <div className={styles.NavContainer}>
                <div className="items-center w-[100vw] h-[24] sticky top-0 bg-white flex justify-center"><Image height={80} width={200} src={'/MBC_logo.png'} className="flex items-center h-[20] w-[80vw]"></Image></div>
                <div className="text-sm bg-white flex m-auto pl-6 gap-24 p-2">
                    <div className="flex text-xs" onClick={() => setVenueShow(!venueShow)}><u>menu</u></div>
                    
                </div>
                {venueShow ? 
                <div id="nav" className={styles.itemContainer}>
                    <a className="flex w-2/5 pl-4 py-3" href="/shows">Whats on</a>
                    <div className="flex  pl-4 py-3" onClick={()=> Router.push('/festivals')}>Festivals</div>
                    <div className="flex pl-4 py-3" onClick={()=> Router.push('/services')}>Booze</div>
                    <a><div className="flex  pl-4 py-3" onClick={()=> Router.push('/venues')}>Venues</div></a>
                    <div className="flex pl-4 py-3" onClick={()=> Router.push('/contact')}>Contact</div>

                </div>
                :
                <></>
                }
            </div>
        </>

    )
}

const styles = {
    NavContainer: "sticky bg-white top-0 pt-5  z-40 h-fit text-xs font-mono",
    itemContainer: " bg-white border border-black flex flex-col align-start  m-10 mt-3 mb-0 border h-fit",

    item: "flex w-1/4 border border-black hover:border-2 hover:bg-slate-50 pl-4 py-3"
}