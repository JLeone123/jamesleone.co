import React from "react";

// Plain <a> to an in-page anchor: the browser scrolls to #contact using the
// smooth scroll-behavior set on <html> (see app/layout.tsx). Next's <Link>
// handles hash links itself and can jump instead of gliding.
export const ContactButton = () => {
  return (
    <a className="contact-button__link" href="#contact">
      Let&apos;s connect!
    </a>
  );
};
