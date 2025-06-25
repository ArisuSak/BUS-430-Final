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
    title: "Business Trip to Singapore",
    subtitle: "Technology Exhibition 3MN Chip",
    description:
      "A delegation attended a two-day international business research presentation focused on Social Media Marketing Strategies in the Digital Age, held at the Marina Bay Sands Expo and Convention Centre, Singapore, from 14–15 December 2024.",
    stats: [
      {
        icon: <Calendar className="h-4 w-4 text-gray-600" />,
        label: "Duration",
        value: "2 Days",
      },
      {
        icon: <MapPin className="h-4 w-4 text-gray-600" />,
        label: "Location",
        value: "Singapore",
      },
      {
        icon: <Users className="h-4 w-4 text-gray-600" />,
        label: "Team Size",
        value: "3 Members",
      },
      {
        icon: <DollarSign className="h-4 w-4 text-gray-600" />,
        label: "Total Cost",
        value: "$2,830",
      },
    ],
    days: [
      {
        date: "Saturday, 14 December 2024",
        events: [
          {
            time: "7:00 AM",
            title: "Departure from Phnom Penh",
            description:
              "Phnom Penh International Airport to Singapore Changi Airport",
            image:
              "https://content.presspage.com/uploads/2431/70c7dbdc-289e-45e2-ba47-93e924db18ae/1920_emirateslandsinphnompenh1.jpg?10000",
            imageAlt: "Airport departure scene",
          },
          {
            time: "10:30 AM",
            title: "Arrival in Singapore",
            description: "Airport transfer to Marina Bay Sands Hotel",
            image:
              "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop",
            imageAlt: "Singapore Changi Airport",
          },
          {
            time: "11:30 AM",
            title: "Check-in and Registration",
            description: "Marina Bay Sands Expo and Convention Centre",
            image:
              "https://www.marinabaysands.com/content/dam/marinabaysands/hotel/the-sands-collection-landing-page/room-listing/sands-premier-room-1.jpg",
            imageAlt: "Marina Bay Sands Hotel",
          },
          {
            time: "1:00 PM",
            title: "Welcome Lunch",
            description: "Lunch with the Team at The Orchard Cafe",
            image:
              "https://www.millenniumhotels.com/mhb-media/regions/asia/siingapore/orchardhotelsingapore/dining/images/theorchardcafe/orchard_hotel_singapore_the_orchard_cafe_header_image_1280x688-(1).jpg?rev=c5408f2f0d1149acb363c6b1bc8eda10",
            imageAlt: "Business networking lunch",
          },
          {
            time: "2:30 PM",
            title: "Opening Session",
            description: "Keynote presentation on 3MN Chip Technology",
            image:
              "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
            imageAlt: "Technology conference presentation",
          },
          {
            time: "7:00 PM",
            title: "Networking Dinner",
            description: "Rooftop restaurant with exhibition sponsors",
            image:
              "https://www.marinabaysands.com/content/dam/marinabaysands/restaurant-categories/rooftop-dining/masthead.jpg",
            imageAlt: "Singapore skyline dining",
          },
        ],
      },
      {
        date: "Sunday, 15 December 2024",
        events: [
          {
            time: "8:00 AM",
            title: "Breakfast at the Hotel",
            description: "Blend of international and local dishes",
            image:
              "https://images.squarespace-cdn.com/content/v1/5e2899ec34f10469ac758b30/321fbbca-3b41-450e-ae1a-d461e11ff3ce/IMG_6074.jpg",
            imageAlt: "Hotel breakfast buffet",
          },
          {
            time: "9:30 AM",
            title: "Technology Workshops",
            description:
              "Hands-on session with new microchip technologies and AI",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYXwLNz4a-FnhSUS8c_q4X1Si1_0k857LrEw&s",
            imageAlt: "Technology workshop session",
          },
          {
            time: "12:00 PM",
            title: "Business Lunch",
            description: "Discussion with potential partners",
            image:
              "https://cf.bstatic.com/xdata/images/hotel/max1024x768/611271421.jpg?k=db1451fe18e2e807795ec1c398840c21900a42747282641f13367f28e29f7e82&o=&hp=1",
            imageAlt: "Singapore business lunch",
          },
          {
            time: "4:00 PM",
            title: "Closing Session",
            description: "Final presentations and future roadmap discussions",
            image:
              "https://knect365.imgix.net/uploads/Untitled-design-2--05cfbcd07755e9ecec1bfbb002edbd49.png?auto=format&fit=max&w=412&dpr=5",
            imageAlt: "Conference closing session",
          },
          {
            time: "6:00 PM",
            title: "Departure from Singapore",
            description:
              "Singapore Changi Airport to Phnom Penh International Airport",
            image:
              "https://singaporetravelinsider.com/wp-content/uploads/2022/12/hotel-shuttle-changi-airport-1024x682.jpg",
            imageAlt: "Airport departure gate",
          },
          {
            time: "11:30 PM",
            title: "Arrival in Phnom Penh",
            description: "End of business trip",
            image:
              "https://www.angkorphotographytours.com/wp-content/uploads/2023/10/new-phnom-penh-international-airport.jpg",
            imageAlt: "Phnom Penh evening arrival",
          },
        ],
      },
    ],
    expenses: [
      {
        category: "Emirates Airfare",
        details: "Phnom Penh → Singapore → Phnom Penh (3 members)",
        cost: "$1,710",
      },
      {
        category: "Hotel Accommodation",
        details: "Marina Bay Sands (1 night, 2 rooms)",
        cost: "$580",
      },
      {
        category: "Local Transportation",
        details: "Airport transfers and city travel",
        cost: "$120",
      },
      {
        category: "Meals & Entertainment",
        details: "Group dinners and local cuisine",
        cost: "$230",
      },
      {
        category: "Registration Fees",
        details: "Exhibition entry and workshop participation",
        cost: "$150",
      },
      {
        category: "Miscellaneous",
        details: "Internet, printing, gifts",
        cost: "$40",
      },
    ],
    conclusion:
      "The Singapore business trip proved highly valuable for the Technology Exhibition 3MN Chip team. The international exhibition provided deep insights into cutting-edge microchip technologies, AI-enhanced systems, and global innovation strategies. The experience has equipped our technical and development team with the tools to advance our capabilities, foster innovation, and explore collaborative ventures in the tech sector.",
    takeaways: [
      {
        title: "Emerging trends in microchip technology and design",
        description:
          "Learned about latest nanometer processing, AI integration capabilities, and energy-efficient designs that could revolutionize our current chip architecture.",
      },
      {
        title: "Potential partnerships with global technology providers",
        description:
          "Established connections with leading semiconductor manufacturers and identified opportunities for strategic collaborations in R&D and manufacturing.",
      },
      {
        title: "Competitive analysis of similar products in the market",
        description:
          "Gained insights into competitor strategies, pricing models, and market positioning that will inform our product development roadmap.",
      },
      {
        title: "New marketing strategies for technical products",
        description:
          "Discovered innovative approaches to digital marketing, customer engagement, and technical communication that resonate with our target audience.",
      },
    ],
    nextSteps: [
      {
        title: "Implement learned technologies into our development roadmap",
        description:
          "Integrate new microchip design methodologies and AI-enhanced features into our Q2 2025 development cycle",
        timeline: "Within 30 days",
        icon: <Target className="h-4 w-4" />,
        priority: "High",
      },
      {
        title: "Follow up with potential partners for collaboration",
        description:
          "Schedule follow-up meetings with 5 key technology providers to discuss partnership agreements and joint ventures",
        timeline: "Within 2 weeks",
        icon: <Users2 className="h-4 w-4" />,
        priority: "High",
      },
      {
        title: "Present findings to the executive team with recommendations",
        description:
          "Prepare comprehensive presentation covering market insights, technology trends, and strategic recommendations for board review",
        timeline: "Within 1 week",
        icon: <Presentation className="h-4 w-4" />,
        priority: "Critical",
      },
      {
        title: "Develop training program based on acquired knowledge",
        description:
          "Create technical training modules for engineering team covering new methodologies and best practices learned at the exhibition",
        timeline: "Within 45 days",
        icon: <GraduationCap className="h-4 w-4" />,
        priority: "Medium",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
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
              src="https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200&h=400&fit=crop"
              alt="Singapore Marina Bay Sands skyline"
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

          <ExpensesTable expenses={tripData.expenses} totalCost="$2,830" />

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

            <motion.div
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
            </motion.div>
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
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.3 }}
                        >
                          {step.icon}
                        </motion.div>
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