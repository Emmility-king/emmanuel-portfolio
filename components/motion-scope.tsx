"use client";

import { useEffect, useRef, type ReactNode, type Ref } from "react";
import { gsap } from "gsap";

type Variant = "home" | "timeline";

const animations: Record<Variant, (scope: HTMLElement) => void> = {
  home(scope) {
    gsap.fromTo(
      scope.querySelectorAll(".reveal"),
      { y: 38, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out" },
    );
    gsap.fromTo(
      scope.querySelectorAll(".portrait-shell"),
      { scale: 0.92, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power3.out", delay: 0.25 },
    );
    gsap.to(scope.querySelectorAll(".orb-one"), {
      x: 18,
      y: -18,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to(scope.querySelectorAll(".orb-two"), {
      x: -20,
      y: 20,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  },
  timeline(scope) {
    gsap.fromTo(
      scope.querySelectorAll(".timeline-item"),
      { y: 34, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out" },
    );
  },
};

type MotionScopeProps = {
  variant: Variant;
  as?: "div" | "main";
  className?: string;
  children: ReactNode;
};

/**
 * Runs the GSAP entrance animations for its subtree. Animations are skipped
 * entirely for visitors who prefer reduced motion.
 */
export function MotionScope({ variant, as: Tag = "div", className, children }: MotionScopeProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const scope = ref.current;
    if (!scope) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => animations[variant](scope));

    return () => mm.revert();
  }, [variant]);

  return (
    <Tag ref={ref as Ref<HTMLDivElement>} className={className}>
      {children}
    </Tag>
  );
}
