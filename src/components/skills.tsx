"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import SkillCard from "./skill-card";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  // useSectionInView hook to keep track of when the Skills section is in view.
  // It helps in potentially triggering animations or tracking when this section is visible.
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    // Section element for the Skills section
    <section
      ref={ref} // Ref attached for viewport visibility tracking
      id="skills" // ID for potential anchor linking
      className="scroll-mt-28 max-w-[53rem] mx-auto text-center mb-28 sm:mb-0" // Styling: top margin for scroll, max width, centering, and text alignment
    >
      <SectionHeading>My Skills</SectionHeading>
      {/* Grid container for SkillCards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
        {
          // Mapping through each skill category in the skillsData to render SkillCards
          skillsData.map(({ key, value }, index) => (
            // SkillCard for each skill category. 'key' is the title, and 'value' is the list of skills.
            <SkillCard title={key} skills={value} key={index} />
          ))
        }
      </div>
    </section>
  );
}
