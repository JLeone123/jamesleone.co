import "server-only";

import arcjet, {
  //   createMiddleware,
  detectBot,
  request,
  sensitiveInfo,
  shield,
  slidingWindow,
} from "@arcjet/next";
import { constructErrorMessage } from "./utils";

export const aj = arcjet({
  key: process.env.ARCJET_API_KEY!,
  rules: [
    sensitiveInfo({
      mode: "LIVE",
      deny: ["CREDIT_CARD_NUMBER"],
    }),
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),
    slidingWindow({
      mode: "LIVE",
      interval: 1,
      max: 1,
    }),
  ],
});

export const checkRequest = async () => {
  let message: string = "";

  try {
    const req = await request();
    if (!req) {
      message = "Next request is not available.";
      throw new Error(message);
    }
    const decision = await aj.protect(req);

    if (!decision) {
      message = "Decision is not available.";
      throw new Error(message);
    }

    if (decision.isDenied() && decision.reason.isRateLimit()) {
      message = "Too many requests. Please try again later!";
      console.error("Too many requests.");
      throw new Error(message);
    }

    message = "Request is allowed.";
    console.log(message);
  } catch (error: unknown) {
    console.log(error);
    return {
      error: constructErrorMessage(error),
    };
  }

  return {
    message,
  };
};
