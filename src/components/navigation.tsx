"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { portfolioIdentity, portfolioSections } from "@/content/portfolio";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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
    <header className="sticky top-0 z-50 border-b border-[#252D38]/10 bg-[#F4F6F8]">
      <div className="mx-auto flex min-h-16 max-w-[1200px] items-center justify-between gap-6 px-4 sm:px-5 md:min-h-20 lg:px-6">
        <a
          className="group shrink-0 rounded-sm text-[#252D38] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B83B8]"
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
              className="rounded-sm py-2 text-sm font-medium text-[#252D38] transition-colors hover:text-[#234C78] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B83B8] motion-reduce:transition-none"
              href={section.href}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-md border border-[#234C78]/25 px-3 text-sm font-semibold text-[#234C78] transition-colors hover:bg-[#234C78]/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B83B8] motion-reduce:transition-none lg:hidden"
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
        className="border-t border-[#252D38]/10 px-4 py-3 sm:px-5 lg:hidden"
      >
        <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-1 sm:grid-cols-3">
          {portfolioSections.map((section) => (
            <li key={section.href}>
              <a
                className="flex min-h-11 items-center rounded-sm px-3 text-sm font-medium text-[#252D38] hover:bg-[#234C78]/5 hover:text-[#234C78] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#4B83B8]"
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
