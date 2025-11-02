import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";
import remarkGfm from "remark-gfm"; // Import remarkGfm
import rehypePrettyCode from "rehype-pretty-code"; // Import rehypePrettyCode

const blogs = defineCollection({
  name: "blogs",
  directory: "./app/content/blogs",
  include: "**/*.mdx",
  schema: z.object({
    thumbnail: z.string(),
    title: z.string(),
    description: z.string().min(50).max(150),
    date: z.string(),
    author: z.string(),
    readTime: z.number(),
    categories: z.array(z.string()),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: "dracula",
          },
        ],
      ],
    });
    const slug = document._meta.path.replace(/\.mdx$/, "");

    // Calculate reading time (assuming 200 words per minute)
    const wordCount = document.content.split(/\s+/).filter(Boolean).length;
    const readTime = Math.ceil(wordCount / 200);

    // Format date
    const date = new Date(document.date);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    return {
      ...document,
      date: formattedDate,
      readTime,
      slug,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [blogs],
});
