'use client';
import React, { useState } from 'react';
import {
  Calendar,
  DollarSign,
  MapPin,
  Users,
  CheckCircle,
  Target,
  Users2,
  GraduationCap,
  Presentation,
  Quote,
  Award,
  Camera,
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
    title: 'Business Trip to Mondulkiri',
    subtitle: 'Interview with Retired Staff for Company Magazine Feature',
    description:
      'A three day business trip to Mondulkiri was made to interview Mr. Samnang Sakal, a retired Tech Lead of Six Synergy, at his home in Sen Monorom. With 12 years of service, Mr. Sakal played a critical role in the company’s success. The interview, which will be featured in the company’s official magazine, aims to honor his contributions and preserve his legacy. It will cover his background, career journey, experiences at the company, and advice for future generations.',
    objectives: [
      'Conduct comprehensive interview with Mr. Sakal',
      'Gather career insights and company history',
      'Capture commemorative photography',
      'Document experiences for magazine feature',
    ],
    keyInsights: [
      'Valuable perspectives on company culture evolution',
      'Important lessons for new employee development',
      'Rich historical context of organizational growth',
    ],
    stats: [
      {
        icon: <Calendar className='h-6 w-6 text-blue-600' />,
        label: 'Trip Duration',
        value: '3 Days',
        subtitle: 'March 14-16, 2025',
        bgColor: 'bg-blue-50',
      },
      {
        icon: <MapPin className='h-6 w-6 text-green-600' />,
        label: 'Destination',
        value: 'Mondulkiri',
        subtitle: 'Krong Saen Monourom',
        bgColor: 'bg-green-50',
      },
      {
        icon: <Users className='h-6 w-6 text-purple-600' />,
        label: 'Team Size',
        value: '5 Member',
        subtitle: 'Team Mission',
        bgColor: 'bg-purple-50',
      },
      {
        icon: <DollarSign className='h-6 w-6 text-orange-600' />,
        label: 'Investment',
        value: '$5,138',
        subtitle: 'Total Cost',
        bgColor: 'bg-orange-50',
      },
    ],
    days: [
      {
        date: 'Friday, 14 March 2025',
        events: [
          {
            time: '7:00 AM – 1:40 PM',
            title: 'Departure to Sen Monorom',
            description: 'Travel from Phnom Penh to Saen Monourom, Mondulkiri',
            image: '/mondul.jpg',
            imageAlt: 'Highway departure from Phnom Penh',
          },
          {
            time: '2:00 PM',
            title: 'Check-in at Nature Lodge Resort',
            description: 'Accommodation setup for the trip duration',
            image:
              'https://cf.bstatic.com/xdata/images/hotel/max1024x768/364235424.jpg?k=7bd2407f45dbb65c8a0fc2ca89ddcb1e48f8f384caf738337f9c822c60597ee5&o=&hp=1',
            imageAlt: 'Nature lodge accommodation',
          },
          {
            time: '2:30 PM – 3:30 PM',
            title: 'Visit Local Market',
            description: 'Shopping for raw ingredients and meat',
            image:
              'https://images.squarespace-cdn.com/content/v1/54930d4ae4b018401d7b66f4/1472812922745-27WTGWFH06K29V5P3AMG/image-asset.jpeg',
            imageAlt: 'Local market shopping',
          },
          {
            time: '4:00 PM',
            title: 'Visit Mr. Sakal Residence',
            description: 'Catch up, get familiar, and give a welcome gift',
            image:
              'https://media.licdn.com/dms/image/v2/D5603AQHISqf9I0mBQQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696408919434?e=1756944000&v=beta&t=Z0x-2RvixLwMiiYBpYP9a0t9yNgYTT8Qnh8ehZWGNU0',
            imageAlt: 'Business meeting in rural setting',
          },
          {
            time: '6:00 PM',
            title: 'Cook and Eat Dinner at Mr. Sakal',
            description: 'Help prepare and enjoy dinner together',
            image:
              'https://cf.bstatic.com/xdata/images/hotel/max1024x768/179089783.jpg?k=3e50a65f0083d7a6d15e9e600272dce50152ab7503f6e5b251aacfb88438a47e&o=&hp=1',
            imageAlt: 'Traditional Cambodian dinner',
          },
          {
            time: '8:00 PM',
            title: 'Return to Resort',
            description: 'Wrap up the day and rest',
            image: 'https://apenoni.com/wp-content/uploads/2016/05/nature-lodge-mondulkiri-collage-1024x512.jpg',
            imageAlt: 'Returning to resort at night',
          },
        ],
      },
      {
        date: 'Saturday, 15 March 2025',
        events: [
          {
            time: '8:00 AM – 9:00 AM',
            title: 'Breakfast at Resort',
            description: 'Morning meal before the interview day',
            image:
              'https://cf.bstatic.com/xdata/images/hotel/max1024x768/216631567.jpg?k=590ab8072acfcce28002abe4f309ab91dca9354e7264ba04ab7eb1044b0609f9&o=&hp=1',
            imageAlt: 'Breakfast at resort',
          },
          {
            time: '9:00 AM – 9:30 AM',
            title: 'Arrival and Preparation',
            description: 'Setup for interview at Mr. Sakal residence',
            image:
              'https://q-xx.bstatic.com/xdata/images/hotel/max500/343007145.jpg?k=d53ec5ac854bc7b644a4a7bb580c4326cba6cf2a35d8376ab518d2512ce3251b&o=',
            imageAlt: 'Village home setup',
          },
          {
            time: '9:30 AM – 12:00 PM',
            title: 'Morning Interview Session',
            description: 'Career stories and contributions',
            image: 'https://tpe.madmagz.news/wp-content/uploads/sites/4/2016/10/Interview_valeur-ajout%C3%A9e-TPE-745x500.png',
            imageAlt: 'Morning interview session',
          },
          {
            time: '12:00 PM',
            title: 'Lunch Break',
            description: 'Midday meal and rest',
            image:
              'https://autourasia.com/uploads/Travel-Guide-Cambodia/mondulkiri/Top-6-must-try-specialties-in-Mondulkiri/900-chapeau-dish-mondulkiri-(1).jpg',
            imageAlt: 'Local lunch setting',
          },
          {
            time: '1:30 PM – 4:30 PM',
            title: 'Afternoon Interview Session',
            description: 'Focus on wisdom and advice for new employees',
            image: 'https://i.pinimg.com/474x/2e/f8/ee/2ef8ee4f963dae1030ea08bb952e9788.jpg',
            imageAlt: 'Afternoon documentation',
          },
          {
            time: '5:00 PM',
            title: 'Dinner and Celebration',
            description: 'Evening meal at Mr. Sakal home',
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
            imageAlt: 'Evening gathering',
          },
          {
            time: '10:00 PM',
            title: 'Return to Resort',
            description: 'End of the second day',
            image:
              'https://q-xx.bstatic.com/xdata/images/hotel/max500/364235396.jpg?k=aaea90c8caf0dfd3a5ec4856db33a831ec54f4e94ece996049d2614bc46b9a49&o=',
            imageAlt: 'Night return to lodge',
          },
        ],
      },
      {
        date: 'Sunday, 16 March 2025',
        events: [
          {
            time: '8:00 AM – 9:00 AM',
            title: 'Breakfast at Resort',
            description: 'Start the final day with breakfast',
            image: 'https://impresstravel.com/wp-content/uploads/2025/05/Mekong-Lodge-Resort-Review-Best-for-Nature-Lovers-4.jpg',
            imageAlt: 'Breakfast view',
          },
          {
            time: '9:00 AM',
            title: 'Arrival and Setup at Residence',
            description: 'Prepare for final photoshoot',
            image:
              'https://media.istockphoto.com/id/1093914934/photo/empty-studio-with-photography-lighting.jpg?s=612x612&w=0&k=20&c=WI0OApbMzeRviRwFR9tISanskRu_TEFxA8ztYZERsVA=',
            imageAlt: 'Residence preparation',
          },
          {
            time: '9:20 AM – 12:00 PM',
            title: 'Photoshoot Session',
            description: 'Taking commemorative photos with Mr. Sakal',
            image: '/sakal.jpg',
            imageAlt: 'Photoshoot moment',
          },
          {
            time: '1:00 PM – 2:00 PM',
            title: 'Final Lunch & Farewell',
            description: 'Lunch and farewell party at The Living Room Mondulkiri',
            image: 'https://images-cdn.ubuy.co.id/634e46899a4aa1331627b480-we-will-miss-you-party-decorations-set.jpg',
            imageAlt: 'Farewell lunch',
          },
          {
            time: '3:00 PM – 9:40 PM',
            title: 'Return Journey',
            description: 'Depart from Mondulkiri and arrive in Phnom Penh',
            image: '/return.jpg',
            imageAlt: 'Return trip to Phnom Penh',
          },
        ],
      },
    ],

    expenses: [
      {
        category: 'Transportation',
        details: 'Round-trip travel ( company van & fuel )',
        cost: '$100',
      },
      {
        category: 'Accommodation',
        details: 'Two nights at Nature Lodge Resort',
        cost: '$120',
      },
      {
        category: 'Meals',
        details: 'Food expenses over three days',
        cost: '$200',
      },
      {
        category: 'Miscellaneous',
        details: `Gifts for interviewee expenses - 
        IPAD PRO 13" : $1,399,
        MACBOOK PR0 M4: $2000,
        Apple Pencil Pro: $120,
        Iphone 16 Pro Max : $1,199`,
        cost: '$4,718',
      },
    ],
    conclusion:
      'The trip to Mondulkiri was meaningful and completed with success. The primary objective interviewing Mr. Samnang Sakal, a respected former Tech Lead of Six Synergy was filled with all the important information about his career, personal journey, and valuable advice for the next generation. Beyond the formal interview, the experience allowed for genuine connection, shared meals, and a heartfelt farewell.',
    conclusion_2:
      'This trip not only honored Mr. Sakal contributions with a dedicated magazine feature and thoughtful gifts but also captured his legacy through photos and stories that will inspire others within the company. The overall atmosphere was respectful, celebratory, and deeply appreciative, making the trip both professionally and personally fulfilling.',
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
              <p className='text-sm font-semibold text-gray-900'>March 17, 2025</p>
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
                src='https://www.asiakingtravel.com/cuploads/files/Mondulkiri-2.jpg'
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
        <ExpensesTable expenses={tripData.expenses} totalCost='$5,138' />

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

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className='space-y-4'>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>Impact & Value</h3>
                <p className='text-gray-700 leading-relaxed text-base'>{tripData.conclusion_2}</p>
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
