"use client";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Trip", href: "trip" },
  { label: "About Us", href: "about-us" },
  //   { label: "Community", href: "community" },
  { label: "Blog", href: "blog" },
];

export default function Header() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Six Senergy - Clean Energy Solutions</title>
        <meta
          name="description"
          content="Leading the future of sustainable energy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrollY > 50
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div
              className={`text-2xl font-bold text-gray-900 transform transition-all duration-1000 ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              Six Senergy
            </div>

            <div className="hidden md:flex space-x-12">
              {navLinks.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium text-sm tracking-wide transform ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-5 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <button
              className={`hidden md:block px-6 py-2 bg-gray-900 text-white text-sm font-medium tracking-wide rounded-full hover:bg-gray-800 transition-all duration-300 transform ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              Start planning
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-gray-900">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
