export const site = {
  name: "Emmanuel Olafisoye",
  role: "Full Stack Engineer",
  description:
    "Portfolio of Emmanuel Olafisoye, a full stack engineer building scalable web and mobile products.",
};

export const sections = [
  { href: "/about", title: "About", description: "How I think, work, and build." },
  { href: "/experience", title: "Experience", description: "A timeline of roles and impact." },
  { href: "/skills", title: "Skills", description: "Tools I use to ship reliable products." },
  { href: "/projects", title: "Projects", description: "Products and ideas brought to life." },
  { href: "/education", title: "Education", description: "Education, training, and community leadership." },
  { href: "/contact", title: "Contact", description: "Start a conversation or collaboration." },
] as const;

export type SectionHref = (typeof sections)[number]["href"];

/** Zero-padded ordinal used for card and section numbering, e.g. 1 -> "01". */
export function ordinal(n: number) {
  return String(n).padStart(2, "0");
}

export function sectionNumber(href: SectionHref) {
  return ordinal(sections.findIndex((section) => section.href === href) + 1);
}
