"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { getErrorMessage, validateEnvVariable } from "@/lib/utils";

export default function Contact() {
  // This hook is used to keep track of whether the section is in view
  const { ref } = useSectionInView("Contact", 0.8);

  const handleSubmitAction = async (formData: FormData) => {
    // Convert FormData to an object
    const params = Object.fromEntries(formData.entries());

    try {
      // Proceed with sending the email
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "", 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "", 
        params, 
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
      );
      toast.success("Email sent successfully!");
    } catch (error) {
      toast.error("Failed to send email: " + getErrorMessage(error));
      console.error("EmailJS error:", error);
    }
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }} // Initial animation state (lower opacity)
      whileInView={{ opacity: 1 }} // Final animation state (standard opacity)
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-slate-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:me@amitsen.de">
          me@amitsen.de
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col" action={handleSubmitAction}>
        <input
          name="name"
          placeholder="Your name"
          required
          maxLength={50}
          className="h-14 px-4 rounded-lg my-border-slate-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          maxLength={50}
          className="h-14 my-3 px-4 rounded-lg my-border-slate-300"
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          maxLength={500}
          className="h-52 my-3 rounded-lg my-border-slate-300 p-4"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
