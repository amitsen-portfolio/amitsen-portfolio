"use client";

// Import necessary libraries and components
import React, { useRef, useState, useEffect } from "react";
import { projectsData } from "@/lib/data"; // Import project data
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// Type definition for project properties
type ProjectProps = (typeof projectsData.data)[number];

// Functional component for Project
export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // Render the component
  return (
    <motion.div
      className="group mb-3 sm:mb-8 last:mb-0"
      ref={ref}
      style={{
        scale: scaleProgess, // Disable scale on small screens
        opacity: opacityProgess, // Disable opacity change on small screens
      }}
    >
      <section className="bg-slate-100 max-w-[42rem] my-border-slate-300 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition-all sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        {/* Text content container */}
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3> {/* Title */}
          <p className="mt-2 mb-6 leading-relaxed text-slate-700 dark:text-slate-300">
            {description}
          </p>{" "}
          {/* Description */}
          {/* Tags list */}
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

        {/* Image container */}
        <Image
          className="absolute hidden transform translate-y-10 sm:block top-8 -right-40 w-[30rem] rounded-t-lg shadow-2xl
          transition-all
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
  
          group-even:group-hover:translate-x-3
  
          group-even:right-[initial] group-even:-left-40"
          src={imageUrl}
          alt={title}
          quality={95}
        />
      </section>
    </motion.div>
  );
}
