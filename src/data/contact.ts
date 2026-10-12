import type { ContactPage } from "./types";

/** The words on the Contact page (the form itself is not editable). */
export const contactPage: ContactPage = {
  hero: {
    eyebrow: "Get In Touch",
    title: "Let's Talk About [[Your Project]]",
    sub: "Free consultations, no obligation. Tell us what you're working on and we'll be in touch.",
  },
  expect: {
    eyebrow: "No Pressure",
    title: "What to [[Expect]]",
    steps: [
      { title: "We Listen", text: "We hear your vision first, before we talk numbers or timelines." },
      { title: "Site Visit", text: "We schedule a free on-site walkthrough to properly scope the work." },
      {
        title: "Written Estimate",
        text: "Detailed, itemized estimate, no vague ballparks or hidden costs.",
      },
      { title: "We Build", text: "You say go, we get to work, on time, on budget, every time." },
    ],
  },
  form: { eyebrow: "Free Estimate", title: "Tell Us About Your Project" },
  success: { title: "Message Sent", text: "Thanks for reaching out. We'll be in touch soon." },
};
