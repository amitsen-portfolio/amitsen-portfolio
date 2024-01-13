import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";
import { contactData } from "@/lib/data";

export default function SubmitBtn({ title }: { title: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-slate-800 text-slate-100 rounded-full outline-none transition-all hover:scale-110 hover:bg-slate-950 cursor-pointer disabled:scale-100 disabled:bg-opacity-65 dark:bg-slate-50 dark:bg-opacity-10 dark:text-slate-300"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          {title} <FaPaperPlane className="text-xs opacity-70 transition-all" />{" "}
        </>
      )}
    </button>
  );
}
