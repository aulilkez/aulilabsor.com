import { Link } from "react-router";
import { BlogPostCard } from "~/components/blog/blog-post-card"; // Corrected path
import { type Blog } from "content-collections";

// interface Blog {
//   slug: string;
//   thumbnail: string;
//   title: string;
//   description: string;
//   date: string;
//   readTime: number;
//   categories: string[];
//   // Add 'featured' if it's going to be used for filtering outside
// }

interface BlogsSectionProps {
  sectionRef: (el: HTMLElement | null) => void;
  posts: Blog[]; // Data passed as parameter
}

export function BlogsSection({ sectionRef, posts }: BlogsSectionProps) {
  return (
    <section
      id="blogs"
      ref={sectionRef}
      className="min-h-screen py-16 sm:py-20 lg:py-32 opacity-0"
    >
      <div className="space-y-8 sm:space-y-12 lg:space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
              <span className="text-xs sm:text-sm font-mono text-muted-foreground">
                INSIGHTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-balance">
              Latest Articles
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
              Pemikiran seputar pengembangan web, desain, dan teknologi.
            </p>
          </div>

          <Link
            to="/blogs"
            className="group inline-flex items-center gap-2 text-sm sm:text-base text-foreground hover:text-muted-foreground transition-colors duration-300"
          >
            <span className="font-medium">Lihat semua article</span>
            <svg
              className="w-4 sm:w-5 h-4 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} /> // Changed key to post.slug
          ))}
        </div>
      </div>
    </section>
  );
}
