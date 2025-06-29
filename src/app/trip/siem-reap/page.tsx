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
    title: "Business Trip to Siem Reap",
    subtitle: "Expansion Site Scouting for Future Development",
    description:
      "A five-day business delegation will travel to Siem Reap from 15–19 February 2025 to evaluate potential locations for the expansion of our company. The mission is to analyze strategic areas based on foot traffic, infrastructure, accessibility, surrounding commercial activity, and potential for brand visibility. The team will visit five key zones in Siem Reap and engage with local stakeholders and community leaders to understand growth opportunities.",
    stats: [
      {
        icon: <Calendar className="h-4 w-4 text-gray-600" />,
        label: "Duration",
        value: "5 Days",
      },
      {
        icon: <MapPin className="h-4 w-4 text-gray-600" />,
        label: "Location",
        value: "Siem Reap",
      },
      {
        icon: <Users className="h-4 w-4 text-gray-600" />,
        label: "Team Size",
        value: "3 Members",
      },
      {
        icon: <DollarSign className="h-4 w-4 text-gray-600" />,
        label: "Total Cost",
        value: "$948",
      },
    ],
    days: [
      {
        date: "Friday, 14 February 2025",
        events: [
          {
            time: "6:00 AM",
            title: "Departure from Phnom Penh",
            description: "Departure from Phnom Penh by Larryta bus",
            image: "/siemreap/lary.png",
            imageAlt: "Larryta Bus",
          },
          {
            time: "1:30 PM",
            title: "Arrival in Siem Reap",
            description:
              "Arrival in Siem Reap and check-in at Bopha Wat Bo Residence",
            image: "/siemreap/wat-bo-res.png",
            imageAlt: "Bopha Wat Bo Residence",
          },
          {
            time: "3:00 PM – 5:00 PM",
            title: "Briefing session at the cafe.",
            description:
              "A briefing session to discuss the trip objectives and review the scheduled site visits.",
            image: "/siemreap/meeting.png",
            imageAlt: "Hotel Meeting Room",
          },
          {
            time: "7:00 PM",
            title: "Dinner",
            description: "Welcome Dinner at Chanrey Tree Restaurant, Riverside",
            image: "/siemreap/dinner-1.png",
            imageAlt: "Chanrey Tree Restaurant",
          },
        ],
      },
      {
        date: "Saturday, 15 February 2025",
        events: [
          {
            time: "8:00 AM",
            title: "Breakfast at the Hotel",
            description: "Blend of international and local dishes",
            image: "/siemreap/breakfast-1.png",
            imageAlt: "Hotel breakfast buffet",
          },
          {
            time: "9:30 AM",
            title: "Walking survey of Pub Street and Old Market",
            description:
              "Inspect commercial properties for lease or purchase, assessing infrastructure, accessibility, and nearby businesses.",
            image: "/siemreap/old-market.png",
            imageAlt: "Walking survey",
          },
          {
            time: "12:30 PM",
            title: "Lunch at Malis Restaurant",
            description: "Traditional Khmer cuisine with a modern twist",
            image: "/siemreap/malis.png",
            imageAlt: "Malis Restaurant",
          },
          {
            time: "2:00 PM",
            title: "Interview with nearby business owners and vendors",
            description:
              "Gather insights on local market conditions and business climate.",
            image: "/siemreap/interview-1.png",
            imageAlt: "Airport departure gate",
          },
          {
            time: "4:30 PM",
            title: "Team debrief and note consolidation",
            description: "Review findings and prepare for next day’s visits",
            image: "/siemreap/team-met-1.png",
            imageAlt: "Team debrief session",
          },
          {
            time: "7:00 PM",
            title: " Dinner at The Cuisine Wat Damnak",
            description:
              "Experience fine dining with a focus on local ingredients.",
            image: "/siemreap/wat-domnak.png",
            imageAlt: "Cuisine Wat Damnak",
          },
        ],
      },
      {
        date: "Sunday, 16 February 2025",
        events: [
          {
            time: "8:00 AM",
            title: "Breakfast at the Hotel",
            description: "Blend of international and local dishes",
            image: "/siemreap/break-2.png",
            imageAlt: "Hotel breakfast buffet",
          },
          {
            time: "9:00 AM",
            title: "Survey of Wat Bo Road area",
            description:
              "Inspect commercial properties for lease or purchase, assessing infrastructure, accessibility, and nearby businesses.",
            image: "/siemreap/wat-bo.png",
            imageAlt: "Walking survey",
          },
          {
            time: "12:30 PM",
            title: "Lunch at The Bean Embassy Roastery & Specialty Coffee",
            description: "Specialty coffee and light bites",
            image: "/siemreap/coffee-bean.png",
            imageAlt: "The Bean Embassy Roastery & Specialty Coffee",
          },
          {
            time: "2:00 PM",
            title: "Exploration of 7 Makara Road corridor",
            description:
              "Assess commercial properties and surrounding infrastructure.",
            image: "/siemreap/wat-bo-2.png",
            imageAlt: "Airport departure gate",
          },
          {
            time: "4:30 PM",
            title: "Biking Around Angkor Wat",
            description:
              "Explore the Angkor Wat area by bike after visiting the 7 Makara Road corridor.",
            image: "/siemreap/met-3.png",
            imageAlt: "Team debrief session",
          },
          {
            time: "7:00 PM",
            title: "Dinner at Embassy Restaurant, King's Road",
            description:
              "Experience modern Khmer cuisine in a vibrant setting.",
            image: "/siemreap/emba-res.png",
            imageAlt: "Embassy Restaurant",
          },
        ],
      },
      {
        date: "Sunday, 16 February 2025",
        events: [
          {
            time: "8:00 AM",
            title: "Street Breakfast",
            description: "Enjoying kuy teav and coffee.",
            image: "/siemreap/breakfast-out.png",
            imageAlt: "Street-side breakfast with kuy teav and coffee",
          },
          {
            time: "7:300 AM",
            title: "Site Visit to Angkor Night Market Street",
            description:
              "Visit the site to explore shops and entertainment spots, check foot traffic, and assess tech use like mobile payments, Wi-Fi, and digital ads.",
            image: "/siemreap/nigth-3.png",
            imageAlt: "Walking survey",
          },
          {
            time: "12:30 PM",
            title: "Lunch at Srah Srang",
            description:
              "Take a break and enjoy lunch while admiring the natural scenery of Srah Srang.",
            image: "/siemreap/sras.png",
            imageAlt: "Lunch at Srah Srang",
          },
          {
            time: "2:00 PM",
            title: " Summary Session at Brown Coffee Shop",
            description:
              "Summary all observations and data from the trip. Prioritize locations based on infrastructure, commercial activity, accessibility, and tech adoption readiness. Draft the report",
            image: "/siemreap/brown.png",
            imageAlt: "Brown Coffee Shop",
          },
          {
            time: "7:00 PM",
            title: "Dinner at Tonle Sap restaurant",
            description:
              "Experience modern Khmer cuisine in a vibrant setting.",
            image: "/siemreap/tonel.png",
            imageAlt: "Tonle Sap Restaurant",
          },
        ],
      },
      {
        date: "Sunday, 16 February 2025",
        events: [
          {
            time: "8:00 AM",
            title: "Breakfast at the Hotel",
            description: "Blend of international and local dishes",
            image: "/siemreap/break2.png",
            imageAlt: "Hotel breakfast buffet",
          },
          {
            time: "7:30 AM",
            title: "Site Visit – Angkor Wat Complex",
            description:
              "The team will spend the morning visiting Angkor Wat, one of Cambodia’s most iconic cultural heritage sites.",
            image: "/siemreap/angkorwat-2.png",
            imageAlt: "Angkor Wat Complex",
          },
          {
            time: "12:30 PM",
            title: "Lunch at Bakong Restaurant and Cafe Siem Reap",
            description:
              "Enjoy a traditional Khmer meal with a modern twist at Bakong Restaurant and Cafe.",
            image: "/siemreap/bakong.png",
            imageAlt: "Lunch at Bakong Restaurant and Cafe Siem Reap",
          },
          {
            time: "2:00 PM",
            title: "Departure from Siem Reap to Phnom Penh via Larryta Bus",
            description:
              "The team will depart from Siem Reap to Phnom Penh via Larryta bus, concluding the trip.",
            image: "/siemreap/lary2.png",
            imageAlt: "Departure from Siem Reap",
          },
          {
            time: "7:30 PM",
            title: "Arrival in Phnom Penh",
            description: "The team arrives back in Phnom Penh.",
            image: "/siemreap/pp.png",
            imageAlt: "Arrival in Phnom Penh",
          },
        ],
      },
    ],
    expenses: [
      {
        category: "Laryta Bus (Round Trip)",
        details: "Phnom Penh → Siem Reap → Phnom Penh (3 members)",
        cost: "$78",
      },
      {
        category: "Accommodation",
        details: "4 nights at Bopha Wat Bo Residence",
        cost: "$160",
      },
      {
        category: "Meals",
        details: "Breakfast, coffee, lunch, dinner",
        cost: "$480",
      },
      {
        category: "Local Transportation",
        details: "Motorbike rental for 4 days, TukTuk and Grab",
        cost: "$200",
      },
      {
        category: "Extracurricular",
        details: "Visit Angkor Wat",
        cost: "$30",
      },
    ],
    conclusion:
      "The five-day business trip to Siem Reap has been highly productive in identifying prime locations for our company’s expansion. Through extensive site visits to high-traffic commercial areas such as Pub Street, Old Market, Wat Bo Road, 7 Makara Road, and Angkor Night Market Street, the team gained critical insights into the local business environment, infrastructure readiness, and potential client engagement. Wat Bo Road and 7 Makara Road emerged as the most promising sites for establishing an office or service hub due to their accessibility, infrastructure quality, and vibrant business community. Meanwhile, the Pub Street and Angkor Night Market areas offer excellent opportunities for deploying tech solutions that support local vendors and tourism-related businesses. This field research equips our company with strategic direction and actionable recommendations to proceed with site negotiations, technology deployment, and market entry plans in Siem Reap. The delegation returns motivated and confident in the potential for sustainable growth in this dynamic city.",
    takeaways: [
      {
        title: "High-Potential Expansion Areas Identified",
        description:
          "Wat Bo Road and 7 Makara Road offer strong potential for office or service hub expansion due to solid infrastructure, accessibility, and a vibrant commercial environment.",
      },
      {
        title: "Opportunities for Digital Enablement in Tourist Zones",
        description:
          "Pub Street and Angkor Night Market areas present ideal opportunities for implementing digital tools such as mobile payments, Wi-Fi, and digital advertising to support local vendors and tourists.",
      },
    ],
    nextSteps: [
      {
        title: "Prioritize Wat Bo and 7 Makara for Expansion",
        description:
          "Begin detailed site evaluations and initiate discussions with property owners in these two priority areas.",
        timeline: "Within 2 weeks",
        priority: "High",
      },
      {
        title: "Prepare Internal Report and Recommendation Brief",
        description:
          "Compile findings and recommendations into a presentation for leadership to guide next-phase decisions and budgeting.",
        timeline: "By 21 July 2025",
        priority: "Critical",
      },
      {
        title: "Engage Local Authorities and Partners",
        description:
          "Schedule meetings with local government and business groups to explore partnership opportunities and obtain necessary permits.",
        timeline: "Within 1 month",
        priority: "High",
      },
      {
        title: "Conduct Feasibility Analysis and Budget Forecasting",
        description:
          "Evaluate costs, ROI potential, and resource requirements for setting up a permanent presence in Siem Reap.",
        timeline: "Within 45 days",
        priority: "Medium",
      },
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
              src="/siemreap/angkor.png"
              alt="Angkor Wat Siem Reap"
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

          <ExpensesTable expenses={tripData.expenses} totalCost="$948" />

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
