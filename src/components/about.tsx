"use client";

// Import necessary modules and components
import React, { useEffect } from "react";
import SectionHeading from "./section-heading"; // Custom component for section headings
import { motion } from "framer-motion"; // Importing 'motion' for animation effects from Framer Motion
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {

  const { ref, inView } = useInView({
    threshold: 0.75
  });
  const { setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  return (
    // A motion section from Framer Motion for animated effects
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-0 scroll-mt-28" // Styling for the section
      initial={{ opacity: 0, y: 100 }} // Initial state of the animation: fully transparent and positioned 100 pixels down
      animate={{ opacity: 1, y: 0 }} // End state of the animation: fully opaque and in the original position
      transition={{ delay: 0.175 }} // Transition settings: animation starts after a delay of 175ms
      id="about"
    >

      {/* Section heading */}
      <SectionHeading>About me</SectionHeading>

      {/* Paragraph describing professional journey */}
      <p className="mb-3">
        During my undergrad in{" "}
        <span className="font-medium">Computer Science & Engineering</span>, I
        developed a deep passion for{" "}
        <span className="font-medium">programming</span> and{" "}
        <span className="font-medium">problem-solving</span>. My freelancing
        journey began in the third year of undergrad, but it was after
        completing my bachelor's that I embarked on my professional career.
        Initially, I focused on <span className="font-medium">Java</span> for
        Android development and then, after two years, transitioned to iOS
        development using <span className="font-medium">Objective-C</span> upon
        acquiring a MacBook. This led to three years of dedicated work in the
        field before pursuing a{" "}
        <span className="italic">master's in Computer Science</span>.
        Post-master's, I resumed my career, this time specializing in{" "}
        <span className="font-medium">Swift</span> for iOS and{" "}
        <span className="font-medium">Kotlin</span> for Android, and
        occasionally diving into{" "}
        <span className="font-medium">React JS, NextJS, and TypeScript</span>.
        Today, I'm a <span className="italic">full-stack developer</span> with
        expertise in <span className="underline">Mobile Apps</span>.
      </p>

      {/* Paragraph about teaching experience and other skills */}
      <p className="mb-3">
        Since <span className="italic">2022</span>, I have also been imparting
        knowledge as a <span className="font-medium">University Lecturer</span>,
        teaching Fundamental Computer Science topics like{" "}
        <span className="italic">
          Programming, Data Structures, and Algorithms
        </span>
        . Alongside, I've completed a course in{" "}
        <span className="underline">SEO</span> and successfully worked as a{" "}
        <span className="italic">Freelance SEO Expert</span> for a few clients
        in Upwork.
      </p>
      
      {/* Paragraph about personal interests */}
      <p>
        Beyond technology, <span className="font-medium">Cricket</span> is a
        significant part of my life; I play professionally for a club. A fervent
        traveler, I've visited 21 countries and am excited to continue
        exploring. My hobbies include watching movies, listening to music, and
        I'm eager to learn skiing.
      </p>
    </motion.section>
  );
}
