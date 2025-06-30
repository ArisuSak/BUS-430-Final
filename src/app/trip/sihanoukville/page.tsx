/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import {
  Calendar,
  ChevronRight,
  DollarSign,
  MapPin,
  Users,
  CheckCircle,
  BookOpen,
  ArrowRight,
  Target,
  Users2,
  GraduationCap,
  Presentation,
} from "lucide-react";
import { Timeline } from "@/components/TripTimeline";
import { ExpensesTable } from "@/components/ExpensesTable";
import Header from "@/components/Header";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function BusinessReport() {
  const [activeDay, setActiveDay] = useState(1);

  const tripData = {
    title: "Business Trip to Sihanoukville",
    subtitle: "Meetings with Potential Investors at Two Locations",
    description:
      "From 21 to 22 July 2025, a three-member delegation traveled to Sihanoukville to engage with potential investors and explore two development zones for a future coastal eco-tourism and smart infrastructure project. The goal of the trip was to introduce the investment proposal, build relationships, and assess the site feasibility.",
    stats: [
      {
        icon: <Calendar className="h-4 w-4 text-gray-600" />,
        label: "Duration",
        value: "2 Days",
      },
      {
        icon: <MapPin className="h-4 w-4 text-gray-600" />,
        label: "Location",
        value: " Sihanoukville",
      },
      {
        icon: <Users className="h-4 w-4 text-gray-600" />,
        label: "Team Size",
        value: "3 Members",
      },
      {
        icon: <DollarSign className="h-4 w-4 text-gray-600" />,
        label: "Total Cost",
        value: "$735",
      },
    ],
    days: [
      {
        date: "Monday, 21 July 2025",
        events: [
          {
            time: "7:00 AM",
            title: "Departure from Phnom Penh",
            description: "Depart from Phnom Penh via PP-SHV Expressway (PPSHV).",
            image: "/shv/ppshv.jpg",
            imageAlt: "Express Way",
          },
          {
            time: "9:00 AM",
            title: "Arrival in Sihanoukville",
            description: "Arrival and transit to meeting venue.",
            image: "/shv/sihanoukville.jpg",
            imageAlt: "Sihanoukville",
          },
          {
            time: "10:00 AM – 12:00 PM",
            title: "Meeting with Investor #1",
            description: "Presentation of the smart property project and investment pitch at Novotel Sihanoukville Hotel.",
            image: "/shv/Novotel.jpg",
            imageAlt: "Novotel Hotel",
          },
          {
            time: "12:00 PM – 1:30 PM",
            title: "Lunch with Investor",
            description: "Lunch with investor and team at a local seafood restaurant.",
            image: "/shv/restaurant.jpg",
            imageAlt: "Restaurant",
          },
          {
            time: "2:00 PM",
            title: "Hotel Check-in",
            description: "Check-in at Blue Bay International Hotel and rest.",
            image: "/shv/bluebayhotel.jpg",
            imageAlt: "Blue Bay Hotel",
          },
          {
            time: "4:00 PM – 5:30 PM",
            title: "Site Visit #1",
            description: "Visit to Otres Beach Development Zone to tour zoning, accessibility, and development-ready plots.",
            image: "/shv/OtresBeach.jpeg",
            imageAlt: "Otres Beach",
          },
          {
            time: "6:00 PM – 7:30 PM",
            title: "Dinner",
            description: "Dinner with local business representatives at The White Restaurant.",
            image: "/shv/TheWhiteRestaurant.jpg",
            imageAlt: "The White Restaurant",
          },
          {
            time: "8:00 PM – 9:00 PM",
            title: "Team Debrief",
            description: "Return to hotel and debrief the day’s activities.",
            image: "/shv/bluebayhotel.jpg",
            imageAlt: "Blue Bay Hotel",
          },
        ],
      },
      {
        date: "Tuesday, 22 July 2025",
        events: [
          {
            time: "8:00 AM",
            title: "Breakfast",
            description: "Breakfast at the hotel.",
            image: "/shv/bluebayhotel.jpg",
            imageAlt: "Blue Bay Hotel",
          },
          {
            time: "9:00 AM – 11:00 AM",
            title: "Meeting with Investor #2",
            description: "Discussion on eco-tourism collaboration at Sokha Beach Resort.",
            image: "/shv/SokhaBeach.jpg",
            imageAlt: "Sokha Beach",
          },
          {
            time: "11:30 AM – 12:00 PM",
            title: "Port Visit",
            description: "Visit to Sihanoukville Autonomous Port to assess logistics capability.",
            image: "/shv/Sihanoukport.jpeg",
            imageAlt: "Sihanoukville Port",
          },
          {
            time: "12:30 PM – 1:30 PM",
            title: "Lunch",
            description: "Lunch at Ochheuteal Beach.",
            image: "/shv/Ochheutealbeach.jpg",
            imageAlt: "Ochheuteal Beach",
          },
          {
            time: "2:00 PM – 3:00 PM",
            title: "Site Visit #2",
            description: "Visit to Ream Beach Development Zone to observe commercial growth areas and infrastructure.",
            image: "/shv/reamcity.jpg",
            imageAlt: "Ream City",
          },
          {
            time: "3:30 PM",
            title: "Return to Phnom Penh",
            description: "Depart Sihanoukville and head back via Expressway.",
            image: "/shv/ppshv.jpg",
            imageAlt: "Express Way",
          },
          {
            time: "5:30 PM",
            title: "Arrival in Phnom Penh",
            description: "Team arrives back in Phnom Penh, trip concludes.",
            image: "/shv/ppshvnight.jpeg",
            imageAlt: "Express Way PP",
          },
        ],
      },
    ],
    expenses: [
      {
        category: "Transportation",
        details: "Round trip van via PPSHV Expressway",
        cost: "$180",
      },
      {
        category: "Accommodation",
        details: "1 night at Blue Bay International hotel",
        cost: "$250",
      },
      {
        category: "Meals",
        details: "Breakfast, lunch, dinner (2 days)",
        cost: "$80",
      },
      {
        category: "Meeting & Venue Fees",
        details: "Room rental, materials, and refreshments",
        cost: "$150",
      },
      {
        category: "Miscellaneous",
        details: "Snacks, tips, water",
        cost: "$75",
      },
    ],
    conclusion:
      "The two-day field mission to Sihanoukville on 21–22 July 2025 was productive and promising. Our team successfully pitched to two potential investors, both of whom showed interest in partnership opportunities. Site visits provided valuable firsthand insight into infrastructure, zoning, and potential returns. With positive investor feedback and practical exposure, this trip lays the foundation for future capital acquisition and project execution in Cambodia’s coastal growth corridor.",
      takeaways: [
        {
          title: "Identified Strategic Zones for Development",
          description: "Otres Beach and Ream Beach zones show strong potential due to infrastructure availability, proximity to tourism hubs, and favorable zoning conditions."
        },
        {
          title: "Investor Interest Secured",
          description: "Initial meetings with two potential investors confirmed alignment on long-term collaboration, with follow-up discussions to proceed."
        }
      ],
          nextSteps: [
        {
          title: "Prepare Investor Follow-up Packages",
          description: "Send refined investment deck and proposal documents to both investors for decision-making.",
          timeline: "By 29 July 2025",
          priority: "High"
        },
        {
          title: "Conduct Land Assessment Report",
          description: "Evaluate technical, environmental, and financial viability of targeted zones (Otres and Ream).",
          timeline: "Within 2 weeks",
          priority: "Medium"
        },
        {
          title: "Schedule Local Authority Meeting",
          description: "Engage with Sihanoukville Development Committee to review project scope and obtain approvals.",
          timeline: "Within 1 month",
          priority: "Critical"
        }
      ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-30">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center mb-16 px-4 py-8"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-3xl font-light text-gray-900 mb-2"
          >
            {tripData.title}
          </motion.h1>
          <motion.h2 variants={fadeInUp} className="text-lg text-gray-600 mb-6">
            {tripData.subtitle}
          </motion.h2>

          {/* Enhanced Hero Image */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl mx-auto mb-8 rounded overflow-hidden group cursor-pointer"
          >
            <img
              src="/shv/sihanoukville.jpg"
              alt="Sihanoukville"
              className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-gray-700 mb-10 leading-relaxed"
          >
            {tripData.description}
          </motion.p>

          {/* Enhanced Stats */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10"
          >
            {tripData.stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  className="flex justify-center mb-2"
                  whileHover={{ rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.icon}
                </motion.div>
                <span className="text-sm text-gray-600 block mb-1">
                  {stat.label}
                </span>
                <span className="text-xl font-light text-gray-900">
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="container mx-auto px-4">
          <Timeline
            days={tripData.days}
            activeDay={activeDay}
            setActiveDay={setActiveDay}
          />

          <ExpensesTable expenses={tripData.expenses} totalCost="$735" />

          {/* Enhanced Conclusion */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16 py-8 border-t border-gray-100"
          >
            <h2 className="text-xl font-light text-gray-900 mb-4">
              Conclusion
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {tripData.conclusion}
            </p>

            {/* <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 flex items-center text-gray-700"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle className="h-4 w-4 mr-2 text-gray-500" />
              </motion.div>
              <p className="text-sm">
                We return to Cambodia inspired, informed, and ready to push the
                boundaries of what our technology can achieve.
              </p>
            </motion.div> */}
          </motion.section>

          {/* Enhanced Key Takeaways */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <BookOpen className="h-5 w-5 text-gray-600 mr-2" />
              </motion.div>
              <h2 className="text-xl font-light text-gray-900">
                Key Takeaways
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tripData.takeaways.map((takeaway, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="border border-gray-100 p-5 rounded hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start">
                    <motion.div
                      className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="flex-1">
                      <h3 className="text-base font-medium text-gray-900 mb-2">
                        {takeaway.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {takeaway.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Enhanced Next Steps */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <motion.div
                whileHover={{ scale: 1.2, x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="h-5 w-5 text-gray-600 mr-2" />
              </motion.div>
              <h2 className="text-xl font-light text-gray-900">Next Steps</h2>
            </div>
            <div className="space-y-4">
              {tripData.nextSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 5, scale: 1.01 }}
                  className="border border-gray-100 p-5 rounded hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start">
                    <motion.div
                      className="w-6 h-6 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-xs font-medium mr-4 flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {index + 1}
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-base font-medium text-gray-900 flex-1 mr-4">
                          {step.title}
                        </h3>
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className={`px-2 py-1 rounded text-xs shrink-0 ${
                            step.priority === "Critical"
                              ? "bg-red-50 text-red-700"
                              : step.priority === "High"
                              ? "bg-orange-50 text-orange-700"
                              : "bg-blue-50 text-blue-700"
                          }`}
                        >
                          {step.priority}
                        </motion.span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        {/* <motion.div
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.3 }}
                        >
                          {step.icon}
                        </motion.div> */}
                        <span className="ml-2">{step.timeline}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
