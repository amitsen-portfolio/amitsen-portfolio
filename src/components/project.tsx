"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// Define the type for the props based on the projectsData structure
type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  // useRef hook to create a reference for the motion.div element
  const ref = useRef<HTMLDivElement>(null);

  // Framer Motion hooks for scroll-based animations
  const { scrollYProgress } = useScroll({
    target: ref, // Targeting the motion.div element
    offset: ["0 1", "1.33 1"], // Defining the start and end points of the scroll animation
  });

  // Transform hooks to interpolate values based on scroll progress
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]); // Scale transform
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]); // Opacity transform

  return (
    // Motion div for the scroll-based animation
    <motion.div
      className="group border border-slate-300 mb-3 sm:mb-8 last:mb-0 rounded-2xl shadow-2xl overflow-hidden"
      ref={ref} // Attaching the ref for scroll detection
      style={{
        scale: scaleProgress, // Applying the scale transform
        opacity: opacityProgress, // Applying the opacity transform
      }}
    >
      {/* Section containing project details */}
      <section className="group bg-slate-100 max-w-[42rem] sm:pr-8 relative sm:h-[20rem] hover:bg-slate-200 transition group-even:pl-8">
        {/* Container for text content */}
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 max-w-[45%] flex flex-col h-full group-even:ml-[20rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-slate-700">{description}</p>
          {/* List of tags */}
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-slate-500 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Image with various hover and position styles */}
        <Image
          className="
            absolute top-8 -right-40 w-[30rem] shadow-2xl translate-y-10 scale-[1.05] 
            group-even:right-[initial] group-even:-left-40 
            group-hover:-translate-x-3 
            group-hover:translate-y-12 
            group-hover:-rotate-3
            group-even:group-hover:translate-x-3 
            group-even:group-hover:translate-y-12 
            group-even:group-hover:rotate-3 
            group-hover:scale-[1.1]
            transition"
          src={imageUrl}
          alt={title}
          quality={95}
        />
      </section>
    </motion.div>
  );
}
