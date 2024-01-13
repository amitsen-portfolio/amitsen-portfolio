"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { getErrorMessage } from "@/lib/utils";
import { contactData, emailJsData } from "@/lib/data";

export default function Contact() {
  // This hook is used to keep track of whether the section is in view
  const { ref } = useSectionInView(contactData.pageRoute, 0.8);

  const handleSubmitAction = async (formData: FormData) => {
    // Convert FormData to an object
    const params = Object.fromEntries(formData.entries());

    try {
      // Proceed with sending the email
      await emailjs.send(
        emailJsData.serviceId,
        emailJsData.templateId,
        params,
        emailJsData.publicKey
      );
      toast.success(emailJsData.successToast);
    } catch (error) {
      toast.error(emailJsData.errorToast + getErrorMessage(error));
      console.error(emailJsData.errorToastTitle, error);
    }
  };

  return (
    <motion.section
      ref={ref}
      id={contactData.pageId}
      className="scroll-mt-28 mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }} // Initial animation state (lower opacity)
      whileInView={{ opacity: 1 }} // Final animation state (standard opacity)
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>{contactData.pageTitle}</SectionHeading>

      <p className="text-slate-700 -mt-6 dark:text-slate-300">
        Please contact me directly at{" "}
        <a className="underline" href={`mailto:${contactData.mailTo}`}>
          {contactData.mailTo}
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-slate-300"
        action={handleSubmitAction}
      >
        <input
          name={contactData.formName}
          placeholder={contactData.formNamePlaceHolder}
          required
          maxLength={50}
          className="h-14 px-4 rounded-lg my-border-slate-300
          bg-slate-50 bg-opacity-40 focus:bg-opacity-70 dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all outline-none"
        />
        <input
          type="email"
          name={contactData.formEmail}
          placeholder={contactData.formEmailPlaceHolder}
          required
          maxLength={50}
          className="h-14 my-3 px-4 rounded-lg my-border-slate-300 
          bg-slate-50 bg-opacity-40 focus:bg-opacity-70 dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all outline-none"
        />
        <textarea
          name={contactData.formMessage}
          placeholder={contactData.formMessagePlaceHolder}
          required
          maxLength={500}
          className="h-52 my-3 rounded-lg my-border-slate-300 p-4
          bg-slate-50 bg-opacity-40 focus:bg-opacity-70 dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all outline-none"
        />
        <SubmitBtn title={contactData.submitButtonTitle} />
      </form>
    </motion.section>
  );
}
