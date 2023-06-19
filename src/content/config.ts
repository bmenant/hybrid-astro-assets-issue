import { defineCollection, z } from "astro:content";

const imgCollection = defineCollection({
  schema: ({ image }) => z.object({
    img: image(),
  }),
});

export const collections = {
  img: imgCollection,
};
