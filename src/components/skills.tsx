"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { fadeInAnimationVariants } from "@/animation/variants";

export default function Skills() {
  // useSectionInView hook to keep track of when the Skills section is in view.
  // It helps in potentially triggering animations or tracking when this section is visible.
  const { ref } = useSectionInView(skillsData.pageRoute);

  return (
    // Section element for the Skills section
    <section
      ref={ref} // Ref attached for viewport visibility tracking
      id={skillsData.pageId} // ID for potential anchor linking
      className="scroll-mt-28 max-w-[53rem] mx-auto text-center mb-28 sm:mb-0" // Styling: top margin for scroll, max width, centering, and text alignment
    >
      <SectionHeading>{skillsData.pageTitle}</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-3 text-slate-800 text-xs sm:text-lg">
        {skillsData.data.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-slate-100 my-border-slate-300 rounded-xl px-5 py-3"
            variants={fadeInAnimationVariants} // Animation variants
            initial="initial" // Start state
            whileInView="animate" // Animate when in view
            viewport={{ once: true }} // Run animation only once
            custom={index} // Pass index to the animation for staggering effect
          >
            {skill}
          </motion.li>
        ))}
      </ul>
      {/* Grid container for SkillCards */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
        {
          // Mapping through each skill category in the skillsData to render SkillCards
          skillsData.data.map(({ key, value }, index) => (
            // SkillCard for each skill category. 'key' is the title, and 'value' is the list of skills.
            <SkillCard title={key} skills={value} key={index} />
          ))
        }
      </div> */}
    </section>
  );
}
