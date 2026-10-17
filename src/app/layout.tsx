import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion-provider";
import { Navbar } from "@/components/navbar";
import { ThemeToaster } from "@/components/theme-toaster";
import { profile } from "@/data/profile";
import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";

const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.tagline,
    url: profile.siteUrl,
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.role}`,
    description: profile.tagline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${hankenGrotesk.className} bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-60 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <MotionProvider>
            <Navbar name={profile.name} />
            <main id="main">{children}</main>
            <Footer
              name={profile.name}
              github={profile.links.github}
              linkedin={profile.links.linkedin}
              x={profile.links.twitter}
            />
          </MotionProvider>
          <ThemeToaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
