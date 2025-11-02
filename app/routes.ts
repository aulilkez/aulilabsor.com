import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("blogs", "routes/blogs.tsx"),
  route("blogs/:slug", "routes/blogs.$slug.tsx"),
  route("*", "./routes/not-found.tsx"),
] satisfies RouteConfig;
