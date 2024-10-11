import { z } from 'astro:content';


export const teamMemberSchema =  z.object({
    firstName: z.string(),
    lastName: z.string(),
    title: z.string(),
    bio: z.string(),
    social: z.object({
      website: z.string().optional(),
      twitter: z.string().optional(),
      github: z.string().optional(),
      facebook: z.string().optional(),
      instagram: z.string().optional(),
      email: z.string().optional(),
    }).optional(),
    image: z.string().optional(),
  })