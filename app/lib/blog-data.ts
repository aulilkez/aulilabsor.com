import { allBlogs, type Blog } from "content-collections";

export interface Post {
  id: string; // Maps to blog.slug
  slug: string; // Keep slug for consistency if needed elsewhere
  thumbnail: string;
  title: string;
  excerpt: string; // Maps to blog.description
  date: string;
  author: string;
  readTime: number;
  category: string; // Maps to blog.categories[0]
  categories: string[]; // Keep original categories array
}

export const allPosts: Post[] = allBlogs.map((blog) => ({
  id: blog.slug,
  slug: blog.slug,
  thumbnail: blog.thumbnail,
  title: blog.title,
  excerpt: blog.description, // Map description to excerpt
  date: blog.date,
  author: blog.author,
  readTime: blog.readTime,
  category: blog.categories[0] || "Uncategorized", // Take the first category
  categories: blog.categories,
}));

export const categories = [
  "All",
  ...new Set(allBlogs.flatMap((blog: Blog) => blog.categories)),
];

