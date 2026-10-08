import type { Metadata } from "next";
import { RouteHeader } from "@/components/route-header";

export const metadata: Metadata = {
  title: "Education",
  description: "Emmanuel Olafisoye's academic background, professional training, and community leadership.",
};

const training = [
  "Web Development — NIIT",
  "Advanced JavaScript & React.js — Edo Innovates",
  "Digital Literacy Trainer — Tech4Dev",
];

const leadership = [
  "Vice President — Educational Development Group (EDG)",
  "Deputy Chief Liaison Officer — Nigerian Air Force (NYSC, 2022)",
  "Presiding Officer — INEC Nigeria, 2023 General Elections",
];

export default function EducationPage() {
  return (
    <main className="route-shell">
      <RouteHeader href="/education" tag="Education" className="education-route-header">
        <h1>Learning is part of the work.</h1>
        <p>Academic foundations, practical training, and leadership experiences that continue to shape how I work.</p>
      </RouteHeader>

      <section className="education-route-grid">
        <article className="education-feature">
          <span className="education-kicker">Academic foundation</span>
          <h2>B.Sc. Computer Science</h2>
          <p>Wellspring University</p>
          <time dateTime="2017-09/2021-01">September 2017 — January 2021</time>
        </article>
        <article className="education-list-card">
          <span className="education-kicker">Additional training</span>
          <ul>
            {training.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      </section>

      <section className="route-panel leadership-route-panel">
        <span className="education-kicker">Leadership & community</span>
        <h2>Service beyond the screen.</h2>
        <ul className="leadership-route-list">
          {leadership.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </main>
  );
}
