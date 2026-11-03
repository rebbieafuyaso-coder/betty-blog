import { config, fields, collection } from '@keystatic/core';

const imageField = (label: string, dir: string) =>
  fields.image({
    label,
    directory: `public/images/${dir}`,
    publicPath: `/images/${dir}/`,
  });

export default config({
  storage: {
    kind: 'local', // switch to 'github' when ready for production
  },
  collections: {
    // ---------------------------------------------------------
    // 1. ARTICLES & BLOGS (Text-heavy, optional cover)
    // ---------------------------------------------------------
    articles: collection({
      label: 'Articles & Blogs',
      slugField: 'title',
      path: 'src/content/articles/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        pubDate: fields.date({ label: 'Publish Date' }),
        category: fields.select({
          label: 'Type',
          options: [
            { label: 'Article', value: 'article' },
            { label: 'Blog', value: 'blog' },
          ],
          defaultValue: 'blog',
        }),
        description: fields.text({ label: 'Short Description (for SEO & previews)', multiline: true }),
        cover: imageField('Cover Image', 'articles'),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/articles',
              publicPath: '../../assets/images/articles/',
            },
          },
        }),
      },
    }),

    // ---------------------------------------------------------
    // 2. RESEARCH PUBLICATIONS (Summary + Download Link)
    // ---------------------------------------------------------
    research: collection({
      label: 'Research Publications',
      slugField: 'title',
      path: 'src/content/research/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        pubDate: fields.date({ label: 'Publish Date' }),
        summary: fields.text({ label: 'Summary / Abstract', multiline: true }),
        downloadUrl: fields.url({ label: 'Link to Download Paper (PDF, DOI, etc.)' }),
        cover: imageField('Cover / Thumbnail', 'research'),
        content: fields.markdoc({ label: 'Full Content (optional)' }),
      },
    }),

    // ---------------------------------------------------------
    // 3. BOOKS (Blurb + Purchase Link + Cover)
    // ---------------------------------------------------------
    books: collection({
      label: 'Books',
      slugField: 'title',
      path: 'src/content/books/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        pubDate: fields.date({ label: 'Publication Date' }),
        blurb: fields.text({ label: 'Blurb / About the Book', multiline: true }),
        purchaseUrl: fields.url({ label: 'Link to Buy / Read Book' }),
        cover: imageField('Book Cover', 'books'),
        content: fields.markdoc({ label: 'Additional Details (optional)' }),
      },
    }),
  },
});