/** @format */

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}
/** @format */

export type Dict<T = any> = Record<string, T>;
export interface OptionType {
  noErrorMessage?: boolean;
  noSuccessMessage?: boolean;
  errorMessage?: string;
  successMessage?: string;
}
export interface Socials {
  mail?: string | null;
  github?: string | null;
  linkedin?: string | null;
  twitter?: string | null;
  [key: string]: string | null | undefined;
}

export interface AboutSection {
  title: string;
  description: string;
}

export interface Template {
  id: string | number;
  title: string;
  link?: string;
  thumbnail?: string;
  description?: string;
  features?: string[];
  price?: string | null;
  available?: boolean;
  rating?: string;
  heroSection?: {
    headline: string;
    subHeadline: string;
    ctaText: string;
  };
  skillsSection?: string[];
  projectsSection?: Project[];
  otherSections?: string[];
  about?: AboutSection;
  socials?: Socials;
}

interface Skill {
  title: string;
  icon: any;
}

interface Project {
  id: string;
  title: string;
  link: string;
  thumbnail: string;
  description: string;
  subDescription?: string;
  tags?: string[];
  stacks?: string[];
}
