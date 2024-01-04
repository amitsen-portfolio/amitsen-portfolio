"use client";

import Image from "next/image";
import React from "react";
import profilePhoto from "@/../public/images/profile-photo.svg";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[75rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.25,
          }}
        >
          <Image
            src={profilePhoto}
            alt="Amit | profile photo"
            width={192}
            height={192}
            priority={true}
            className="h-48 w-48 object-cover rounded-full border-[0.35rem] border-white shadow-xl"
          />
        </motion.div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, it's <span className="font-bold">Amit</span> here. As a{" "}
        <span className="font-bold">Software Engineer</span> with over{" "}
        <span className="font-bold">12 years</span> of experience, I specialize
        in <span className="underline">Swift</span> for{" "}
        <span className="italic">iOS</span> and{" "}
        <span className="underline">Kotlin</span> for{" "}
        <span className="italic">Android</span>, along with{" "}
        <span className="italic">API</span> development. In addition to my
        technical expertise, I'm also an{" "}
        <span className="font-bold">Educator</span> and an{" "}
        <span className="font-bold">SEO Expert</span>, dedicated to solving
        real-world tech challenges and imparting knowledge in these areas.
      </motion.p>
    </section>
  );
}
