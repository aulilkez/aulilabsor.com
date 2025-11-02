import { paths } from "~/config/paths";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-4">
          <div className="inline-block">
            <h1 className="text-9xl sm:text-[12rem] font-light text-foreground/90 leading-none">
              404
            </h1>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-light text-balance">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            to={paths.home.path}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all duration-300"
          >
            <svg
              className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="font-medium">Back to Home</span>
          </Link>

          <Link
            to="/chat"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:border-foreground/50 hover:bg-accent/50 transition-all duration-300"
          >
            <span className="font-medium">Contact Me</span>
          </Link>
        </div>

        <div className="pt-8 border-t border-border/50 max-w-md mx-auto">
          <p className="text-sm text-muted-foreground">
            Lost? Try navigating from the{" "}
            <Link
              to={paths.home.path}
              className="text-foreground hover:underline"
            >
              homepage
            </Link>{" "}
            or{" "}
            <Link
              to={paths.blogs.path}
              className="text-foreground hover:underline"
            >
              browse articles
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
