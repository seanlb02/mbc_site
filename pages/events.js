import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Listing from "@/components/Listing";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Reel from "@/components/Reel";
import Eventsbg from "@/components/Eventsbg";
import Showsreel from "@/components/Showsreel";

const inter = Inter({ subsets: ["latin"] });

export default function Events() {
  return (
    <main className={styles.pageContainer}>
      <Hero />
      <Navbar />
      <Reel />
      <Eventsbg />
    </main>
  );
}

const styles = {
  pageContainer: "  h-fit  bg-transparent  cursor-crosshair font-mono",
};
