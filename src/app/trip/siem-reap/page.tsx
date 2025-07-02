'use client';
import React, { useState } from 'react';
import {
  Award,
  Calendar,
  Camera,
  CheckCircle,
  DollarSign,
  GraduationCap,
  MapPin,
  Presentation,
  Quote,
  Target,
  Users,
  Users2,
} from 'lucide-react';
import { motion } from 'framer-motion';
import ExpensesTable from '@/components/ExpensesTable';
import Timeline from '@/components/TripTimeline';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
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
    title: 'Business Trip to Siem Reap',
    subtitle: 'Expansion Site Scouting for Future Development',
    description:
      'A five-day business delegation will travel to Siem Reap from 15–19 February 2025 to evaluate potential locations for the expansion of our company. The mission is to analyze strategic areas based on foot traffic, infrastructure, accessibility, surrounding commercial activity, and potential for expansion of the company',
    objectives: [
      'Evaluate potential locations for company expansion in Siem Reap',
      'Analyze strategic areas based on foot traffic and infrastructure',
      'Assess commercial properties for lease or purchase opportunities',
      'Engage with local stakeholders and community leaders',
      'Survey accessibility and brand visibility potential across five key zones',
    ],
    keyInsights: [
      'Wat Bo Road and 7 Makara Road identified as most promising sites for office/service hub establishment',
      'Pub Street and Angkor Night Market areas offer excellent opportunities for tech solution deployment',
      'Local business environment shows strong infrastructure readiness and vibrant commercial community',
      'Tourism-related businesses present significant potential for vendor support services',
      'Field research provides actionable recommendations for site negotiations and market entry strategy',
    ],
    stats: [
      {
        icon: <Calendar className='h-4 w-4 text-gray-600' />,
        label: 'Duration',
        value: '5 Days',
      },
      {
        icon: <MapPin className='h-4 w-4 text-gray-600' />,
        label: 'Location',
        value: 'Siem Reap',
      },
      {
        icon: <Users className='h-4 w-4 text-gray-600' />,
        label: 'Team Size',
        value: '3 Members',
      },
      {
        icon: <DollarSign className='h-4 w-4 text-gray-600' />,
        label: 'Total Cost',
        value: '$948',
      },
    ],
    days: [
      {
        date: 'Friday, 14 February 2025',
        events: [
          {
            time: '6:00 AM',
            title: 'Departure from Phnom Penh',
            description: 'Departure from Phnom Penh by Larryta bus',
            image: '/siemreap/lary.png',
            imageAlt: 'Larryta Bus',
          },
          {
            time: '1:30 PM - 2:30 PM',
            title: 'Arrival in Siem Reap',
            description: 'Arrival in Siem Reap and check-in at Bopha Wat Bo Residence',
            image: '/siemreap/wat-bo-res.png',
            imageAlt: 'Bopha Wat Bo Residence',
          },
          {
            time: '3:00 PM – 5:00 PM',
            title: 'Briefing session at the cafe.',
            description: 'A briefing session to discuss the trip objectives and review the scheduled site visits.',
            image: '/siemreap/meeting.png',
            imageAlt: 'Hotel Meeting Room',
          },
          {
            time: '7:00 PM',
            title: 'Dinner',
            description: 'Welcome Dinner at Chanrey Tree Restaurant, Riverside',
            image: '/siemreap/dinner-1.png',
            imageAlt: 'Chanrey Tree Restaurant',
          },
        ],
      },
      {
        date: 'Saturday, 15 February 2025',
        events: [
          {
            time: '8:00 AM – 9:00 AM',
            title: 'Breakfast at the Hotel',
            description: 'Blend of international and local dishes',
            image: '/siemreap/breakfast-1.png',
            imageAlt: 'Hotel breakfast buffet',
          },
          {
            time: '9:30 AM – 12:00 PM',
            title: 'Site visit at Pub Street and Old Market',
            description:
              'Inspect commercial properties for lease or purchase, assessing infrastructure, accessibility, and nearby businesses.',
            image: '/siemreap/old-market.png',
            imageAlt: 'Site visit',
          },
          {
            time: '12:30 PM – 1:30 PM',
            title: 'Lunch at Malis Restaurant',
            description: 'Traditional Khmer cuisine with a modern twist',
            image: '/siemreap/malis.png',
            imageAlt: 'Malis Restaurant',
          },
          {
            time: '2:00 PM – 4:00 PM',
            title: 'Interview with nearby business owners and vendors',
            description: 'Gather insights on local market conditions and business climate.',
            image: '/siemreap/interview-1.png',
            imageAlt: 'Airport departure gate',
          },
          {
            time: '4:30 PM – 6:00 PM',
            title: 'Team debrief and note consolidation',
            description: 'Review findings and prepare for next day’s visits',
            image: '/siemreap/team-met-1.png',
            imageAlt: 'Team debrief session',
          },
          {
            time: '7:00 PM',
            title: ' Dinner at The Cuisine Wat Damnak',
            description: 'Experience fine dining with a focus on local ingredients.',
            image: '/siemreap/wat-domnak.png',
            imageAlt: 'Cuisine Wat Damnak',
          },
        ],
      },
      {
        date: 'Sunday, 16 February 2025',
        events: [
          {
            time: '8:00 AM – 9:00 AM',
            title: 'Breakfast at the Hotel',
            description: 'Blend of international and local dishes',
            image: '/siemreap/break-2.png',
            imageAlt: 'Hotel breakfast buffet',
          },
          {
            time: '9:30 AM – 12:00 PM',
            title: 'Survey of Wat Bo Road area',
            description:
              'Inspect commercial properties for lease or purchase, assessing infrastructure, accessibility, and nearby businesses.',
            image: '/siemreap/wat-bo.png',
            imageAlt: 'Walking survey',
          },
          {
            time: '12:30 PM – 1:30 PM',
            title: 'Lunch at The Bean Embassy Roastery & Specialty Coffee',
            description: 'Specialty coffee and light bites',
            image: '/siemreap/coffee-bean.png',
            imageAlt: 'The Bean Embassy Roastery & Specialty Coffee',
          },
          {
            time: '2:00 PM – 4:00 PM ',
            title: 'Exploration of 7 Makara Road corridor',
            description: 'Assess commercial properties and surrounding infrastructure.',
            image: '/siemreap/wat-bo-2.png',
            imageAlt: 'Airport departure gate',
          },
          {
            time: '4:30 PM – 6:00 PM',
            title: 'Biking Around Angkor Wat',
            description: 'Explore the Angkor Wat area by bike after visiting the 7 Makara Road corridor.',
            image: '/siemreap/met-3.png',
            imageAlt: 'Team debrief session',
          },
          {
            time: '7:00 PM',
            title: "Dinner at Embassy Restaurant, King's Road",
            description: 'Experience modern Khmer cuisine in a vibrant setting.',
            image: '/siemreap/emba-res.png',
            imageAlt: 'Embassy Restaurant',
          },
        ],
      },
      {
        date: 'Monday, 17 February 2025',
        events: [
          {
            time: '8:00 AM – 9:00 AM',
            title: 'Street Breakfast',
            description: 'Enjoying kuy teav and coffee.',
            image: '/siemreap/breakfast-out.png',
            imageAlt: 'Street-side breakfast with kuy teav and coffee',
          },
          {
            time: '9:30 AM – 12:00 PM',
            title: 'Site Visit to Angkor Night Market Street',
            description:
              'Visit the site to explore shops and entertainment spots, check foot traffic, and assess tech use like mobile payments, Wi-Fi, and digital ads.',
            image: '/siemreap/nigth-3.png',
            imageAlt: 'Walking survey',
          },
          {
            time: '12:30 PM – 1:30 PM',
            title: 'Lunch at Srah Srang',
            description: 'Take a break and enjoy lunch while admiring the natural scenery of Srah Srang.',
            image: '/siemreap/sras.png',
            imageAlt: 'Lunch at Srah Srang',
          },
          {
            time: '2:00 PM – 4:00 PM',
            title: ' Summary Session at Brown Coffee Shop',
            description:
              'Summary all observations and data from the trip. Prioritize locations based on infrastructure, commercial activity, accessibility, and tech adoption readiness. Draft the report',
            image: '/siemreap/brown.png',
            imageAlt: 'Brown Coffee Shop',
          },
          {
            time: '7:00 PM',
            title: 'Dinner at Tonle Sap restaurant',
            description: 'Experience modern Khmer cuisine in a vibrant setting.',
            image: '/siemreap/tonel.png',
            imageAlt: 'Tonle Sap Restaurant',
          },
        ],
      },
      {
        date: 'Tuesday, 18 February 2025',
        events: [
          {
            time: '6:00 AM – 7:00 AM',
            title: 'Breakfast at the Hotel',
            description: 'Blend of international and local dishes',
            image: '/siemreap/break2.png',
            imageAlt: 'Hotel breakfast buffet',
          },
          {
            time: '7:30 AM – 11:30 AM',
            title: 'Site Visit – Angkor Wat Complex',
            description:
              'The team will spend the morning visiting Angkor Wat, one of Cambodia’s most iconic cultural heritage sites.',
            image: '/siemreap/angkorwat-2.png',
            imageAlt: 'Angkor Wat Complex',
          },
          {
            time: '12:30 PM – 1:00 PM',
            title: 'Lunch at Bakong Restaurant and Cafe Siem Reap',
            description: 'Enjoy a traditional Khmer meal with a modern twist at Bakong Restaurant and Cafe.',
            image: '/siemreap/bakong.png',
            imageAlt: 'Lunch at Bakong Restaurant and Cafe Siem Reap',
          },
          {
            time: '2:00 PM',
            title: 'Departure from Siem Reap to Phnom Penh via Larryta Bus',
            description: 'The team will depart from Siem Reap to Phnom Penh via Larryta bus, concluding the trip.',
            image: '/siemreap/lary2.png',
            imageAlt: 'Departure from Siem Reap',
          },
          {
            time: '7:30 PM',
            title: 'Arrival in Phnom Penh',
            description: 'The team arrives back in Phnom Penh.',
            image: '/siemreap/pp.png',
            imageAlt: 'Arrival in Phnom Penh',
          },
        ],
      },
    ],
    expenses: [
      {
        category: 'Laryta Bus (Round Trip)',
        details: 'Phnom Penh → Siem Reap → Phnom Penh (3 members)',
        cost: '$78',
      },
      {
        category: 'Accommodation',
        details: '4 nights at Bopha Wat Bo Residence',
        cost: '$160',
      },
      {
        category: 'Meals',
        details: 'Breakfast, coffee, lunch, dinner',
        cost: '$480',
      },
      {
        category: 'Local Transportation',
        details: 'Motorbike rental for 4 days, TukTuk and Grab',
        cost: '$200',
      },
      {
        category: 'Extracurricular',
        details: 'Visit Angkor Wat',
        cost: '$30',
      },
    ],
    conclusion:
      'The five-day business trip to Siem Reap has been highly productive in identifying prime locations for our company’s expansion. Through extensive site visits to high-traffic commercial areas such as Pub Street, Old Market, Wat Bo Road, 7 Makara Road, and Angkor Night Market Street, the team gained critical insights into the local business environment, infrastructure readiness, and potential client engagement. Wat Bo Road and 7 Makara Road emerged as the most promising sites for establishing an office or service hub due to their accessibility, infrastructure quality, and vibrant business community. Meanwhile, the Pub Street and Angkor Night Market areas offer excellent opportunities for deploying tech solutions that support local vendors and tourism-related businesses. This field research equips our company with strategic direction and actionable recommendations to proceed with site negotiations, technology deployment, and market entry plans in Siem Reap. The delegation returns motivated and confident in the potential for sustainable growth in this dynamic city.',
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-white'>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='bg-white shadow-sm border-b border-gray-100'>
        <div className='container mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
              <div className='bg-blue-600 p-2 rounded-lg'>
                <Presentation className='h-6 w-6 text-white' />
              </div>
              <div>
                <h1 className='text-xl font-bold text-gray-900'>Business Report</h1>
                <p className='text-sm text-gray-500'>Trip Documentation & Analysis</p>
              </div>
            </div>
            <div className='text-right'>
              <p className='text-sm text-gray-500'>Generated on</p>
              <p className='text-sm font-semibold text-gray-900'>February 19, 2025</p>
            </div>
          </div>
        </div>
      </motion.header>

      <main className='container mx-auto px-6 py-12'>
        {/* Executive Summary */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-20'>
          <div className='text-center mb-16'>
            <motion.h1 variants={fadeInUp} className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              {tripData.title}
            </motion.h1>
            <motion.h2 variants={fadeInUp} className='text-xl text-gray-600 mb-8'>
              {tripData.subtitle}
            </motion.h2>

            {/* Enhanced Hero Image */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className='w-full max-w-7xl mx-auto mb-12 rounded-2xl overflow-hidden group cursor-pointer shadow-2xl'>
              <img
                src='/siemreap/angkor.png'
                alt='Mondulkiri Province landscape'
                className='w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </motion.div>

            <motion.p variants={fadeInUp} className='max-w-4xl mx-auto text-gray-700 mb-12 leading-relaxed text-lg'>
              {tripData.description}
            </motion.p>
          </div>

          {/* Enhanced Stats Grid */}
          <motion.div variants={staggerContainer} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
            {tripData.stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.03 }}
                className={`${stat.bgColor} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100`}>
                <motion.div className='flex justify-center mb-4' whileHover={{ rotate: 10 }} transition={{ duration: 0.3 }}>
                  {stat.icon}
                </motion.div>
                <div className='text-center'>
                  <span className='text-sm text-gray-600 block mb-2 font-medium'>{stat.label}</span>
                  <span className='text-2xl font-bold text-gray-900 block mb-1'>{stat.value}</span>
                  <span className='text-xs text-gray-500'>{stat.subtitle}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Objectives & Outcomes */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='mb-20'>
          <div className='grid md:grid-cols-2 gap-12'>
            {/* Mission Objectives */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className='text-2xl font-bold text-gray-900 mb-8 flex items-center'>
                <Target className='h-7 w-7 mr-3 text-blue-600' />
                Mission Objectives
              </motion.h2>

              <div className='space-y-4'>
                {tripData.objectives.map((objective, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className='flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300'>
                    <div className='bg-green-100 p-2 rounded-lg mt-1'>
                      <CheckCircle className='h-5 w-5 text-green-600' />
                    </div>
                    <p className='text-gray-700 leading-relaxed'>{objective}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Insights */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className='text-2xl font-bold text-gray-900 mb-8 flex items-center'>
                <Quote className='h-7 w-7 mr-3 text-purple-600' />
                Key Insights
              </motion.h2>

              <div className='space-y-4'>
                {tripData.keyInsights.map((insight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className='p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300'>
                    <div className='flex items-start space-x-3'>
                      <div className='bg-purple-100 p-2 rounded-lg mt-1'>
                        <GraduationCap className='h-5 w-5 text-purple-600' />
                      </div>
                      <p className='text-gray-700 leading-relaxed font-medium'>{insight}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <Timeline days={tripData.days} activeDay={activeDay} setActiveDay={setActiveDay} />

        {/* Expenses Section */}
        <ExpensesTable expenses={tripData.expenses} totalCost='$948' />

        {/* Enhanced Conclusion */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='mb-16'>
          <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-blue-100'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className='text-3xl font-bold text-gray-900 mb-8 flex items-center'>
              <Award className='h-8 w-8 mr-4 text-blue-600' />
              Mission Accomplished
            </motion.h2>

            <div className='grid md:grid-cols-2 gap-8'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className='space-y-4'>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>Project Summary</h3>
                <p className='text-gray-700 leading-relaxed text-base'>{tripData.conclusion}</p>
              </motion.div>
            </div>

            {/* Success Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className='mt-8 pt-8 border-t border-blue-200'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='text-center'>
                  <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3'>
                    <CheckCircle className='h-8 w-8 text-green-600' />
                  </div>
                  <h4 className='font-semibold text-gray-900 mb-1'>100% Complete</h4>
                  <p className='text-sm text-gray-600'>All objectives achieved</p>
                </div>

                <div className='text-center'>
                  <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3'>
                    <Camera className='h-8 w-8 text-blue-600' />
                  </div>
                  <h4 className='font-semibold text-gray-900 mb-1'>Rich Content</h4>
                  <p className='text-sm text-gray-600'>Photos & interviews captured</p>
                </div>

                <div className='text-center'>
                  <div className='bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3'>
                    <Users2 className='h-8 w-8 text-purple-600' />
                  </div>
                  <h4 className='font-semibold text-gray-900 mb-1'>Strong Relations</h4>
                  <p className='text-sm text-gray-600'>Meaningful connections built</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
