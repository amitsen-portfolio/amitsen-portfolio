"use client";

import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-slate-100 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] text-slate-500 border border-slate-400 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] hover:text-orange-600 hover:border-orange-500 transition-all dark:bg-slate-950"
      onClick={toggleTheme}
    >
        {
            theme === "light" ? <BsSun /> : <BsMoon />
        }
    </button>
  );
}
