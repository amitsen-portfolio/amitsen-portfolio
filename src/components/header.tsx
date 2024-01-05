"use client";

// Importing necessary libraries and components
import { links } from "@/lib/data"; // Importing the 'links' data from a local file
import { motion } from "framer-motion"; // Importing 'motion' from Framer Motion for animations
import Link from "next/link"; // Importing 'Link' component from Next.js for navigation
import React, { useState } from "react"; // React library import
import clsx from "clsx";

// Header component definition
export default function Header() {

  const [activeSection, setActiveSection] = useState('Home');

  return (
    // Header container with a high z-index to ensure it's above other page elements
    <header className="z-[999] relative">
      {/* Motion div for animated effect on the header */}
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }} // Initial animation state
        animate={{ y: 0, x: "-50%", opacity: 1 }} // Final animation state
      ></motion.div>

      {/* Navigation bar */}
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        {/* List of navigation links */}
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {/* Mapping over the links array to render each link */}
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash} // Unique key for each list item
              initial={{ y: -100, opacity: 0 }} // Initial animation state for each link
              animate={{ y: 0, opacity: 1 }} // Final animation state for each link
            >
              {/* Link component for navigation */}
              <Link
                className={clsx("flex w-full items-center justify-center px-3 py-3 hover:text-slate-950 transition", {
                  "text-slate-950": activeSection === link.name,
                })}
                href={link.hash}
                onClick={() => setActiveSection(link.name)}
              >
                {link.name}

                {
                  activeSection === link.name && (
                    <motion.span className="bg-slate-200 rounded-full absolute inset-0 -z-10"
                      layoutId="activeSection"
                      transition={{ 
                        type: "spring",
                        stiffness: 380,
                        damping: 30, 
                      }}
                    />
                  )
                }
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
