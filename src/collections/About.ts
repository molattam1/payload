// payload/globals/About.ts
import type { GlobalConfig } from "payload";

export const About: GlobalConfig = {
  slug: "about",
  access: { read: () => true },
  fields: [
    // SEO
    {
      type: "group",
      name: "seo",
      fields: [
        { type: "text", name: "metaTitle", localized: true },
        { type: "textarea", name: "metaDescription", localized: true },
        {
          type: "upload",
          name: "ogImage",
          relationTo: "media",
        },
      ],
    },

    // Hero
    {
      type: "group",
      name: "hero",
      fields: [
        { type: "text", name: "kicker", localized: true },
        { type: "text", name: "title", localized: true, required: false },
        { type: "textarea", name: "subtitle", localized: true },
        {
          type: "group",
          name: "primaryCTA",
          fields: [
            { type: "text", name: "label", localized: true },
            // store relative link like "/products/macropad"
            { type: "text", name: "href" },
          ],
        },
        {
          type: "group",
          name: "secondaryCTA",
          fields: [
            { type: "text", name: "label", localized: true },
            { type: "text", name: "href" },
          ],
        },
      ],
    },

    // Mission
    {
      type: "group",
      name: "mission",
      fields: [
        { type: "text", name: "title", localized: true },
        { type: "richText", name: "body", localized: true },
      ],
    },

    // Values (cards)
    {
      type: "array",
      name: "values",
      labels: { singular: "Value", plural: "Values" },
      fields: [
        { type: "text", name: "title", localized: true },
        { type: "text", name: "icon", admin: { description: "Optional lucide icon name (e.g. 'Cpu')" } },
        { type: "textarea", name: "description", localized: true },
      ],
    },

    // Stats (By the numbers)
    {
      type: "group",
      name: "stats",
      fields: [
        { type: "text", name: "title", localized: true },
        {
          type: "array",
          name: "items",
          labels: { singular: "Stat", plural: "Stats" },
          fields: [
            { type: "text", name: "value", localized: true }, // keep as text to allow "300+", "<5ms", etc.
            { type: "text", name: "label", localized: true },
          ],
        },
        {
          type: "text",
          name: "disclaimer",
          localized: true,
          admin: { description: "Small note under stats" },
        },
      ],
    },

    // Team
    {
      type: "group",
      name: "team",
      fields: [
        { type: "text", name: "title", localized: true },
        { type: "textarea", name: "blurb", localized: true },
        {
          type: "array",
          name: "members",
          labels: { singular: "Member", plural: "Members" },
          fields: [
            { type: "text", name: "name" }, // usually not localized
            { type: "text", name: "role", localized: true },
            { type: "upload", name: "avatar", relationTo: "media" },
          ],
        },
      ],
    },

    // Timeline
    {
      type: "group",
      name: "timeline",
      fields: [
        { type: "text", name: "title", localized: true },
        {
          type: "array",
          name: "items",
          fields: [
            { type: "text", name: "badge", localized: true }, // e.g. "Q1"
            { type: "text", name: "text", localized: true },
          ],
        },
      ],
    },

    // Footer CTA
    {
      type: "group",
      name: "footer",
      fields: [
        { type: "textarea", name: "pitch", localized: true },
        {
          type: "group",
          name: "cta",
          fields: [
            { type: "text", name: "label", localized: true },
            { type: "text", name: "href" }, // relative link
          ],
        },
      ],
    },
  ],
};

export default About;