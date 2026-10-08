import type { Metadata } from "next";
import { RouteHeader } from "@/components/route-header";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Emmanuel Olafisoye about full stack engineering roles and collaborations.",
};

export default function ContactPage() {
  return (
    <main className="route-shell contact-route-shell">
      <RouteHeader href="/contact" tag="Contact" className="contact-route-header">
        <span className="contact-overline">Open to opportunities · Lagos / Remote</span>
        <h1>Have a good problem? Let&apos;s solve it.</h1>
        <p>Available for full stack engineering roles, product collaborations, and conversations about building useful technology.</p>
      </RouteHeader>
      <section className="contact-route-card">
        <div className="contact-route-main">
          <span>Start a conversation</span>
          <a className="contact-email" href="mailto:olafisoyeemmanuel7@gmail.com">olafisoyeemmanuel7@gmail.com</a>
        </div>
        <div className="contact-route-links">
          <a href="tel:+2348144563800">Phone <span>+234 814 456 3800 ↗</span></a>
          <a href="https://github.com/Emmility-king" target="_blank" rel="noopener noreferrer">GitHub <span>Emmility-king ↗</span></a>
          <a href="https://emmanuelolafisoyecom.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio <span>Visit site ↗</span></a>
          <a href="https://medium.com/@olafisoyeemmanuel7" target="_blank" rel="noopener noreferrer">Medium <span>@olafisoyeemmanuel7 ↗</span></a>
        </div>
      </section>
    </main>
  );
}
