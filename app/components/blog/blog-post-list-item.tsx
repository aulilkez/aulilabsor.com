import { Link } from "react-router";
import type { Blog } from "content-collections"; // Import blog interface

interface BlogPostListItemProps {
  blog: Blog; // Use the new Post interface
}

export function BlogPostListItem({ blog }: BlogPostListItemProps) {
  return (
    <Link
      to={`/blogs/${blog.slug}`} // Changed to post.id
      className="block p-4 rounded-lg hover:bg-accent transition-colors duration-300"
    >
      <h3 className="text-xl font-semibold mb-1">{blog.title}</h3>
      <p className="text-muted-foreground text-sm mb-2">
        {blog.description}
      </p>{" "}
      {/* Changed to blog.excerpt */}
      <div className="flex items-center text-xs text-muted-foreground">
        <span>{blog.date}</span>
        <span className="mx-2">•</span>
        <span>{blog.readTime} min read</span>
      </div>
    </Link>
  );
}

