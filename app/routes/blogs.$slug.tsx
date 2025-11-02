import { allBlogs, type Blog } from "content-collections"; // Import blog type
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "~/components/blocks/mdx-components";
import { Link, useParams } from "react-router";
import MainFooter from "~/components/blocks/main-footer";

export function meta({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find((p: Blog) => p.slug === params.slug); // Use allblogs and post.id
  if (!blog) {
    return [
      { title: "blog Not Found | aulilabsor.com" },
      {
        name: "description",
        content: "The blog blog you're looking for could not be found.",
      },
    ];
  }
  return [
    { title: blog.title + " | Ulil Absor Blog" },
    { name: "description", content: blog.description }, // Use blog.excerpt
  ];
}

export default function Blogblog() {
  const { slug } = useParams<{ slug: string }>();
  const blog = allBlogs.find((p: Blog) => p.slug === slug); // Changed to blog and allPosts.find((p: Post) => p.id === slug)

  if (!blog) {
    // Changed to !blog
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-light">blog not found</h1>
          <Link
            to="/blogs"
            className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 pt-12 pb-24">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 sm:text-base text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8 sm:mb-12"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Back to all articles</span>
        </Link>
        <main>
          <article className="prose dark:prose-invert mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              {blog.title}
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              {blog.description}
            </p>
            <div className="flex items-center text-sm text-muted-foreground mb-8">
              <span>By {blog.author}</span>
              <span className="mx-2">•</span>
              <span>{blog.date}</span>
              <span className="mx-2">•</span>
              <span>{blog.readTime} min read</span>
            </div>
            <img
              src={blog.thumbnail}
              alt={blog.title}
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
            <MDXContent code={blog.mdx} components={mdxComponents} />
          </article>
        </main>
      </div>

      <MainFooter
        footer={{
          copyright: "© 2024 Ulil Absor. All rights reserved.",
          crafted: "Crafted with passion and a lot of coffee.",
        }}
      />
    </>
  );
}
