"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";


export default function Contact() {
  // This hook is used to keep track of whether the section is in view
  const { ref } = useSectionInView("Contact", 0.8);

  const handleSubmitAction = async (formData: FormData) => {
    try {
      const { data } = await sendEmail(formData);
      if (data?.error) {
        toast.error(data?.error.message);
        return;
      }
      toast.success("Message sent successfully! I'll get back to you soon.", {
        duration: 3000,
      });
    } catch (err) {
      toast.error("An unexpected error occurred. Please try again later.");
      toast.error(`Unexpected error: ${err}`);
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

      <form
        className="mt-10 flex flex-col"
        action={handleSubmitAction}
      >
        <input
          type="email"
          name="senderEmail"
          placeholder="Your email"
          required
          maxLength={100}
          className="h-14 px-4 rounded-lg my-border-slate-300" />
        <textarea
          name="message"
          placeholder="Your message"
          required
          maxLength={500}
          className="h-52 my-3 rounded-lg my-border-slate-300 p-4" />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
