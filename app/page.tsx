import Image from "next/image";
import Link from "next/link";
import { MotionScope } from "@/components/motion-scope";
import { ordinal, sections } from "@/lib/site";

const stats = [
  { value: "6+", label: "Years building web and mobile apps" },
  // { value: "800+", label: "Public servants trained" },
  { value: "Lagos", label: "Open to remote and on-site roles" },
];

export default function Home() {
  return (
    <MotionScope variant="home" className="portfolio-shell">
      <header className="topbar reveal">
        <Link href="/" className="brand-mark">
          Emmanuel O.
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {sections.map((section) => (
            <Link href={section.href} key={section.href}>
              {section.title}
            </Link>
          ))}
        </nav>
        <Link className="cta-button" href="/contact">
          Let&apos;s talk
        </Link>
      </header>

      <main className="home-content">
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow reveal">
              Full Stack Engineer · Lagos, Nigeria
            </span>
            <h1 className="reveal">
              I build systems that are useful, fast, and memorable.
            </h1>
            <p className="reveal">
              I&apos;m Emmanuel Olafisoye, a full stack engineer with 6+ years
              of experience delivering web and mobile products, secure APIs, and
              scalable applications.
            </p>
            <div className="cta-row reveal">
              <Link className="primary-button" href="/projects">
                Explore my work
              </Link>
              <Link className="secondary-button" href="/experience">
                View experience
              </Link>
            </div>
            <div className="stats-row reveal">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="orb orb-one" aria-hidden="true" />
            <div className="orb orb-two" aria-hidden="true" />
            <div className="portrait-shell">
              <Image
                src="/me.jpg"
                alt="Portrait of Emmanuel Olafisoye"
                width={620}
                height={760}
                sizes="(max-width: 900px) 100vw, 50vw"
                preload
              />
            </div>
            <div className="floating-card floating-card-top" aria-hidden="true">
              React · Next.js
            </div>
            <div
              className="floating-card floating-card-bottom"
              aria-hidden="true"
            >
              Node · APIs
            </div>
          </div>
        </section>

        <section className="route-directory" aria-label="Portfolio sections">
          <div className="directory-heading reveal">
            <span className="section-label">Explore</span>
            <p>One portfolio, six different sides of my work.</p>
          </div>
          <div className="directory-grid">
            {sections.map((section, index) => (
              <Link
                className="directory-card reveal"
                href={section.href}
                key={section.href}
              >
                <span>{ordinal(index + 1)}</span>
                <div>
                  <h2>{section.title}</h2>
                  <p>{section.description}</p>
                </div>
                <span className="directory-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </MotionScope>
  );
}
