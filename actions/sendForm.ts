"use server";

// will implement schema validation.
import { constructErrorMessage, validateInput } from "@/lib/utils";

import { checkRequest } from "@/lib/middleware";
import { sendEmail } from "@/lib/email-verification";

type SendFormResponse = Promise<
  | {
      data: string;
      error?: undefined;
    }
  | {
      error: string;
      data?: undefined;
    }
>;

export const sendForm = async (formData: FormData): SendFormResponse => {
  let data: string = "";

  try {
    const { error } = await checkRequest();

    if (error) {
      return { error: constructErrorMessage(error) };
    }

    if (!formData || !(formData instanceof FormData)) {
      throw new Error("Form data not provided");
    }

    // validate formData with schema validation
    // currently validating formData with only TypeScript
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const emailIsValidated = await validateInput(email, "email", 500);
    const subjectIsValidated = await validateInput(subject, "text", 500);
    const messageIsValidated = await validateInput(message, "text", 1000);

    if (!emailIsValidated || !subjectIsValidated || !messageIsValidated) {
      data = "Invalid email, subject, or message input provided";
      throw data;
    }

    const validatedEmail = email.trim();
    const validatedSubject = subject.trim();
    const validatedMessage = message.trim();

    const res = await sendEmail(
      validatedEmail,
      validatedSubject,
      validatedMessage
    );

    if (res.error) {
      throw new Error(res.error);
    }
    data = res.data as string;
  } catch (error: unknown) {
    const message = constructErrorMessage(error);
    console.error(message);
    return {
      data: undefined,
      error: constructErrorMessage(message) as string,
    };
  }

  return {
    data,
    error: undefined,
  };
};
