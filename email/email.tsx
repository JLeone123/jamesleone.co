import React from "react";

type EmailProps = {
  email: string;
  subject: string;
  message: string;
};

export const Email = ({ email, subject, message }: EmailProps) => {
  return (
    <section className="ml-4">
      <h1 className="text-zinc-950 font-normal">
        Subject: "{subject}" from your Contact Form
      </h1>
      <hr className="w-[95%] bg-zinc-300 rounded-md mb-3"></hr>
      <h2 className="text-zinc-950 font-normal">From: {email}</h2>
      <p className="text-zinc-950 font-normal">{message}</p>
    </section>
  );
};
