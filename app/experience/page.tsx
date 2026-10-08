import type { Metadata } from "next";
import { MotionScope } from "@/components/motion-scope";
import { RouteHeader } from "@/components/route-header";
import { ordinal } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experience",
  description: "Emmanuel Olafisoye's career timeline across engineering, systems, and teaching roles.",
};

const experiences = [
  {
    role: "Senior System Analyst and Senior Frontend Developer",
    company: "Wellspring University & Hotview",
    period: "June 2025 – Present",
    details: [
      "Develop a university portal and maintain network operations.",
      "Create a health management system and develop a proptech application.",
      "Connect APIs securely and maintain application integrity.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Moricol Healthcare LTD",
    period: "Feb 2025 – May 2025",
    details: [
      "Optimized the website for performance, SEO, and maintainability.",
      "Designed social media graphics and implemented digital campaigns.",
      "Built tools for content management and client onboarding.",
    ],
  },
  {
    role: "System Programmer & Full Stack Developer",
    company: "Ambrose Alli University & Kyrus Recycling",
    period: "Oct 2023 – Feb 2025",
    details: [
      "Built Teklearn LMS using React.js, Node.js, and MySQL.",
      "Developed result processing and reporting tools with secure authentication.",
      "Managed Linux deployment, backups, uptime, and system maintenance.",
    ],
  },
  {
    role: "Frontend Developer & Instructor",
    company: "Edo Innovates & Tech4Dev",
    period: "Feb 2023 – Oct 2023",
    details: [
      "Trained 800+ public servants and 100+ learners in digital literacy and web development.",
      "Delivered instruction in Google Workspace, HTML, CSS, and React.js.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <MotionScope variant="timeline" as="main" className="route-shell">
      <RouteHeader href="/experience" tag="Experience" className="timeline-header">
        <h1>Career timeline</h1>
      </RouteHeader>

      <section className="timeline-wrap">
        {experiences.map((exp, index) => (
          <article key={exp.role} className="timeline-item">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-card">
              <div className="timeline-meta">
                <span className="timeline-index">{ordinal(index + 1)}</span>
                <time>{exp.period}</time>
              </div>
              <h2>{exp.role}</h2>
              <h3>{exp.company}</h3>
              <ul>
                {exp.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </MotionScope>
  );
}
