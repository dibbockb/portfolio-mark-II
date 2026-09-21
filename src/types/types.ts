export type Profile = {
  name: string;
  role: string;
  tagline: string;
  availibility: string;
  location: string;
  timezone: string;
  email: string;
  siteUrl: string;
  resume: string;
  about: string[];
  links: {
    github: string;
    linkedin: string;
    twitter: string;
  };
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links: {
    live?: string;
    docs?: string;
    repository: string;
  };
  image?: {
    src: string;
    alt: string;
  };
  featured?: boolean;
  caseStudy?: boolean;
};

export type SkillGroup = {
  label: string;
  items: string[];
};
