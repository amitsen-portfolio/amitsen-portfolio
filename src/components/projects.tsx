"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading"; // Import custom section heading component
import { projectsData } from "@/lib/data"; // Import projects data
import Project from "./project"; // Import Project component
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Projects() {

  const { ref, inView } = useInView({
    threshold: 0.2
  });
  const { setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);

  return (
    // Main container for the projects section
    <section ref={ref} id="projects" className="scroll-mt-28">
      {/* Section heading for the projects */}
      <SectionHeading>My projects</SectionHeading>

      {/* Container for individual project components */}
      <div>
        {
          // Map through the projectsData array to render Project components
          projectsData.map((project, index) => (
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
