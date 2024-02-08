import react from "react";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";

export default function MenuButton() {
  const [venueShow, setVenueShow] = useState(false);

  return (
    <>
      <div className={styles.NavContainer}>
        <div className="text-sm bg-transparent w-[100vw] flex m-auto pl-6 gap-24 p-2">
          <div
            className="flex bg-transparent text-xs text-white "
            onClick={() => setVenueShow(!venueShow)}
          >
            <u>menu</u>
          </div>
        </div>
        {venueShow ? (
          <div  className={styles.itemContainer}>
            <a className="flex w-2/5 pl-4 py-3" href="/shows">
              Whats on
            </a>
            <div
              className="flex  pl-4 py-3"
              onClick={() => Router.push("/festivals")}
            >
              Festivals
            </div>
            <div
              className="flex pl-4 py-3"
              onClick={() => Router.push("/services")}
            >
              Booze
            </div>
            <a className="text-black flex w-1/5 pl-4 py-3" href="/venues">
              Venues
            </a>
            <div
              className="flex pl-4 py-3"
              onClick={() => Router.push("/contact")}
            >
              Contact
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

const styles = {
  NavContainer: "sticky top-0 pt-5 bg-transparent z-40 h-fit text-xs font-mono",
  itemContainer:
    " bg-white border border-black  flex flex-col align-start mb-5 m-10 mt-3 mb-0 border h-fit",

  item: "flex w-1/4 border border-black hover:border-2 hover:bg-slate-50 pl-4 py-3",
};
