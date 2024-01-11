"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  // This hook is used to keep track of whether the section is in view
  const { ref } = useSectionInView(experienceData.pageRoute, 0.2);

  return (
    <section ref={ref} id={experienceData.pageId} className="scroll-mt-28 mb-28">
      <SectionHeading>{experienceData.pageTitle}</SectionHeading>
      <VerticalTimeline animate={true} lineColor="#94a3b8">
        {experienceData.data.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              visible={true}
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0 text-orange-500">
                {item.company}
              </p>
              <p className="!mt-1 !font-thin">{item.location}</p>
              <p className="!mt-1 !font-normal text-slate-700">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
