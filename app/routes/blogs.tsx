import { useState } from "react";
import { Link } from "react-router";
import { BlogPostCard } from "~/components/blog/blog-post-card";
import { categories } from "~/lib/blog-data";
import { allBlogs, type Blog } from "content-collections";
import type { Route } from "./+types/blogs";
import { Button } from "~/components/ui/button"; // Added Button
import { ChevronDownIcon, FilterIcon } from "lucide-react"; // Added FilterIcon
import {
  // Added DropdownMenu components
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Articles & Insights | aulilabsor.com" },
    {
      name: "description",
      content:
        "Thoughts, tutorials, and insights on web development, design, and technology from Aulil Absor.",
    },
    // Open Graph
    { property: "og:title", content: "Articles & Insights | aulilabsor.com" },
    {
      property: "og:description",
      content:
        "Thoughts, tutorials, and insights on web development, design, and technology from Aulil Absor.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://aulilabsor.com/blogs" },
    {
      property: "og:image",
      content: "https://aulilabsor.com/welcome/logo-dark.svg",
    },
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Articles & Insights | aulilabsor.com" },
    {
      name: "twitter:description",
      content:
        "Thoughts, tutorials, and insights on web development, design, and technology from Aulil Absor.",
    },
    {
      name: "twitter:image",
      content: "https://aulilabsor.com/welcome/logo-dark.svg",
    },
    // Canonical
    { tagName: "link", rel: "canonical", href: "https://aulilabsor.com/blogs" },
  ];
}

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? allBlogs
      : allBlogs.filter((blog: Blog) =>
          blog.categories.includes(selectedCategory),
        );

  // Assuming 'featured' property exists in your blog posts for filtering

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-32">
        {/* Header */}
        <div className="space-y-8 mb-9">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
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
            <span>Back to home</span>
          </Link>

          <div className="space-y-4">
            <div className="inline-block px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
              <span className="text-sm font-mono text-muted-foreground">
                BLOG
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
              Articles & Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Thoughts, tutorials, and insights on web development, design, and
              technology.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <FilterIcon className="mr-2 h-4 w-4" /> {selectedCategory}{" "}
                <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "font-bold" : ""}
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* All Posts */}
        <div className="space-y-8">
          <h2 className="text-2xl font-light">
            {selectedCategory === "All"
              ? "All Articles"
              : `${selectedCategory} Articles`}
          </h2>

          <div className="grid gap-6">
            {filteredPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

