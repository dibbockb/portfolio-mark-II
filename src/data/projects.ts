import type { Project } from "@/types/types";

export const projects: Project[] = [
  {
    slug: "workmatch",
    title: "WorkMatch",
    summary:
      "A role-based freelance and job listing marketplace. Clients post jobs, freelancers pitch with proposals, and payment runs through Stripe Checkout, all managed from one dashboard.",
    highlights: [
      "RBAC enforced at two layers: an edge proxy that verifies the JWT, and a client-side guard in each dashboard shell",
      "Silent session refresh with a single-flight refresh lock, concurrent 401s trigger one refresh request",
      "Runtime-validated API responses with Zod schemas",
    ],
    stack: ["NextJs", "TypeScript", "Express", "PostgreSQL", "Prisma", "Stripe", "Tanstack Query"],
    links: {
      live: "https://workmatch.dibbockb.com/",
      repository: "https://github.com/dibbockb/workmatch",
      docs: "https://documenter.getpostman.com/view/54867039/2sBYHQ2NuZ"
    },
    image: {
      src: "https://res.cloudinary.com/lpqu4s3d/video/upload/v1791710613/workmatch_demo.mp4",
      alt: "workmatch landing page",
    },
    featured: true,
    caseStudy: false,
  },
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
      live: "https://rentnest.dibbockb.com/",
      repository: "https://github.com/dibbockb/rentnest",
    },
    image: {
      src: "https://res.cloudinary.com/lpqu4s3d/image/upload/v1790847592/image_454.png",
      alt: "RentNest landing page",
    },
    featured: false,
    caseStudy: false,
  },
  // ---
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
      src: "https://res.cloudinary.com/lpqu4s3d/image/upload/v1790847585/955EAF10-3F2A-473A-B194-C22847FFFA50.png",
      alt: "EtuitionBD landing page",
    },
    caseStudy: false,
  },

  // ---
  // {
  //   slug: "devpulse",
  //   title: "DevPulse",
  //   summary:
  //     "Issue tracker API with JWT auth, role-based permissions, and filtering.",
  //   highlights: [
  //     "bcrypt password hashing and a JWT auth flow",
  //     "Admin and maintainer permissions (RBAC)",
  //     "Filtering and sorting done in the database",
  //   ],
  //   stack: ["Node.js", "PostgreSQL", "JWT", "bcrypt"],
  //   links: {
  //     repository: "https://github.com/dibbockb/devpulse-backend",
  //   },
  //   // image: {
  //   // src: "https://res.cloudinary.com/lpqu4s3d/image/upload/v1790847897/19641EC9-1862-471E-9FC3-9907FD5576D3.png",
  //   // alt: "Devpulse server homepage"
  //   // },
  //   caseStudy: false,
  // },

];