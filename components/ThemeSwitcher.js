"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme('light')

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div className=" flex gap-1 ml-10  pl-1 text-xs my-2">
      <div className="hover:text-slate-400" onClick={() => setTheme('light')}>Go light |</div>
      <div className="hover:text-slate-400" onClick={() => setTheme('dark')}>Go Dark</div>
    </div>
  )
};