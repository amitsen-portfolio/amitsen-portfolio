"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(email, 100)) {
    return {
      error: "Invalid email",
    }
  }

  if (!validateString(message, 500)) {
    return {
      error: "Invalid message",
    }
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'admin@amitsen.info',
      subject: 'Message via contact form!',
      reply_to: email as string,
      react: React.createElement(ContactFormEmail, { 
        message: message as string, 
        senderEmail: email as string
      }),
    });
  } catch (error: unknown) {
    console.log("In the catch block");
    console.log(getErrorMessage(error));
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
