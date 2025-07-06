import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// News collection schema
const newsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('Khoa Lan'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    category: z.enum(['thong-bao', 'khuyến-mai', 'san-pham-moi', 'su-kien', 'huong-dan']).default('thong-bao'),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  news: newsCollection,
}; 