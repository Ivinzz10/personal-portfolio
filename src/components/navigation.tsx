"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { portfolioIdentity, portfolioSections } from "@/content/portfolio";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sectionIds = portfolioSections.map(({ href }) => href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (activeEntry) {
          const nextActiveSection = `#${activeEntry.target.id}`;
          setActiveSection((current) =>
            current === nextActiveSection ? current : nextActiveSection,
          );
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#4B83B8]/30 bg-[#101F35] text-[#F4F6F8] shadow-[0_8px_24px_rgba(16,31,53,0.12)]">
      <div className="mx-auto flex min-h-16 max-w-[1200px] items-center justify-between gap-6 px-4 sm:px-5 md:min-h-20 lg:px-6">
        <a
          className="group shrink-0 rounded-sm text-[#F4F6F8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B83B8]"
          href="#home"
          onClick={closeMenu}
          aria-label={`${portfolioIdentity.name}, home`}
        >
          <span className="block text-lg font-semibold tracking-[-0.04em] sm:text-xl">
            {portfolioIdentity.name}
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {portfolioSections.map((section) => (
            <a
              key={section.href}
              aria-current={activeSection === section.href ? "location" : undefined}
              className={`relative rounded-sm py-2 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:bg-[#4B83B8] after:transition-transform after:duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B83B8] motion-reduce:after:transition-none ${
                activeSection === section.href
                  ? "text-white after:scale-x-100"
                  : "text-[#F4F6F8]/80 after:scale-x-0 hover:text-white hover:after:scale-x-100"
              }`}
              href={section.href}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-md border border-[#F4F6F8]/30 px-3 text-sm font-semibold text-[#F4F6F8] transition-colors hover:border-[#4B83B8] hover:bg-[#F4F6F8]/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B83B8] motion-reduce:transition-none lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
          <span>{isMenuOpen ? "Close" : "Menu"}</span>
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!isMenuOpen}
        className="border-t border-[#F4F6F8]/15 bg-[#101F35] px-4 py-3 sm:px-5 lg:hidden"
      >
        <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-1 sm:grid-cols-3">
          {portfolioSections.map((section) => (
            <li key={section.href}>
              <a
                aria-current={activeSection === section.href ? "location" : undefined}
                className={`flex min-h-11 items-center rounded-sm px-3 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#4B83B8] ${
                  activeSection === section.href
                    ? "bg-[#234C78] text-white"
                    : "text-[#F4F6F8]/85 hover:bg-[#234C78] hover:text-white"
                }`}
                href={section.href}
                onClick={closeMenu}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
