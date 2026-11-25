import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { portfolioIdentity } from "@/content/portfolio";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pageTitle = "Ivin Sunny | Junior Software Engineer | AI & Full Stack Developer";
const pageDescription =
  "Portfolio of Ivin Sunny, Junior Software Engineer and Computer Science graduate specializing in backend development, full-stack engineering, AI-powered applications, and intelligent software solutions.";

const socialTitle = "Ivin Sunny | Junior Software Engineer";
const socialDescription = "Building intelligent software and AI-powered applications.";
const socialImage = {
  url: "https://personal-portfolio-lovat-omega-87.vercel.app/images/og-image.png",
  width: 1672,
  height: 941,
  alt: "Ivin Sunny — Junior Software Engineer",
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: pageTitle,
    template: "%s | Ivin Sunny",
  },
  description: pageDescription,
  keywords: [
    "Ivin Sunny",
    "Junior Software Engineer",
    "Backend Development",
    "Full-Stack Development",
    "Artificial Intelligence",
    "Machine Learning",
    "LLM Applications",
    "AI Agents",
    "Computer Vision",
    "Python",
    "Rust",
    "React",
    "PostgreSQL",
  ],
  authors: [{ name: portfolioIdentity.name }],
  creator: portfolioIdentity.name,
  verification: { google: "nUlQcgkbHLsF5SkS9-PnP0Frcg6CnnXs-VyIMVUSPe8" },
  ...(siteUrl ? { alternates: { canonical: siteUrl.href } } : {}),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Ivin Sunny Portfolio",
    title: socialTitle,
    description: socialDescription,
    ...(siteUrl ? { url: siteUrl.href } : {}),
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: socialDescription,
    images: { url: socialImage.url, alt: socialImage.alt },
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioIdentity.name,
    jobTitle: portfolioIdentity.designation,
    description:
      "Computer Science and Engineering graduate specializing in backend development, full-stack engineering, and AI-powered applications.",
    ...(siteUrl ? { url: siteUrl.href } : {}),
    sameAs: [portfolioIdentity.linkedin, portfolioIdentity.github],
    knowsAbout: [
      "Backend development",
      "Full-stack development",
      "Artificial intelligence",
      "Machine learning",
      "Large language models",
      "AI agents",
      "Computer vision",
      "Python",
      "Rust",
      "React",
      "Flask",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "SQL",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ivin Sunny Portfolio",
    description: pageDescription,
    ...(siteUrl ? { url: siteUrl.href } : {}),
    author: {
      "@type": "Person",
      name: portfolioIdentity.name,
    },
  },
];

const jsonLd = JSON.stringify(structuredData).replace(/</g, "\\u003c");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={[geistSans.variable, geistMono.variable, "h-full antialiased"].join(" ")}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
        {children}
      </body>
    </html>
  );
}
