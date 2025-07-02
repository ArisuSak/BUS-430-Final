/* eslint-disable @typescript-eslint/no-unused-vars */
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
import Timeline from '@/components/TripTimeline';
import ExpensesTable from '@/components/ExpensesTable';

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
    title: 'Business Trip to Sihanoukville',
    subtitle: 'Meetings with Potential Investors at Two Locations',
    description:
      'From 21 to 22 July 2025, a three-member delegation traveled to Sihanoukville to engage with potential investors and explore two development zones for a future coastal eco-tourism and smart infrastructure project. The goal of the trip was to introduce the investment proposal, build relationships, and assess the site feasibility.',
    objectives: [
      'Engage with potential investors for coastal eco-tourism and smart infrastructure project',
      'Present investment proposal and build strategic relationships',
      'Assess site feasibility across two development zones',
      'Evaluate infrastructure and logistics capabilities at Sihanoukville Autonomous Port',
      'Explore partnership opportunities for sustainable development collaboration',
    ],
    keyInsights: [
      'Both potential investors showed strong interest in partnership opportunities',
      'Otres Beach and Ream Beach development zones demonstrate significant growth potential',
      'Infrastructure assessment reveals development-ready plots with good accessibility',
      'Port logistics capabilities support project execution requirements',
      'Positive investor feedback establishes foundation for future capital acquisition in coastal growth corridor',
    ],
    stats: [
      {
        icon: <Calendar className='h-4 w-4 text-gray-600' />,
        label: 'Duration',
        value: '2 Days',
      },
      {
        icon: <MapPin className='h-4 w-4 text-gray-600' />,
        label: 'Location',
        value: 'Sihanoukville',
      },
      {
        icon: <Users className='h-4 w-4 text-gray-600' />,
        label: 'Team Size',
        value: '3 Members',
      },
      {
        icon: <DollarSign className='h-4 w-4 text-gray-600' />,
        label: 'Total Cost',
        value: '$735',
      },
    ],
    days: [
      {
        date: 'Monday, 21 July 2025',
        events: [
          {
            time: '7:00 AM',
            title: 'Departure from Phnom Penh',
            description: 'Travel via P-SHV Expressway (PPSHV) to Sihanoukville',
            image: 'https://www.khmertimeskh.com/wp-content/uploads/2022/11/fz2bhsuv.jpg',
            imageAlt: 'Departure via PPSHV Expressway',
          },
          {
            time: '9:00 AM',
            title: 'Arrival in Sihanoukville',
            description: 'Reached coastal destination after 2-hour journey',
            image:
              'https://server.ourglobaltrek.com/wp-content/uploads/2014/12/chairs-on-the-sand-at-serendipity-beach-in-sihanoukville.jpg',
            imageAlt: 'Sihanoukville coastal arrival',
          },
          {
            time: '10:00 AM',
            title: 'Meeting with Investor #1',
            description:
              'Smart property project presentation and investment pitch at Novotel Sihanoukville Hotel (10:00 AM - 12:00 PM)',
            image: 'https://www.novotelsihanoukville.com/wp-content/uploads/sites/78/2024/02/Building-Sea-View-scaled.jpg',
            imageAlt: 'Business meeting presentation at hotel',
          },
          {
            time: '12:00 PM',
            title: 'Lunch with Investor and Team',
            description: 'Networking meal at local seafood restaurant (12:00 PM - 1:30 PM)',
            image:
              'https://autourasia.com/uploads/Travel-Guide-Cambodia/sihanoukville/specialties-sihanoukville/1-que-manger-a-sihanoukville-top-06-meilleurs-specialites-a-sihanoukville.jpg',
            imageAlt: 'Seafood lunch business meeting',
          },
          {
            time: '2:00 PM',
            title: 'Check-in at Blue Bay International Hotel',
            description: 'Accommodation setup and rest period (2:00 PM - 4:00 PM)',
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/15/9e/ac/ff/breakfast-buffet.jpg',
            imageAlt: 'Hotel check-in at Blue Bay International',
          },
          {
            time: '4:00 PM',
            title: 'Site Visit #1 - Otres Beach Development Zone',
            description: 'Tour of zoning, accessibility, and development-ready plots (4:00 PM - 5:30 PM)',
            image: 'https://lp-cms-production.imgix.net/2019-06/8531cb22680201872a154cee335b4040-otres-beach.jpg',
            imageAlt: 'Otres Beach development zone inspection',
          },
          {
            time: '6:00 PM',
            title: 'Dinner with Local Business Representatives',
            description: 'Networking dinner at The White Restaurant (6:00 PM - 7:30 PM)',
            image:
              'https://white-boutique.sihanoukville-hotels.com/data/Imgs/OriginalPhoto/7500/750026/750026102/img-white-boutique-hotel-sihanoukville-13.JPEG',
            imageAlt: 'Business dinner at coastal restaurant',
          },
          {
            time: '8:00 PM',
            title: 'Return to Hotel and Team Debrief',
            description: 'Day summary and preparation for next day (8:00 PM - 9:00 PM)',
            image:
              'https://cf.bstatic.com/xdata/images/hotel/max1024x768/455968344.jpg?k=3356cc9e692e63036435f1349f7e03d2b5881757be9cce0e282013e7b6e2b525&o=&hp=1',
            imageAlt: 'Team debrief session at hotel',
          },
        ],
      },
      {
        date: 'Tuesday, 22 July 2025',
        events: [
          {
            time: '8:00 AM',
            title: 'Breakfast at Hotel',
            description: 'Morning meal and preparation for investor meetings',
            image:
              'https://howard-johnson-by-wyndham.sihanoukville-hotels.com/data/Pics/OriginalPhoto/11173/1117385/1117385682/howard-johnson-by-wyndham-sihanoukville-pic-83.JPEG',
            imageAlt: 'Hotel breakfast preparation',
          },
          {
            time: '9:00 AM',
            title: 'Meeting with Investor #2',
            description: 'Eco-tourism and sustainable development presentation at Sokha Beach Resort (9:00 AM - 11:00 AM)',
            image: 'https://sokhahotels.com.kh/sihanoukville/jp/img/slideshows/meeting_events/Grand-BallroomLogo.jpg',
            imageAlt: 'Business presentation at beach resort',
          },
          {
            time: '11:30 AM',
            title: 'Visit to Sihanoukville Autonomous Port',
            description: 'Logistics capabilities evaluation (11:30 AM - 12:00 PM)',
            image: 'https://pas.gov.kh/images/slideshows/13-08-2021-rand-6295383.JPG',
            imageAlt: 'Port logistics assessment',
          },
          {
            time: '12:30 PM',
            title: 'Lunch at Ochheuteal Beach',
            description: 'Coastal dining and team discussion (12:30 PM - 1:30 PM)',
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/02/df/3f/photo0jpg.jpg',
            imageAlt: 'Beach lunch at Ochheuteal',
          },
          {
            time: '2:00 PM',
            title: 'Site Visit #2 - Ream Beach Development Zone',
            description: 'Commercial growth areas and infrastructure observation (2:00 PM - 3:00 PM)',
            image: 'https://www.khmertimeskh.com/wp-content/uploads/2022/12/Bay-of-Lights-Sihanoukville-Ream-Cambodia.jpg',
            imageAlt: 'Ream Beach development zone tour',
          },
          {
            time: '3:30 PM',
            title: 'Departure from Sihanoukville',
            description: 'Return journey to Phnom Penh via Expressway',
            image: 'https://b2b-cambodia.com/wp-content/uploads/2022/12/ETC-Lane-at-PPSHV-Expressway.jpg',
            imageAlt: 'Departure from Sihanoukville',
          },
          {
            time: '5:30 PM',
            title: 'Arrival in Phnom Penh',
            description: 'End of business trip',
            image: 'https://lostplate.com/wp-content/uploads/2020/05/Phnom-Penh-Food-Tour-Independence-Monument.jpg',
            imageAlt: 'Evening arrival in Phnom Penh',
          },
        ],
      },
    ],
    expenses: [
      {
        category: 'Transportation',
        details: 'Round-trip van via PPSHV Expressway',
        cost: '$180',
      },
      {
        category: 'Accommodation',
        details: '1 night at Blue Bay International Hotel',
        cost: '$250',
      },
      {
        category: 'Meals',
        details: 'Breakfast, lunch, dinner (2 days)',
        cost: '$80',
      },
      {
        category: 'Meeting & Venue Fees',
        details: 'Room rental, materials, and refreshments',
        cost: '$150',
      },
      {
        category: 'Miscellaneous',
        details: 'Snacks, tips, water',
        cost: '$75',
      },
    ],
    conclusion:
      "The two-day field mission to Sihanoukville on 21–22 July 2025 was productive and promising. Our team successfully pitched to two potential investors, both of whom showed interest in partnership opportunities. Site visits provided valuable firsthand insight into infrastructure, zoning, and potential returns. With positive investor feedback and practical exposure, this trip lays the foundation for future capital acquisition and project execution in Cambodia's coastal growth corridor.",
    takeaways: [
      {
        title: 'Successful investor engagement and partnership interest',
        description:
          'Both potential investors at Novotel Sihanoukville Hotel and Sokha Beach Resort showed genuine interest in the smart property and eco-tourism projects, opening doors for future collaborations.',
      },
      {
        title: 'Comprehensive site feasibility assessment',
        description:
          'Detailed evaluation of Otres Beach and Ream Beach development zones provided crucial insights into zoning regulations, accessibility, and development-ready infrastructure.',
      },
      {
        title: 'Strategic coastal development opportunities identified',
        description:
          'The coastal location offers significant potential for eco-tourism and smart infrastructure projects, with strong logistics support from Sihanoukville Autonomous Port.',
      },
      {
        title: 'Local business network expansion',
        description:
          'Established valuable connections with local business representatives and stakeholders, creating a foundation for future project implementation and community integration.',
      },
    ],
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
              <p className='text-sm font-semibold text-gray-900'>July 23, 2025</p>
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
                src='https://content.api.news/v3/images/bin/f1beeee564fa4ba9b3d662d94c0ed885'
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
        <ExpensesTable expenses={tripData.expenses} totalCost='$735' />

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
