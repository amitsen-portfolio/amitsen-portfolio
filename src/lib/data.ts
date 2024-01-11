import React from "react";
import { CgWorkAlt } from "react-icons/cg";

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
  pageRoute: "Home",
  pageId: "home",
  profilePhotoAlt: "Amit | profile photo",
  firstName: "Amit",
  lastName: "Sen",
  profession: "Software Engineer",
  experience: "12 years",
  contactButtonTitle: "Contact me here",
  downloadButtonTitle: "Download CV",
  cvFilePath: "/files/CV.pdf",
  linkedinUrl: "https://www.linkedin.com/in/amit-sen-bb156428/",
  githubUrl: "https://github.com/ronstorm",
} as const;

// Data for professional experiences, including titles, locations, descriptions, icons, and dates
export const experienceData =  {
  pageTitle: "Experience",
  pageRoute: "Experience",
  pageId: "experience",
  data: [
    {
      title: "Senior Software Engineer",
      company: "Panavion GmbH",
      location: "Frankfurt, Germany",
      description:
        "I am engaged in the development and maintenance of software applications utilized by the Police Department of the Hessen State.",
      icon: React.createElement(CgWorkAlt),
      date: "2023 - present",
    },
    {
      title: "Extern Lecturer (Part-time)",
      company: "SRH Berlin University of Applied Sciences",
      location: "Hamburg, Germany",
      description:
        "I instruct both introductory and higher-level courses in Computer Science, encompassing fundamental principles and complex topics in the field.",
      icon: React.createElement(CgWorkAlt),
      date: "2022 - present",
    },
    {
      title: "Senior Software Engineer",
      company: "Lotto24 AG",
      location: "Hamburg, Germany",
      description:
        "I used to oversee application architecture and manage technical upgrades, ensuring adherence to clean code standards.",
      icon: React.createElement(CgWorkAlt),
      date: "2019 - 2023",
    },
    {
      title: "Senior Software Engineer",
      company: "Zalando SE",
      location: "Dortmund, Germany",
      description:
        "I developed a Payment SDK for iOS and Android, transitioning their system from a web-based to a native interface.",
      icon: React.createElement(CgWorkAlt),
      date: "2018 - 2019",
    },
    {
      title: "Software Engineer",
      company: "Uber Inc.",
      location: "Palot Alto, CA, United States",
      description:
        "I engineered a real-time GPS tracking algorithm, ensuring seamless location sharing between customers and drivers.",
      icon: React.createElement(CgWorkAlt),
      date: "2016 - 2018",
    },
    {
      title: "Research Assistant",
      company: "The University of Texas at Arlington",
      location: "Arlington, TX, United States",
      description:
        "I was a Research Assistant in the Software Engineering Research Team, focusing on Mobile Profiling Data Analysis, and worked with Machine Learning and Big Data concepts.",
      icon: React.createElement(CgWorkAlt),
      date: "2016 - 2018",
    },
    {
      title: "Software Engineer",
      company: "Champs21.com",
      location: "Dhaka, Bangladesh",
      description:
        "I contributed to the development of 'Classtune', a school management application, and various other specialized in-house apps.",
      icon: React.createElement(CgWorkAlt),
      date: "2011-2014",
    },
  ]
} as const;

export const aboutData = {
  pageTitle: "About",
  pageRoute: "About",
  pageId: "about",
} as const;

// Data for projects, including titles, descriptions, tags, and image URLs
export const projectsData = {
  pageTitle: "Projects",
  pageRoute: "Projects",
  pageId: "projects",
  data: [
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
  ]
} as const;

// Data structure for skills categorized by development areas, with each category containing a list of skills
export const skillsData = {
  pageTitle: "Skills",
  pageRoute: "Skills",
  pageId: "skills",
  data: [
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
    {
      key: "AI/ML",
      value: ["MLKit", "CoreML", "Tensorflow"],
    },
  ]
} as const;

export const contactData = {
  pageTitle: "Contact",
  pageRoute: "Contact",
  pageId: "contact",
  mailTo: "me@amitsen.info",
  formName: "name",
  formNamePlaceHolder: "Your name",
  formEmail: "email",
  formEmailPlaceHolder: "Your email",
  formMessage: "message",
  formMessagePlaceHolder: "Your message",
  submitButtonTitle: "Submit",
} as const;

export const emailJsData = {
  serviceId: "service_5ziabyn",
  templateId: "template_i1vi83r",
  publicKey: "jY99FhxMWixgEXmWe",
  successToast: "Email sent successfully 🎉! I will get back to you as soon as possible.",
  errorToast: "Failed to send email: ",
  errorToastTitle: "Emailjs error: ",
} as const;