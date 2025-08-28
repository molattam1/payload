// payload/globals/footer.ts
import type { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
  slug: "footer",
  access: { read: () => true },
  fields: [
    {
      name: "brand",
      type: "group",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "tagline", type: "text" },
        { name: "email", type: "email" },
      ],
    },
    {
      name: "socials",
      type: "array",
      fields: [
        { name: "label", type: "text" },
        { name: "url", type: "text" },
        { name: "icon", type: "text" },
      ],
    },
    {
      name: "columns",
      type: "array",
      fields: [
        { name: "title", type: "text" },
        {
          name: "links",
          type: "array",
          fields: [
            { name: "label", type: "text" },
            { name: "href", type: "text" },
          ],
        },
      ],
    },
    { name: "legalNote", type: "text" },
  ],
};

export default Footer;