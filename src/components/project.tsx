// Import necessary libraries and components
import React, { useRef, useState, useEffect } from "react";
import { projectsData } from "@/lib/data"; // Import project data
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// Type definition for project properties
type ProjectProps = (typeof projectsData)[number];

// Functional component for Project
export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null); // Ref for the container element to track scroll position
  const [isSmallScreen, setIsSmallScreen] = useState(false); // State to track if the screen is small

  // Effect to update isSmallScreen based on window size
  useEffect(() => {
    const checkIfSmallScreen = () => {
      setIsSmallScreen(window.innerWidth < 640); // Check if screen width is less than 640px
    };

    checkIfSmallScreen(); // Initial check

    // Event listeners to update state on window resize
    window.addEventListener("resize", checkIfSmallScreen);
    return () => window.removeEventListener("resize", checkIfSmallScreen);
  }, []);

  // Scroll and transform animations using Framer Motion
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]); // Scale animation
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]); // Opacity animation

  // Render the component
  return (
    <motion.div
      className="group border border-slate-300 mb-3 sm:mb-8 last:mb-0 rounded-2xl shadow-2xl overflow-hidden"
      ref={ref}
      style={{
        scale: isSmallScreen ? 1 : scaleProgress, // Disable scale on small screens
        opacity: isSmallScreen ? 1 : opacityProgress, // Disable opacity change on small screens
      }}
    >
      <section
        className={`group bg-slate-100 sm:pr-8 relative ${
          isSmallScreen
            ? "max-w-full flex flex-col"
            : "max-w-[42rem] group-even:pl-8 hover:bg-slate-200 transition"
        }`}
      >
        {/* Text content container */}
        <div
          className={`pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 ${
            isSmallScreen ? "w-full" : "max-w-[45%] group-even:ml-[20rem]"
          } flex flex-col h-full`}
        >
          <h3 className="text-2xl font-semibold">{title}</h3> {/* Title */}
          <p className="mt-2 mb-6 leading-relaxed text-slate-700">
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
          className={`shadow-2xl transform translate-y-10 transition ${
            isSmallScreen
              ? "w-full"
              : "absolute w-[30rem] top-8 -right-40 scale-[1.05] group-hover:-translate-x-3 group-hover:translate-y-12 group-hover:-rotate-3 group-even:right-[initial] group-even:-left-40 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-12 group-even:group-hover:rotate-3 group-hover:scale-[1.1]"
          }`}
          src={imageUrl}
          alt={title}
          quality={95}
        />
      </section>
    </motion.div>
  );
}
