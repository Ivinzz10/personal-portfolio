import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F6F8]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[#F4F6F8] focus:px-4 focus:py-3 focus:text-[#101F35] focus:outline-2 focus:outline-[#4B83B8]"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
      </main>
    </div>
  );
}
