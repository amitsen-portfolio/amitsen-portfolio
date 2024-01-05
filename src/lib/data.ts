import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

// Importing project images from the public directory
import codebuddiesImg from "../../public/images/projects/codebuddies.png";
import classtuneImg from "../../public/images/projects/classtune.png";
import mathParkingImg from "../../public/images/projects/math-parking.png";
import sixPackAbsImg from "../../public/images/projects/six-pack-abs.png";
import uncleFrankImg from "../../public/images/projects/uncle-frank.png";
import udoyImg from "../../public/images/projects/udoy.png";
import glooberImg from "../../public/images/projects/gloober.png";

// Navigation links data for the application
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// Data for intro
export const introData = {
  experience: "12 years",
} as const;

// Data for professional experiences, including titles, locations, descriptions, icons, and dates
export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

// Data for projects, including titles, descriptions, tags, and image URLs
export const projectsData = [
  {
    title: "Codebuddies",
    description:
      "Codebuddies is a programming tutoring service that provides live online tutoring sessions for various programming languages, such as C and Java.",
    tags: ["React", "CSS", "Javascript", "Sass"],
    imageUrl: codebuddiesImg,
  },
  {
    title: "Classtune",
    description:
      "Classtune is an app Students, Parents, Teachers and School Admin can bridge with each other and progress together.",
    tags: ["iOS", "Swift", "UIKit", "Android", "Java", "Kotlin"],
    imageUrl: classtuneImg,
  },
  {
    title: "Math Parking",
    description:
      "It's a combo game of basic math and car parking skill. Here you will find cool cars, great animation along with realistic graphics & sound.",
    tags: ["Android", "Java", "AndEngine"],
    imageUrl: mathParkingImg,
  },
  {
    title: "Impossible six pack abs",
    description:
      "Impossible Abs is a workout program wrapped in personal trainer theme.",
    tags: ["iOS", "Swift", "Android", "Java"],
    imageUrl: sixPackAbsImg,
  },
  {
    title: "Uncle Frank",
    description:
      "Uncle Frank is a courier delivery app and passenger ride request app that pairs customers to the nearest Uncle Frank drivers and couriers.",
    tags: ["iOS", "Swift", "Python"],
    imageUrl: uncleFrankImg,
  },
  {
    title: "Udoy",
    description:
      "Udoy is a personal assistance providing app that help people run errands or complete a task.",
    tags: ["iOS", "Swift", "AI", "NLP", "ML"],
    imageUrl: udoyImg,
  },
  {
    title: "Gloober",
    description:
      "It's a game where the green winged alien dad, on a mission to retrieve his abducted son.",
    tags: ["iOS", "Objective-C", "Cocos2D"],
    imageUrl: glooberImg,
  },
] as const;

// Data structure for skills categorized by development areas, with each category containing a list of skills
export const skillsData = [
  {
    key: "iOS App Development",
    value: [
      "Swift",
      "SwiftUI",
      "UIKit",
      "Combine Framework",
      "Objective-C",
      "MVC",
      "MVVM",
      "MVVMC",
      "Viper",
    ],
  },
  {
    key: "Android App Development",
    value: ["Android", "Kotlin", "Java"],
  },
  {
    key: "API Development",
    value: [
      "Python",
      "Django",
      "Java",
      "Kotlin",
      "Springboot",
      "Swift",
      "Vapor",
      "Kitura",
    ],
  },
  {
    key: "Web Development",
    value: [
      "HTML",
      "Javascript",
      "React JS",
      "Next JS",
      "MySQL",
      "PostgreSQL",
      "Sanity",
      "Firestore",
      "CSS",
      "SASS",
      "Tailwind",
      "Typescript",
    ],
  },
  {
    key: "Devops",
    value: [
      "Git",
      "Github Actions",
      "CI/CD Pipeline",
      "Google Cloud Platform (GCP)",
    ],
  },
] as const;
