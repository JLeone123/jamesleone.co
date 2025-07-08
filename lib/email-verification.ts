import "server-only";

import Emailable from "emailable";
import { Resend } from "resend";
import { Email } from "@/email/email";
import { constructErrorMessage } from "./utils";

export const emailVerification = async (email: string): Promise<boolean> => {
  let message: string = "";
  const apiTestKey: string | undefined = process.env.EMAILABLE_API_KEY_TEST;
  const apiLiveKey: string | undefined =
    process.env.EMAILABLE_API_KEY_PRODUCTION;

  const apiKey: string | undefined =
    process.env.NODE_ENV === "development" ? apiTestKey : apiLiveKey;

  const emailable = Emailable(apiKey);

  try {
    if (!apiKey || typeof apiKey !== "string" || apiKey.trim().length === 0) {
      throw new Error("Emailable API key is not set.");
    }

    if (!email || typeof email !== "string" || email.trim().length === 0) {
      throw new Error("An email was not provided");
    }

    const value = await emailable.verify(email, { apiKey });
    console.log(value);

    if (
      (value &&
        typeof value === "object" &&
        "state" in value &&
        value.state === "deliverable") ||
      value.state === "risky"
    ) {
      console.log("Email is verified");
    } else if (
      typeof value === "object" &&
      "state" in value &&
      value.state === "undeliverable"
    ) {
      throw new Error("Email is invalid");
    } else {
      throw new Error("Email verification failed");
    }
  } catch (error: unknown) {
    const message = constructErrorMessage(error);
    console.error(message);
    return false;
  }
  message = "Email verification was successful!";
  console.log(message);
  return true;
};

export const sendEmail = async (
  email: string,
  subject: string,
  message: string
) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  let data: string = "";

  try {
    const { data: resendData } = await resend.emails.send({
      from: `${email} <onboarding@resend.dev>`,
      to: "jsalleo13@gmail.com",
      subject,
      react: Email({ email, subject, message }),
    });

    // Can be written better just because there is an id
    // here does not mean that the email exists. The
    // function cannot work if the email is unverified.
    if (
      resendData &&
      typeof resendData === "object" &&
      "id" in resendData &&
      typeof resendData.id === "string" &&
      resendData.id.length > 0
    ) {
      data = "Email sent successfully!";
    } else {
      data = "The email was not sent successfully";
      throw data;
    }
  } catch (error: unknown) {
    console.error(data);
    return {
      error: constructErrorMessage(error),
    };
  }
  return {
    data,
  };
};
