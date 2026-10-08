import type { Metadata } from "next";
import { RouteHeader } from "@/components/route-header";

export const metadata: Metadata = {
  title: "About",
  description: "How Emmanuel Olafisoye thinks about, approaches, and builds software products.",
};

export default function AboutPage() {
  return (
    <main className="route-shell">
      <RouteHeader href="/about" tag="About" className="arc-header">
        <h1>Building products that feel effortless.</h1>
      </RouteHeader>

      <section className="route-panel story-panel">
        <div className="story-grid">
          <div>
            <p className="lead-text">
              I&apos;m Emmanuel Olafisoye, a full stack engineer with a strong focus on creating
              intuitive user experiences and scalable application architecture.
            </p>
          </div>
          <div>
            <p>
              My work blends frontend craftsmanship, backend logic, and deployment discipline.
              From learning management systems and healthcare tools to campus platforms and
              internal digital workflows, I enjoy turning complexity into clear, useful systems.
            </p>
          </div>
        </div>
      </section>

      <section className="route-panel">
        <div className="section-heading">
          <span>Approach</span>
        </div>
        <div className="split-grid">
          <div className="mini-card">
            <h3>Product-first thinking</h3>
            <p>I prioritize usability, clarity, and business value before jumping into implementation.</p>
          </div>
          <div className="mini-card">
            <h3>Engineering with integrity</h3>
            <p>I build secure, maintainable systems with attention to performance, deployment, and long-term reliability.</p>
          </div>
          <div className="mini-card">
            <h3>Practical execution</h3>
            <p>I enjoy translating ideas into working experiences that stakeholders can actually use and trust.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
