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
import Timeline from '@/components/TripTimeline';
import ExpensesTable from '@/components/ExpensesTable';
import { motion } from 'framer-motion';

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
    title: 'Business Trip to Singapore',
    subtitle: 'Technology Exhibition 3MN Chip',
    description:
      'A delegation attended a two-day international business research presentation focused on Social Media Marketing Strategies in the Digital Age, held at the Marina Bay Sands Expo and Convention Centre, Singapore, from 14–15 December 2024.',
    objectives: [
      'Attend international technology exhibition focused on 3MN Chip and AI-microchip integration',
      'Gain insights into cutting-edge microchip technologies and fabrication processes',
      'Network with global tech industry leaders, engineers, and developers',
      'Learn about AI applications in edge computing and IoT data processing',
      'Explore collaborative ventures and innovation strategies in semiconductor sector',
    ],
    keyInsights: [
      'Deep understanding of next-gen chipset fabrication and energy efficiency in nano-scale semiconductors',
      'Valuable knowledge on AI-microchip integration applications for consumer devices',
      'Strategic insights into chip security and quantum threat mitigation approaches',
      'Strong networking connections established with Asia-Pacific tech industry professionals',
      'Technical team equipped with advanced capabilities to push technology boundaries and foster innovation',
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
        value: 'Singapore',
      },
      {
        icon: <Users className='h-4 w-4 text-gray-600' />,
        label: 'Team Size',
        value: '3 Members',
      },
      {
        icon: <DollarSign className='h-4 w-4 text-gray-600' />,
        label: 'Total Cost',
        value: '$2,830',
      },
    ],
    days: [
      {
        date: 'Saturday, 14 December 2024',
        events: [
          {
            time: '7:00 AM',
            title: 'Departure from Phnom Penh',
            description: 'Phnom Penh International Airport to Singapore Changi Airport',
            image:
              'https://content.presspage.com/uploads/2431/70c7dbdc-289e-45e2-ba47-93e924db18ae/1920_emirateslandsinphnompenh1.jpg?10000',
            imageAlt: 'Airport departure scene',
          },
          {
            time: '10:30 AM',
            title: 'Arrival in Singapore',
            description: 'Airport transfer to Marina Bay Sands Hotel',
            image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop',
            imageAlt: 'Singapore Changi Airport',
          },
          {
            time: '11:30 AM',
            title: 'Check-in and Registration',
            description: 'Marina Bay Sands Expo and Convention Centre',
            image:
              'https://www.marinabaysands.com/content/dam/marinabaysands/hotel/the-sands-collection-landing-page/room-listing/sands-premier-room-1.jpg',
            imageAlt: 'Marina Bay Sands Hotel',
          },
          {
            time: '1:00 PM',
            title: 'Welcome Lunch',
            description: 'Lunch with the Team at The Orchard Cafe',
            image:
              'https://www.millenniumhotels.com/mhb-media/regions/asia/siingapore/orchardhotelsingapore/dining/images/theorchardcafe/orchard_hotel_singapore_the_orchard_cafe_header_image_1280x688-(1).jpg?rev=c5408f2f0d1149acb363c6b1bc8eda10',
            imageAlt: 'Business networking lunch',
          },
          {
            time: '2:30 PM',
            title: 'Opening Session',
            description: 'Keynote presentation on 3MN Chip Technology',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
            imageAlt: 'Technology conference presentation',
          },
          {
            time: '7:00 PM',
            title: 'Networking Dinner',
            description: 'Rooftop restaurant with exhibition sponsors',
            image: 'https://www.marinabaysands.com/content/dam/marinabaysands/restaurant-categories/rooftop-dining/masthead.jpg',
            imageAlt: 'Singapore skyline dining',
          },
        ],
      },
      {
        date: 'Sunday, 15 December 2024',
        events: [
          {
            time: '8:00 AM',
            title: 'Breakfast at the Hotel',
            description: 'Blend of international and local dishes',
            image:
              'https://images.squarespace-cdn.com/content/v1/5e2899ec34f10469ac758b30/321fbbca-3b41-450e-ae1a-d461e11ff3ce/IMG_6074.jpg',
            imageAlt: 'Hotel breakfast buffet',
          },
          {
            time: '9:30 AM',
            title: 'Technology Workshops',
            description: 'Hands-on session with new microchip technologies and AI',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYXwLNz4a-FnhSUS8c_q4X1Si1_0k857LrEw&s',
            imageAlt: 'Technology workshop session',
          },
          {
            time: '12:00 PM',
            title: 'Business Lunch',
            description: 'Discussion with potential partners',
            image:
              'https://cf.bstatic.com/xdata/images/hotel/max1024x768/611271421.jpg?k=db1451fe18e2e807795ec1c398840c21900a42747282641f13367f28e29f7e82&o=&hp=1',
            imageAlt: 'Singapore business lunch',
          },
          {
            time: '4:00 PM',
            title: 'Closing Session',
            description: 'Final presentations and future roadmap discussions',
            image:
              'https://knect365.imgix.net/uploads/Untitled-design-2--05cfbcd07755e9ecec1bfbb002edbd49.png?auto=format&fit=max&w=412&dpr=5',
            imageAlt: 'Conference closing session',
          },
          {
            time: '6:00 PM',
            title: 'Departure from Singapore',
            description: 'Singapore Changi Airport to Phnom Penh International Airport',
            image: 'https://singaporetravelinsider.com/wp-content/uploads/2022/12/hotel-shuttle-changi-airport-1024x682.jpg',
            imageAlt: 'Airport departure gate',
          },
          {
            time: '11:30 PM',
            title: 'Arrival in Phnom Penh',
            description: 'End of business trip',
            image: 'https://www.angkorphotographytours.com/wp-content/uploads/2023/10/new-phnom-penh-international-airport.jpg',
            imageAlt: 'Phnom Penh evening arrival',
          },
        ],
      },
    ],
    expenses: [
      {
        category: 'Emirates Airfare',
        details: 'Phnom Penh → Singapore → Phnom Penh (3 members)',
        cost: '$1,710',
      },
      {
        category: 'Hotel Accommodation',
        details: 'Marina Bay Sands (1 night, 2 rooms)',
        cost: '$580',
      },
      {
        category: 'Local Transportation',
        details: 'Airport transfers and city travel',
        cost: '$120',
      },
      {
        category: 'Meals & Entertainment',
        details: 'Group dinners and local cuisine',
        cost: '$230',
      },
      {
        category: 'Registration Fees',
        details: 'Exhibition entry and workshop participation',
        cost: '$150',
      },
      {
        category: 'Miscellaneous',
        details: 'Internet, printing, gifts',
        cost: '$40',
      },
    ],
    conclusion:
      'The Singapore business trip proved highly valuable for the Technology Exhibition 3MN Chip team. The international exhibition provided deep insights into cutting-edge microchip technologies, AI-enhanced systems, and global innovation strategies. The experience has equipped our technical and development team with the tools to advance our capabilities, foster innovation, and explore collaborative ventures in the tech sector.',
    takeaways: [
      {
        title: 'Emerging trends in microchip technology and design',
        description:
          'Learned about latest nanometer processing, AI integration capabilities, and energy-efficient designs that could revolutionize our current chip architecture.',
      },
      {
        title: 'Potential partnerships with global technology providers',
        description:
          'Established connections with leading semiconductor manufacturers and identified opportunities for strategic collaborations in R&D and manufacturing.',
      },
      {
        title: 'Competitive analysis of similar products in the market',
        description:
          'Gained insights into competitor strategies, pricing models, and market positioning that will inform our product development roadmap.',
      },
      {
        title: 'New marketing strategies for technical products',
        description:
          'Discovered innovative approaches to digital marketing, customer engagement, and technical communication that resonate with our target audience.',
      },
    ],
    nextSteps: [
      {
        title: 'Implement learned technologies into our development roadmap',
        description: 'Integrate new microchip design methodologies and AI-enhanced features into our Q2 2025 development cycle',
        timeline: 'Within 30 days',
        icon: <Target className='h-4 w-4' />,
        priority: 'High',
      },
      {
        title: 'Follow up with potential partners for collaboration',
        description:
          'Schedule follow-up meetings with 5 key technology providers to discuss partnership agreements and joint ventures',
        timeline: 'Within 2 weeks',
        icon: <Users2 className='h-4 w-4' />,
        priority: 'High',
      },
      {
        title: 'Present findings to the executive team with recommendations',
        description:
          'Prepare comprehensive presentation covering market insights, technology trends, and strategic recommendations for board review',
        timeline: 'Within 1 week',
        icon: <Presentation className='h-4 w-4' />,
        priority: 'Critical',
      },
      {
        title: 'Develop training program based on acquired knowledge',
        description:
          'Create technical training modules for engineering team covering new methodologies and best practices learned at the exhibition',
        timeline: 'Within 45 days',
        icon: <GraduationCap className='h-4 w-4' />,
        priority: 'Medium',
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
              <p className='text-sm font-semibold text-gray-900'>December 15, 2024</p>
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
                src='https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200&h=400&fit=crop'
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
        <ExpensesTable expenses={tripData.expenses} totalCost='$2,830' />

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
