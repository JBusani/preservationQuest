// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
import { gameCarouselSchema } from 'src/schemas/gameCarousel';
import { teamMemberSchema } from 'src/schemas/teamMembers';
// 2. Define your collection(s)
const teamMembersCollection = defineCollection({ 
  type: 'data',
  schema: teamMemberSchema
 });

 const gameCarouselCollection = defineCollection({
  type: 'data',
  schema: gameCarouselSchema
 })

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'teamMembers': teamMembersCollection,
  'gameCarousel': gameCarouselCollection
};