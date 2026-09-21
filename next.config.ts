import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Allow .mdx imports alongside normal pages.
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

// Turbopack requires plugin names as strings (not function imports).
// rehype-pretty-code needs a serializable theme option, passed as [name, options].
const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [
      "rehype-slug",
      ["rehype-pretty-code", { theme: "github-dark" }],
    ],
  },
});

export default withMDX(nextConfig);
