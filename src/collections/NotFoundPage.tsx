// payload/src/globals/NotFoundPage.ts
import type { GlobalConfig } from "payload";

export const NotFoundPage: GlobalConfig = {
  slug: "not-found",
  label: "404 Page",
  access: {
    read: () => true, // public
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
      defaultValue: "Page not found",
    },
    {
      name: "subtitle",
      type: "textarea",
      localized: true,
      defaultValue: "Looks like you’re lost in the void.",
    },
    {
      name: "ctaLabel",
      type: "text",
      localized: true,
      defaultValue: "Back to Home",
    },
    {
      name: "ctaLink",
      type: "text",
      defaultValue: "/",
    }
  ],
};

export default NotFoundPage;
