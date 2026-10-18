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
      className="contact grid justify-items-center mb-[3em] scroll-mt-[3rem]"
    >
      <h2 className="contact__header text-center text-zinc-200 mb-2">
        Let's connect.
      </h2>
      <p className="contact__subheader text-ink-muted mb-10 text-center">
        Please feel free to contact me below or at{" "}
        <span className="underline underline-offset-4">
          jsalleo13@gmail.com
        </span>
      </p>
      <form
        className="grid w-full"
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
          className="form__label mb-2 text-ink-muted rounded-lg"
        >
          <span className="text-ink-muted group grid grid-flow-col justify-start gap-x-2 leading-none">
            Email{" "}
            <MdOutlineEmail className="text-ink-muted group-focus:translate-x-1 group-focus:-translate-y-1 transition" />
          </span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="form__input border border-line/60 pl-2 py-2 rounded-lg mb-4"
          autoComplete="on"
          placeholder="you@email.com"
          maxLength={500}
          required
        />
        <label
          htmlFor="subject"
          className="text-[1em] mb-2 text-ink-muted rounded-lg"
        >
          <span className="form__label text-ink-muted group grid grid-flow-col justify-start gap-x-2 leading-none">
            Subject{" "}
            <IoEarth className="text-ink-muted group-focus:translate-x-1 group-focus:-translate-y-1 transition" />
          </span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="form__input border border-line/60 pl-2 py-2 rounded-lg mb-4"
          autoComplete="on"
          placeholder="Subject of your message..."
          maxLength={500}
          required
        />
        <label htmlFor="message" className="text-[1em] mb-3 rounded-lg">
          <span className="form__label grid grid-flow-col justify-start gap-x-2 leading-none text-ink-muted">
            Message <LuMessageCircleMore className="text-ink-muted" />
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          className="form__input pl-2 py-2 border border-line/60 rounded-lg h-40 w-[full] mb-5"
          placeholder="Your message..."
          autoComplete="on"
          maxLength={1000}
          required
        ></textarea>
        <button
          type="submit"
          className="form__button justify-self-center grid place-items-center px-9 py-3 rounded-full w-[30%] sm:w-auto max-w-30 mb-5"
        >
          Submit
        </button>
      </form>
    </section>
  );
};
