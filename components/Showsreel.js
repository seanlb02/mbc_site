import react from "react";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import { Tooltip, Button } from "@material-tailwind/react";

export default function Showsreel({ name, artist, label }) {
  return (
    <div className="relative z-50 top-20 h-full z-1 w-[100vw] flex flex-col bg-white items-center align-center border">
      <div className="sticky z-50 fixed h-[50vh] w-[50vw] bg-white"></div>
    </div>
  );
}

const styles = {
  itemContainer: "flex h-full w-full overflow-x-auto ms:w-full",
  imageBox:
    "flex min-h-max justify-center items-center lg:w-2/5 md:shrink-0 sm:w-2/2",
};
