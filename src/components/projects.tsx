"use client";

import React from "react";
import SectionHeading from "./section-heading"; // Import custom section heading component
import { projectsData } from "@/lib/data"; // Import projects data
import Project from "./project"; // Import Project component
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {

  // This hook is used to keep track of the active section
  const { ref } = useSectionInView(projectsData.pageRoute, 0.2);

  return (
    // Main container for the projects section
    <section ref={ref} id={projectsData.pageId} className="scroll-mt-28 mb-28 sm:mb-0">
      {/* Section heading for the projects */}
      <SectionHeading>My projects</SectionHeading>

      {/* Container for individual project components */}
      <div className="flex flex-col items-center">
        {
          // Map through the projectsData array to render Project components
          projectsData.data.map((project, index) => (
            // Using React.Fragment to avoid adding extra nodes to the DOM
            // Key is provided to satisfy React's list rendering requirements
            <React.Fragment key={index}>
              {/* Spread operator is used to pass each project's properties as props */}
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  );
}
