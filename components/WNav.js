import react from "react";
import { useState, useEffect, useContext} from "react";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";




export default function Navbar() {

    const [venueShow, setVenueShow] = useState(false);
    const venues = ['The Chippo', 'The Great Club', 'The House of Music and Booze', 'The Vic on the Park', 'The Royal', 'Waywards' ]

    return (
        <>

            <div className={styles.NavContainer}>
                <div id="nav" className={styles.itemContainer} >
                    <a className="flex w-2/5 border border-r-black hover:border-2 hover:bg-slate-50 pl-4 py-3" href="/shows">Whats on</a>
                    <div className="flex w-1/5 border border-r-black hover:border-2 hover:bg-slate-50 pl-4 py-3" onClick={()=> Router.push('/festivals')}>Festivals</div>
                    <div className="flex w-1/5 border border-r-black hover:border-2 hover:bg-slate-50 pl-4 py-3" onClick={()=> Router.push('/services')}>Booze</div>
                    <a className="text-white flex w-1/5 border border-r-black hover:border-2 hover:bg-slate-50 pl-4 py-3" href='/venues'>Venues</a>
                    <div className="flex w-16 items-center hover:border-2-black hover:bg-slate-50 justify-center" onClick={()=> Router.push('/')}><div className="w-fit h-fit rounded-full bg-black p-1"><Image src="/mbc_small.png" height={25} width={30}></Image></div></div>
                </div>
            </div>
        </>

    )
}

const styles = {
    NavContainer: "sticky bg-white top-0 w-[100vw] z-50 h-fit text-sm ",
    itemContainer: " bg-transparent border border-black z-1 flex align-start  m-10 mt-3 mb-0 border h-fit",

    item: "flex w-1/4 border border-black hover:border-2 hover:bg-slate-50 pl-4 py-3"
}