import { z } from "astro:content";

export const gameCarouselSchema = z.object({
    image: z.string(),
    title: z.string(),
    year: z.string()
  });
