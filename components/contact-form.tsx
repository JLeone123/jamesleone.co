// abstract
"use client";

import React from "react";
import { LuMessageCircleMore } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { IoEarth } from "react-icons/io5";
import { sendForm } from "@/actions/sendForm";
import toast from "react-hot-toast";

export const ContactForm = () => {
  return (
    <section
      id="contact"
      className="contact h-[100svh] flex flex-col justify-center items-center max-w-[56rem]"
    >
      <h2 className="contact__header text-center text-zinc-200 mb-2">
        Let's connect.
      </h2>
      <p className="contact__subheader text-slate-300 mb-10 text-center">
        Please feel free to contact me below or at{" "}
        <span className="underline">jsalleo13@gmail.com</span>
      </p>
      <form
        className="flex flex-col w-[100%] max-w-[56rem]"
        action={async (formData) => {
          const { data, error } = await sendForm(formData);

          if (data) {
            toast.success(data);
          }

          if (error) {
            toast.error(error);
          }
        }}
      >
        <label
          htmlFor="email"
          className="form__label mb-2 text-slate-300 rounded-lg"
        >
          <span className="text-slate-300 group flex gap-x-2 leading-none">
            Email{" "}
            <MdOutlineEmail className="text-slate-300 group-focus:translate-x-1 group-focus:-translate-y-1 transition" />
          </span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="form__input border border-zinc-200 pl-2 py-2 rounded-lg mb-4"
          placeholder="you@email.com"
          maxLength={500}
          required
        />
        <label
          htmlFor="subject"
          className="text-[1em] mb-2 text-slate-300 rounded-lg"
        >
          <span className="form__label text-slate-300 group flex gap-x-2 leading-none">
            Subject{" "}
            <IoEarth className="text-slate-300 group-focus:translate-x-1 group-focus:-translate-y-1 transition" />
          </span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="form__input border border-zinc-200 pl-2 py-2 rounded-lg mb-4"
          placeholder="Subject of your message..."
          maxLength={500}
          required
        />
        <label htmlFor="message" className="text-[1em] mb-2 rounded-lg">
          <span className="form__label flex gap-x-2 leading-none text-slate-300">
            Message <LuMessageCircleMore className="text-slate-300" />
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          className="form__input pl-2 py-2 border border-zinc-200 rounded-lg h-40 w-[full] mb-5"
          placeholder="Your message..."
          maxLength={1000}
          required
        ></textarea>
        <button
          type="submit"
          className="form__button self-start flex items-center justify-center bg-zinc-100 text-zinc-800/90 border-zinc-800/90 px-9 py-3 rounded-full w-[25%]"
        >
          Submit
        </button>
      </form>
    </section>
  );
};
