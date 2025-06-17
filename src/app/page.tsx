/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState, useEffect } from "react";

export default function Home() {
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
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
          {/* Background image overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>

          <div className="relative z-10 text-center px-6 lg:px-8 max-w-5xl mx-auto">
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight transform transition-all duration-1000 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              You never need to worry
              <br />
              <span className="font-normal">about complex tech</span>
              <br />
              <span className="font-semibold">solutions again</span>
            </h1>

            <p
              className={`text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed transform transition-all duration-1000 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              Build, scale and deploy cutting-edge software solutions that will
              help you create an unforgettable impact in the digital world.
            </p>

            <button
              className={`px-8 py-4 bg-gray-900 text-white font-medium text-sm tracking-wide rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg transform ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              Start building
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
                Powerful features for modern development needs
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-16 mb-20">
              {[
                {
                  icon: "⚡",
                  title: "Lightning-fast deployment",
                  description:
                    "Deploy your applications instantly with our optimized CI/CD pipeline and cloud infrastructure.",
                  delay: "0ms",
                },
                {
                  icon: "🔧",
                  title: "Get personalized dev tools",
                  description:
                    "Access custom development environments with smart recommendations based on your project needs.",
                  delay: "200ms",
                },
                {
                  icon: "📱",
                  title: "Offline-first architecture",
                  description:
                    "No internet, no problem. Your applications work seamlessly offline with local data sync.",
                  delay: "400ms",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`text-center transform transition-all duration-1000 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: feature.delay }}
                >
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Feature Images */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div
                className={`transform transition-all duration-1000 ${
                  isLoaded
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">💻</div>
                    <h4 className="text-xl font-medium text-gray-900 mb-2">
                      Your development dashboard in one view
                    </h4>
                    <p className="text-gray-600 text-sm">
                      No more switching between different tools, terminals, and
                      services to manage your development workflow.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`transform transition-all duration-1000 ${
                  isLoaded
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📊</div>
                    <h4 className="text-xl font-medium text-gray-900 mb-2">
                      Import code and analytics data
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Connect your repositories and monitoring tools to get
                      insights magically integrated into your development
                      workflow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inspiration Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-4xl font-light text-gray-900">
                Get inspiration from
                <br />
                successful tech projects
              </h2>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium text-sm tracking-wide rounded-full hover:bg-gray-50 transition-all duration-300">
                See more
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "E-commerce Platform Build",
                  subtitle: "Full-stack - React & Node.js",
                  description:
                    "One of my best development projects and I will tell you how I architected it.",
                  image: "🛒",
                  delay: "0ms",
                },
                {
                  title: "AI-Powered SaaS Application",
                  subtitle: "Machine Learning - Python",
                  description:
                    "I built an AI solution for 6 months and I would like to share with you my experience.",
                  image: "🤖",
                  delay: "200ms",
                },
                {
                  title: "Mobile App Development",
                  subtitle: "Cross-platform - Flutter",
                  description:
                    "A comprehensive mobile solution that transformed how users interact with our platform.",
                  image: "📱",
                  delay: "400ms",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer transform transition-all duration-1000 hover:scale-105 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: project.delay }}
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <div className="text-6xl">{project.image}</div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">
                        {project.subtitle}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <button className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors duration-300">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-24 px-6 lg:px-8 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote
              className={`text-3xl sm:text-4xl font-light leading-relaxed mb-8 transform transition-all duration-1000 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              It was my first major software project and it was an incredible
              experience thanks to having a structured development approach to
              implement everything I envisioned
            </blockquote>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-4xl font-light text-gray-900">
                Find the best tech stack
                <br />
                for each project type
              </h2>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium text-sm tracking-wide rounded-full hover:bg-gray-50 transition-all duration-300">
                Explore technologies
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Frontend", region: "React & Vue.js", image: "🎨" },
                { name: "Backend", region: "Node.js & Python", image: "🔧" },
                {
                  name: "Cloud & DevOps",
                  region: "AWS & Docker",
                  image: "☁️",
                },
              ].map((solution, index) => (
                <div
                  key={index}
                  className={`relative group cursor-pointer overflow-hidden rounded-2xl h-80 transform transition-all duration-1000 hover:scale-105 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                    <div className="text-6xl mb-4">{solution.image}</div>
                    <h3 className="text-2xl font-medium mb-2">
                      {solution.name}
                    </h3>
                    <p className="text-white/80">{solution.region}</p>
                    <button className="mt-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300">
                      Explore
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
