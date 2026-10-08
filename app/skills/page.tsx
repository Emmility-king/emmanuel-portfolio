import type { Metadata } from "next";
import {
  siCss,
  siDjango,
  siDocker,
  siExpress,
  siFigma,
  siFlutter,
  siGit,
  siGithub,
  siHtml5,
  siLinux,
  siMongodb,
  siMoodle,
  siMysql,
  siNetlify,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siTailwindcss,
  siVercel,
  siVite,
  siWebflow,
  siWordpress,
  type SimpleIcon,
} from "simple-icons";
import { RouteHeader } from "@/components/route-header";
import { ordinal } from "@/lib/site";

export const metadata: Metadata = {
  title: "Skills",
  description: "The languages, frameworks, and tools Emmanuel Olafisoye uses to ship products.",
};

const categories: {
  title: string;
  items: { name: string; icon?: SimpleIcon }[];
}[] = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: siReact },
      { name: "Next.js", icon: siNextdotjs },
      { name: "HTML5", icon: siHtml5 },
      { name: "CSS3", icon: siCss },
      { name: "Tailwind CSS", icon: siTailwindcss },
      { name: "Vite.js", icon: siVite },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: siNodedotjs },
      { name: "Express.js", icon: siExpress },
      { name: "Python", icon: siPython },
      { name: "C" },
      { name: "REST APIs" },
      { name: "Django", icon: siDjango },
    ],
  },
  {
    title: "Data & platforms",
    items: [
      { name: "MySQL", icon: siMysql },
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "MongoDB", icon: siMongodb },
      { name: "Moodle", icon: siMoodle },
      { name: "WordPress", icon: siWordpress },
      { name: "Webflow", icon: siWebflow },
    ],
  },
  {
    title: "DevOps & tools",
    items: [
      { name: "Git", icon: siGit },
      { name: "GitHub", icon: siGithub },
      { name: "Docker", icon: siDocker },
      { name: "Nginx", icon: siNginx },
      { name: "CI/CD" },
      { name: "Linux", icon: siLinux },
      { name: "AWS" },
      { name: "Vercel", icon: siVercel },
      { name: "Netlify", icon: siNetlify },
    ],
  },
  {
    title: "Mobile & design",
    items: [
      { name: "React Native", icon: siReact },
      { name: "Flutter", icon: siFlutter },
      { name: "Figma", icon: siFigma },
      { name: "Adobe Creative Suite" },
    ],
  },
];

function SkillIcon({ skill }: { skill: { name: string; icon?: SimpleIcon } }) {
  if (skill.icon) {
    return (
      <span className="skill-icon" style={{ color: `#${skill.icon.hex}` }} aria-hidden="true">
        <svg viewBox="0 0 24 24" width="15" height="15">
          <path d={skill.icon.path} />
        </svg>
      </span>
    );
  }

  const initials = skill.name
    .split(/[\s/.-]+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <span className="skill-icon skill-icon-fallback" aria-hidden="true">
      {initials}
    </span>
  );
}

export default function SkillsPage() {
  return (
    <main className="route-shell">
      <RouteHeader href="/skills" tag="Capabilities" className="skills-header">
        <h1>Tools for turning ideas into working products.</h1>
        <p>
          My toolkit spans interface engineering, backend development, databases,
          deployment, and digital product design.
        </p>
      </RouteHeader>
      <section className="skill-route-grid">
        {categories.map((group, index) => (
          <article className="skill-route-card" key={group.title}>
            <span className="skill-route-index">{ordinal(index + 1)}</span>
            <h2>{group.title}</h2>
            <div className="skill-icon-grid">
              {group.items.map((skill) => (
                <div className="skill-icon-item" key={skill.name}>
                  <SkillIcon skill={skill} />
                  <span className="skill-icon-label">{skill.name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
      <p className="route-footnote">Always learning. Always improving the way I build.</p>
    </main>
  );
}
