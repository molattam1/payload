// payload/src/globals/HomePage.ts
import type { GlobalConfig } from "payload";

export const HomePage: GlobalConfig = {
  slug: "homepage",
  label: "Homepage",
  access: {
    read: () => true,
  },
  fields: [
    // HERO
    {
      name: "hero",
      type: "group",
      label: "Hero Section",
      fields: [
        { name: "title", type: "text", required: true, localized: true },
        { name: "subtitle", type: "textarea", localized: true },
        { name: "primaryCTA", type: "text", localized: true },
        { name: "secondaryCTA", type: "text", localized: true },
        { name: "primaryLink", type: "text" },
        { name: "secondaryLink", type: "text" },
        { name: "badge", type: "text", localized: true },
        { name: "tag1", type: "text", localized: true},
        { name: "tag2", type: "text", localized: true},
        { name: "tag3", type: "text", localized: true},
        {
          name: "deviceImage",
          type: "upload",
          relationTo: "media",
        },
      ],
    },

    // FEATURES GRID
    {
      name: "features",
      type: "array",
      label: "Features Grid",
      labels: {
        singular: "Feature",
        plural: "Features",
      },
      fields: [
        { name: "title", type: "text", required: true, localized: true },
        { name: "description", type: "textarea", localized: true },
        {
          name: "style",
          type: "select",
          options: [
            { label: "Big", value: "big" },
            { label: "Icon", value: "icon" },
            { label: "Shape", value: "shape" },
            { label: "Tall", value: "tall" },
            { label: "Wide", value: "wide" },
          ],
          defaultValue: "icon",
        },
        { name: "icon", type: "text" },
      ],
    },

    // SHOWCASE / GALLERY
    {
      name: "gallery",
      type: "group",
      label: "Gallery",
      fields: [
        { name: "title", type: "text", required: true, localized: true },
        { name: "description", type: "textarea", localized: true },
        {
          name: "items",
          type: "array",
          label: "Items",
          labels: {
            singular: "Item",
            plural: "Items",
          },
          fields: [
            { name: "label", type: "text", localized: true },
            { name: "image", type: "upload", relationTo: "media" },
          ]
        }
      ],
    },

    // TESTIMONIALS
    {
      name: "testimonials",
      type: "group",
      label: "Testimonials Section",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Section Title",
          localized: true,
        },
        {
          name: "description",
          type: "textarea",
          label: "Section Description",
          localized: true,
        },
        {
          name: "items",
          type: "array",
          label: "Testimonials",
          labels: {
            singular: "Testimonial",
            plural: "Testimonials",
          },
          fields: [
            { name: "quote", type: "textarea", required: true, localized: true },
            { name: "name", type: "text", required: true, localized: true },
            { name: "role", type: "text", required: false, localized: true },
          ],
        },
      ],
    },

    // FAQ
    {
      name: "faq",
      type: "group",
      label: "FAQ Section",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Section Title",
          localized: true,
          defaultValue: "Frequently Asked",
        },
        {
          name: "items",
          type: "array",
          label: "FAQ Items",
          labels: { singular: "FAQ Item", plural: "FAQ Items" },
          fields: [
            {
              name: "q",
              type: "text",
              label: "Question",
              required: true,
              localized: true,
            },
            {
              name: "a",
              type: "textarea",
              label: "Answer",
              required: true,
              localized: true,
            },
          ],
        },
      ],
    },

    // CTA
    {
      name: "cta",
      type: "group",
      label: "Call To Action",
      fields: [
        { name: "headline", type: "text", localized: true },
        { name: "description", type: "textarea", localized: true },
        { name: "ctaLabel", type: "text", localized: true },
        { name: "ctaLink", type: "text" },
      ],
    },

    // TICKER
    {
      name: "ticker",
      type: "text",
      label: "Ticker Text",
      localized: true,
    },
  ],
};

export default HomePage;
