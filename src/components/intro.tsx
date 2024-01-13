"use client";

// Importing necessary modules and components
import Image from "next/image";
import React from "react";
import profilePhoto from "@/../public/images/profile-photo.svg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { contactData, introData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

// Intro component definition
export default function Intro() {

  // This hook is used to keep track of the active section
  const { ref } = useSectionInView(introData.pageRoute, 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext(); // This hook is used to keep track of the active section

  return (
    // Section element for the introduction part of the page
    <section
      ref={ref}
      id={introData.pageId}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      {/* Container for the profile image */}
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }} // Initial animation state (invisible and scaled down)
          animate={{ opacity: 1, scale: 1 }} // Final animation state (fully visible and scaled to normal)
          transition={{
            type: "tween",
            duration: 0.25,
          }}
        >
          {/* Image component displaying the profile photo */}
          <Image
            src={profilePhoto}
            alt={introData.profilePhotoAlt}
            width={192}
            height={192}
            priority={true}
            className="h-48 w-48 object-cover rounded-full border-[0.35rem] border-white shadow-xl hover:scale-110 transition hover:shadow-custom-glow"
          />
        </motion.div>
      </div>

      {/* Animated paragraph introducing Amit */}
      <motion.h1
        className="mb-10 mt-4 px-4 text-xl text-slate-800 font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }} // Initial animation state (lower opacity and position)
        animate={{ opacity: 1, y: 0 }} // Final animation state (standard opacity and position)
      >
        {/* Introduction text with emphasis on certain words */}
        Hi, it's <span className="font-bold">{introData.firstName}</span> here. As a{" "}
        <span className="font-bold">{introData.profession}</span> with over{" "}
        <span className="font-bold">{introData.experience}</span> of experience,
        I specialize in <span className="underline">Swift</span> for{" "}
        <span className="italic">iOS</span> and{" "}
        <span className="underline">Kotlin</span> for{" "}
        <span className="italic">Android</span>, along with{" "}
        <span className="italic">API</span> development. In addition to my
        technical expertise, I'm also an{" "}
        <span className="font-bold">Educator</span> and an{" "}
        <span className="font-bold">SEO Expert</span>, dedicated to solving
        real-world tech challenges and imparting knowledge in these areas.
      </motion.h1>

      {/* Container for action buttons and links */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }} // Initial animation state (lower opacity and position)
        animate={{ opacity: 1, y: 0 }} // Final animation state (standard opacity and position)
        transition={{
          delay: 0.1,
        }}
      >
        {/* Contact me link */}
        <Link
          href="#contact"
          className="group bg-slate-900 text-slate-200 px-7 py-3 flex items-center gap-2 rounded-full border-[0.2rem] border-slate-400 outline-none hover:scale-110 hover:bg-slate-950 transition cursor-pointer"
          onClick={() => {
            // Scroll to the Contact section when the link is clicked
            document
              setActiveSection(`${contactData.pageRoute}`);
              setTimeOfLastClick(Date.now());
          }}
        >
          {`${introData.contactButtonTitle} `}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        {/* Download CV button */}
        <a
          className="bg-slate-200 text-slate-800 px-7 py-3 flex items-center gap-2 rounded-full border-[0.2rem] border-slate-700 outline-none hover:scale-110 transition cursor-pointer"
          href={`${introData.cvFilePath}`}
          download
        >
          {`${introData.downloadButtonTitle} `}<HiDownload className="opacity-70" />
        </a>

        {/* LinkedIn profile link */}
        <a
          className="bg-slate-200 text-slate-700 p-4 flex items-center gap-2 text-[1.25rem] rounded-full border-[0.2rem] border-slate-700 outline-none hover:scale-[1.15] hover:text-slate-900 hover:border-slate-900 transition cursor-pointer tooltip"
          href={introData.linkedinUrl}
          target="_blank"
        >
          <BsLinkedin />
          <span className="tooltiptext text-xs">Linkedin Profile</span>
        </a>

        {/* GitHub profile link */}
        <a
          className="bg-slate-200 text-slate-700 p-4 flex items-center gap-2 text-[1.35rem] rounded-full border-[0.2rem] border-slate-700 outline-none hover:scale-[1.15] hover:text-slate-900 hover:border-slate-900 transition cursor-pointer tooltip"
          href={introData.githubUrl}
          target="_blank"
        >
          <FaGithubSquare />
          <span className="tooltiptext text-xs">Github Profile</span>
        </a>

        {/* Medium profile link */}
        <a
          className="bg-slate-200 text-slate-700 p-4 flex items-center gap-2 text-[1.35rem] rounded-full border-[0.2rem] border-slate-700 outline-none hover:scale-[1.15] hover:text-slate-900 hover:border-slate-900 transition cursor-pointer tooltip"
          href={introData.mediumUrl}
          target="_blank"
        >
          <BsMedium />
          <span className="tooltiptext text-xs">Medium Profile</span>
        </a>
      </motion.div>
    </section>
  );
}
