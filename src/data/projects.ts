import type { Project } from "@/types/types";

export const projects: Project[] = [
  {
    slug: "rentnest",
    title: "RentNest",
    summary:
      "Rental marketplace API: listings, rental requests, reviews, and Stripe payments.",
    highlights: [
      "Stripe checkout with webhook-confirmed payments",
      "Refresh-token auth with role-based access for admin and landlord flows",
      "Zod validation, error handling, and logging",
    ],
    stack: ["TypeScript", "Express", "Prisma", "PostgreSQL", "Stripe", "Zod"],
    links: {
      docs: "https://api.rentnest.dibbockb.com/",
      repository: "https://github.com/dibbockb/rentnest",
    },
    image: {
      src: "/projects/rentnest.png",
      alt: "RentNest database schema diagram",
    },
    featured: true,
    caseStudy: true,
  },

  {
    slug: "devpulse",
    title: "DevPulse",
    summary:
      "Issue tracker API with JWT auth, role-based permissions, and filtering.",
    highlights: [
      "bcrypt password hashing and a JWT auth flow",
      "Admin and maintainer permissions (RBAC)",
      "Filtering and sorting done in the database",
    ],
    stack: ["Node.js", "PostgreSQL", "JWT", "bcrypt"],
    links: {
      repository: "https://github.com/dibbockb/devpulse-backend",
    },
    caseStudy: false,
  },

  {
    slug: "etuitionbd",
    title: "EtuitionBD",
    summary:
      "Tutor marketplace with role-based dashboards and Stripe payments.",
    highlights: [
      "Separate dashboards per user role, with admin analytics",
      "Stripe payments",
      "Firebase Auth and TanStack Query on the client",
    ],
    stack: ["React", "Firebase", "Stripe", "TanStack Query", "Chart.js"],
    links: {
      live: "https://etuition.dibbockb.com",
      repository: "https://github.com/dibbockb/etuitionbd",
    },
    image: {
      src: "/projects/etuitionbd.png",
      alt: "EtuitionBD dashboard screenshot",
    },
    caseStudy: false,
  },
];