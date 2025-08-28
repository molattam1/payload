// payload/src/globals/HomePage.ts
import type { GlobalConfig } from "payload";

export const HomePage: GlobalConfig = {
  slug: "homepage",
  label: "Homepage", // 👈 optional, but makes admin nicer
  access: {
    read: () => true, // public
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
        { name: "primaryLink", type: "text" },
        { name: "secondaryCTA", type: "text", localized: true },
        { name: "secondaryLink", type: "text" },
        {
          name: "deviceImage",
          type: "upload",
          relationTo: "media", // make sure your media collection exists
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
      type: "array",
      label: "Gallery",
      labels: {
        singular: "Gallery Item",
        plural: "Gallery Items",
      },
      fields: [
        { name: "label", type: "text", localized: true },
        { name: "image", type: "upload", relationTo: "media" },
      ],
    },

    // TESTIMONIALS
    {
      name: "testimonials",
      type: "array",
      label: "Testimonials",
      labels: {
        singular: "Testimonial",
        plural: "Testimonials",
      },
      fields: [
        { name: "quote", type: "textarea", required: true, localized: true },
        { name: "name", type: "text", required: true, localized: true },
        { name: "role", type: "text", localized: true },
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
