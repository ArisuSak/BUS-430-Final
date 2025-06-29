/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const partners = [
  {
    name: "Amazon Web Services",
    category: "Cloud Infrastructure",
    logo: "/aws.png",
    description: "Scalable cloud solutions",
    tier: "Premier Partner",
  },
  {
    name: "Google Cloud",
    category: "AI & Machine Learning",
    logo: "/google.png",
    description: "Advanced AI capabilities",
    tier: "Strategic Partner",
  },
  {
    name: "Microsoft Azure",
    category: "Enterprise Solutions",
    logo: "/micro.png",
    description: "Enterprise-grade platform",
    tier: "Gold Partner",
  },
  {
    name: "Docker",
    category: "Containerization",
    logo: "/docker.png",
    description: "Container orchestration",
    tier: "Technology Partner",
  },
  {
    name: "MongoDB",
    category: "Database Solutions",
    logo: "/mongo.png",
    description: "NoSQL database platform",
    tier: "Certified Partner",
  },
  {
    name: "Stripe",
    category: "Payment Processing",
    logo: "/stripe.png",
    description: "Secure payment gateway",
    tier: "Integration Partner",
  },
];

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
        <section className="relative min-h-screen bg-white overflow-hidden">
          {/* Left Content Section */}
          <div className="flex min-h-screen">
            {/* Left Side - Content */}
            <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-20">
              <div className="max-w-2xl">
                {/* Header Badge */}
                <div
                  className={`inline-block mb-8 transform transition-all duration-1000 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-4 opacity-0"
                  }`}
                >
                  <div className="text-sm text-gray-600 mb-2">
                    Software Development
                  </div>
                  <div className="text-lg text-gray-900 font-medium">
                    Build Solutions with{" "}
                    <span className="font-bold">Elegance & Clarity</span>
                  </div>
                  <div className="w-16 h-0.5 bg-black mt-2"></div>
                </div>

                {/* Main Heading */}
                <h1
                  className={`text-7xl lg:text-8xl font-bold text-black mb-8 leading-none transform transition-all duration-1000 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  Six Senergy
                </h1>

                {/* Company Info */}
                {/* <div
                  className={`flex items-center space-x-4 mb-8 transform transition-all duration-1000 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">6S</span>
                  </div>
                  <span className="text-xl font-semibold text-black">
                    Tech Solutions
                  </span>
                  <span className="text-gray-600 underline cursor-pointer hover:text-black transition-colors">
                    Our Projects
                  </span>
                </div> */}

                {/* Testimonial */}
                <blockquote
                  className={`text-xl text-gray-700 mb-8 leading-relaxed transform transition-all duration-1000 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  &quot;Six Senergy transformed our complex requirements into
                  <br />
                  clean, scalable software solutions. Highly recommended!&quot;
                </blockquote>

                {/* Author */}
                <div
                  className={`flex items-center space-x-3 mb-12 transform transition-all duration-1000 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: "700ms" }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    {/* <span className="text-white font-semibold">MJ</span> */}
                    <Image
                      src={"/gon.png"}
                      alt="GON"
                      width={200}
                      height={200}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-black">Kimleng Soth</div>
                    <div className="text-sm text-gray-600">
                      CTO, TechCorp Solutions
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div
                  className={`flex items-center space-x-6 transform transition-all duration-1000 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: "800ms" }}
                >
                  <button className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                    Start Your Project
                  </button>
                  {/* <button className="flex items-center space-x-2 text-black font-semibold hover:text-gray-700 transition-colors group">
                    <span className="underline">Our Process</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button> */}
                </div>
              </div>
            </div>

            {/* Right Side - Phone Mockup with Dark Background */}
            <div className="flex-1 relative bg-purple-100 flex items-center justify-center p-8">
              {/* Background Design Elements */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Floating Cards */}
                <div
                  className={`absolute top-20 right-20 bg-white rounded-lg p-4 shadow-xl transform transition-all duration-1000 hover:scale-105 ${
                    isLoaded
                      ? "translate-x-0 opacity-100"
                      : "translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">TF</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-black ">
                        TechFlow - Enterprise
                      </div>
                      <div className="text-xs text-gray-600 ">
                        React App Delivered May 15
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      Live
                    </div>
                  </div>
                </div>

                <div
                  className={`absolute top-40 right-12 bg-white rounded-lg p-4 shadow-xl transform transition-all duration-1000 hover:scale-105 ${
                    isLoaded
                      ? "translate-x-0 opacity-100"
                      : "translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">6S</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-black ">
                        Project Completion
                      </div>
                      <div className="text-xs text-gray-600">
                        Mobile App & API
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      Done
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-32 left-8 w-32 h-32 border-2 border-gray-600 rounded-full opacity-20"></div>
                <div className="absolute top-1/3 left-16">
                  <svg
                    width="60"
                    height="40"
                    viewBox="0 0 60 40"
                    className="text-gray-600 opacity-30"
                  >
                    <path
                      d="M10 20 Q30 10 50 20 Q30 30 10 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M15 25 Q30 15 45 25 Q30 35 15 25"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>

              {/* Phone Mockup */}
              <div
                className={`relative z-10 transform transition-all duration-1000 ${
                  isLoaded
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-10 opacity-0 scale-95"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                {/* Phone Frame */}
                <div className="bg-black rounded-3xl p-2 shadow-2xl">
                  <div className="bg-white rounded-2xl p-6 w-80 h-[600px] relative overflow-hidden">
                    {/* Phone Header */}
                    <div className="flex items-center justify-between mb-6">
                      <button className="p-2 ">
                        <svg
                          className="w-6 h-6 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                          />
                        </svg>
                      </button>
                      <div className="flex items-center space-x-1">
                        <span className="text-lg font-bold text-black ">
                          4.8
                        </span>
                        <svg
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>

                    {/* Profile Section */}
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        {/* <span className="text-white text-xl font-bold">6S</span> */}
                        <Image
                          src={"/logo.png"}
                          alt="6S"
                          width={200}
                          height={200}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-black mb-1">
                        Six Senergy
                      </h3>
                      <p className="text-gray-600">Software Development</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-center space-x-4 mb-8">
                      <button className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-black rounded-full"></div>
                      </button>
                      <button className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                        <div className="w-1 h-1 bg-white rounded-full mx-0.5"></div>
                        <div className="w-1 h-1 bg-white rounded-full mx-0.5"></div>
                        <div className="w-1 h-1 bg-white rounded-full mx-0.5"></div>
                      </button>
                    </div>

                    {/* Stats */}
                    <div className="text-center mb-6">
                      <div className="text-sm text-gray-600 mb-1"></div>
                      <div className="text-xl font-bold text-gray-600 ">
                        Projects • 150+ Delivered
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors">
                      View Portfolio
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Badge */}
              <div
                className={`absolute bottom-8 right-8 bg-white rounded-full px-4 py-2 shadow-lg transform transition-all duration-1000 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "900ms" }}
              >
                <span className="text-sm font-medium text-gray-800">
                  Development
                </span>
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
                  image: "/ecom.png",
                  delay: "0ms",
                },
                {
                  title: "AI-Powered SaaS Application",
                  subtitle: "Machine Learning - Python",
                  description:
                    "I built an AI solution for 6 months and I would like to share with you my experience.",
                  image: "/ai.png",
                  delay: "200ms",
                },
                {
                  title: "Mobile App Development",
                  subtitle: "Cross-platform - Flutter",
                  description:
                    "A comprehensive mobile solution that transformed how users interact with our platform.",
                  image: "/mobile.png",
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
                      {/* <div className="text-6xl">{project.image}</div> */}
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={200}
                        height={200}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
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

        {/* Technologies Section */}
        <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-16">
              <div>
                <h2 className="text-4xl font-light text-black mb-4">
                  Trusted by industry leaders
                  <br />
                  <span className="text-gray-700">worldwide</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl">
                  We collaborate with top technology companies to deliver
                  cutting-edge solutions that power your digital transformation
                  journey.
                </p>
              </div>
              <button className="px-6 py-3 border border-black text-black font-medium text-sm tracking-wide rounded-full hover:bg-black hover:text-white transition-all duration-300">
                View all partnerships
              </button>
            </div>

            {/* Partner Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {[
                { number: "50+", label: "Technology Partners" },
                { number: "15+", label: "Strategic Alliances" },
                { number: "100%", label: "Certified Teams" },
                { number: "24/7", label: "Enterprise Support" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transform transition-all duration-700 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl font-bold text-black mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Partners Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-white border border-gray-200 p-8 hover:shadow-2xl hover:shadow-black/10 transform transition-all duration-700 hover:-translate-y-2 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Partner Tier Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
                      {partner.tier}
                    </span>
                  </div>

                  {/* Logo */}
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={100}
                      height={100}
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-gray-700 transition-colors duration-300">
                        {partner.name}
                      </h3>
                      <p className="text-gray-700 font-medium text-sm uppercase tracking-wide">
                        {partner.category}
                      </p>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {partner.description}
                    </p>

                    {/* Hover Effect */}
                    <div className="pt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <button className="text-black font-medium text-sm hover:text-gray-700 transition-colors duration-200">
                        Learn more →
                      </button>
                    </div>
                  </div>

                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-black rounded-2xl p-12 text-white">
                <h3 className="text-2xl font-semibold mb-4">
                  Ready to leverage our technology partnerships?
                </h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Get access to enterprise-grade solutions and expert support
                  from our certified partner network.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                    Start your project
                  </button>
                  <button className="px-8 py-3 border border-gray-600 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300">
                    Schedule consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
