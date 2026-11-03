// @ts-ignore
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date().optional(),
    category: z.enum(['article', 'blog']).default('blog'),
    description: z.string().optional(),
    cover: z.string().optional(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date().optional(),
    summary: z.string(),
    downloadUrl: z.string().url(),
    cover: z.string().optional(),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date().optional(),
    blurb: z.string(),
    purchaseUrl: z.string().url(),
    cover: z.string().optional(),
  }),
});

export const collections = { posts, articles, research, books };