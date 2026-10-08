import type { Metadata } from "next";
import { RouteHeader } from "@/components/route-header";
import { ordinal } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected platforms, tools, and product ideas built by Emmanuel Olafisoye.",
};

const projects = [
  { title: "Teklearn LMS", category: "Education technology", description: "A learning portal for student onboarding, course management, and exams.", stack: ["React.js", "Node.js", "MySQL"], color: "coral" },
  { title: "TrashPoint", category: "Waste management", description: "A digital platform built to support waste management workflows and reporting.", stack: ["Next.js", "Node.js"], color: "blue" },
  { title: "Churn System", category: "Data & analytics", description: "A data analytics tool for customer churn prediction and decision support.", stack: ["Analytics", "Reporting"], color: "lime" },
  { title: "Neurorest-ai", category: "AI & wellness", description: "A predictive cognitive AI concept focused on sleep-related insights.", stack: ["AI", "Data"], color: "violet" },
  { title: "Safeline", category: "Community safety", description: "Anonymous crime reporting designed to make reporting more direct and accessible.", stack: ["Web app", "Security"], color: "yellow" },
  { title: "CampusCare", category: "Campus services", description: "A campus complaint platform for clearer communication and issue tracking.", stack: ["Portal", "UX"], color: "mint" },
];

export default function ProjectsPage() {
  return (
    <main className="route-shell">
      <RouteHeader href="/projects" tag="Selected work" className="project-route-header">
        <h1>Projects built around real problems.</h1>
        <p>A selection of platforms, tools, and product ideas across education, data, safety, and wellness.</p>
      </RouteHeader>
      <section className="project-route-grid">
        {projects.map((project, index) => (
          <article className="project-route-card" key={project.title}>
            <div className={`project-art project-art-${project.color}`} aria-hidden="true">
              <span>{ordinal(index + 1)}</span>
              <span className="project-art-mark" aria-hidden="true">✳</span>
            </div>
            <div className="project-route-body">
              <span className="project-category">{project.category}</span>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-page-stack">
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
