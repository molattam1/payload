import { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  labels: {
    singular: "Testimonial",
    plural: "Testimonials",
  },
  admin: {
    useAsTitle: "authorName",
    defaultColumns: ["authorName", "role", "createdAt"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "quote",
      type: "textarea",
      required: true,
      label: "Testimonial Text",
      localized: true,
    },
    {
      name: "authorName",
      type: "text",
      required: true,
      label: "Author Name",
      localized: true,
    },
    {
      name: "role",
      type: "text",
      label: "Author Role / Company",
      localized: true,
    },
    {
      name: "authorImage",
      type: "upload",
      relationTo: "media",
      label: "Author Image",
      required: false,
    },
    {
      name: "featured",
      type: "checkbox",
      label: "Featured",
      defaultValue: false,
    },
  ],
};
