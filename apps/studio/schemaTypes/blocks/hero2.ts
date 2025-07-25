import { Star } from "lucide-react";
import { defineField, defineType } from "sanity";

import { buttonsField, richTextField } from "../common";

export const hero2 = defineType({
  name: "hero2",
  title: "Hero 2",
  icon: Star,
  type: "object",
  fields: [
    defineField({
      name: "badge",
      type: "string",
      title: "Badge",
      description:
        "Optional badge text displayed above the title, useful for highlighting new features or promotions",
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description:
        "The main heading text for the hero section that captures attention",
    }),
    richTextField,
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      description:
        "The main hero image - should be high quality and visually impactful",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "backgroundColor",
      type: "string",
      title: "Background Color",
      description: "Choose a background color for the hero section",
      options: {
        list: [
          { title: "White", value: "white" },
          { title: "Gray", value: "gray" },
          { title: "Blue", value: "blue" },
          { title: "Green", value: "green" },
        ],
      },
      initialValue: "white",
    }),
    defineField({
      name: "layout",
      type: "string",
      title: "Layout",
      description: "Choose the layout for the hero section",
      options: {
        list: [
          { title: "Image Left", value: "image-left" },
          { title: "Image Right", value: "image-right" },
          { title: "Centered", value: "centered" },
        ],
      },
      initialValue: "image-right",
    }),
    buttonsField,
  ],
  preview: {
    select: {
      title: "title",
      layout: "layout",
    },
    prepare: ({ title, layout }) => ({
      title,
      subtitle: `Hero 2 Block - ${layout || "image-right"}`,
    }),
  },
});
