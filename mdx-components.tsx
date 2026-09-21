import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import type { AnchorHTMLAttributes, ImgHTMLAttributes } from "react";

// External links open in a new tab; anchor links stay in-page.
function Link({
  href,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = href?.startsWith("http");
  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}

// next/image wrapper so MDX images get optimization without layout shift.
function MdxImage({ src, alt }: ImgHTMLAttributes<HTMLImageElement>) {
  if (!src || typeof src !== "string") return null;
  return (
    <Image
      src={src}
      alt={alt ?? ""}
      width={900}
      height={560}
      sizes="(max-width: 768px) 100vw, 800px"
      className="h-auto w-full rounded-[12px] border border-border"
    />
  );
}

export function useMDXComponents(): MDXComponents {
  return {
    a: Link,
    img: MdxImage,
    // Keep code blocks readable on the dark theme.
    pre: ({ children, ...props }) => (
      <pre
        className="overflow-x-auto rounded-[12px] border border-border bg-card p-4 text-sm"
        {...props}
      >
        {children}
      </pre>
    ),
    code: ({ children, ...props }) => (
      <code className="rounded bg-card px-1 py-0.5 text-sm" {...props}>
        {children}
      </code>
    ),
  };
}
