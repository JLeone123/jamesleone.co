import "server-only";

import { emailVerification } from "./email-verification";

export const validateInput = async (
  input: unknown,
  type: unknown,
  maxLength: unknown
): Promise<boolean> => {
  // Checking if the input, type, and maxLength exist
  let isValidated = true;
  if (!input || !type || !maxLength) {
    isValidated = false;
    return isValidated;
  }

  // Checking the types of the input, type, and maxLength
  if (
    typeof input !== "string" ||
    typeof type !== "string" ||
    typeof maxLength !== "number"
  ) {
    isValidated = false;
    return isValidated;
  }

  // Checking the length of the input
  if (input.length === 0 || input.length > maxLength) {
    isValidated = false;
    return isValidated;
  }

  // Checking if the maxLength is a valid positive integer
  if (maxLength <= 0 || !Number.isInteger(maxLength)) {
    isValidated = false;
    return isValidated;
  }

  // Checking if the type is either of the two accepted
  // types, being email and text.
  if (type !== "email" && type !== "text") {
    isValidated = false;
    return isValidated;
  }

  // Checking if the email address is valid
  /*** I can add a regex later */
  /** Make sure logs happen at each check and return */
  /** Check font errors */
  /** Add a try catch block here? */
  if (type === "email") {
    // Check if the email provided has a valid input length
    // and if there was only one email address provided.
    if (input.trim().length === 0 || input.trim().split(" ").length > 1) {
      console.error(
        "The email address needs to be only one word or there were multiple email addresses provided"
      );
      isValidated = false;
      return isValidated;
    }

    // can add regest here
    isValidated = await emailVerification(input);
    return isValidated;
  }

  return isValidated;
};

export const constructErrorMessage = (error: unknown): string => {
  let message: string;

  // Check if the error exists
  if (!error) {
    message = "An error was not provided.";
    // Check if the error is an instance of the Error class
  } else if (error instanceof Error) {
    message = error.message;
    // Check if the error is an object with a message property,
    // which can have any type
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
    // Check if the error is exists and may not necessarily
    // be a string
  } else {
    message = String(error);
  }

  return message;
};
