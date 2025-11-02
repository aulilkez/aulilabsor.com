import { Link } from "react-router";
import type { Blog } from "content-collections";

interface BlogPostCardProps {
  post: Blog;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link
      to={`/blogs/${post.slug}`}
      className="group block p-6 sm:p-8 border border-border rounded-xl hover:border-foreground/50 hover:bg-card/50 transition-all duration-500 hover:shadow-lg"
    >
      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="px-2.5 sm:px-3 py-1 text-xs font-medium border border-border rounded-full group-hover:border-foreground/30 transition-colors duration-300">
            {post.categories[0]}
          </span>
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-medium group-hover:text-muted-foreground transition-colors duration-300 text-balance">
            {post.title}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {post.description}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground group-hover:gap-3 transition-all duration-300">
          <span>Read article</span>
          <svg
            className="w-3 sm:w-4 h-3 sm:h-4"
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
        </div>
      </div>
    </Link>
  );
}

