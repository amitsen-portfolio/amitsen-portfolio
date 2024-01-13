"use client";

// Importing necessary modules
import { motion } from "framer-motion"; // Importing 'motion' for animation effects from Framer Motion
import React from "react";

// SectionDivider functional component definition
export default function SectionDivider() {
  return (
    // A motion div from Framer Motion for animated effects
    <motion.div
      // Styling for the divider: A vertical line, shown only on screens wider than the 'sm' breakpoint
      className="bg-slate-400 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-slate-300"
      initial={{ opacity: 0, y: 100 }} // Initial state of the animation: fully transparent and positioned 100 pixels down
      animate={{ opacity: 1, y: 0 }}   // End state of the animation: fully opaque and in the original position
      transition={{ delay: 0.125 }}   // Transition settings: animation starts after a delay of 125ms
    />
  );
}
