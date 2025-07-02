'use client';
import React from 'react';
import { Calendar, MapPin, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

// @ts-expect-error - to igorn type
const Timeline = ({ days, activeDay, setActiveDay }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className='mb-20'>
      <div className='flex items-center justify-between mb-12'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='text-3xl font-bold text-gray-900 flex items-center'>
          <Calendar className='h-8 w-8 mr-3 text-blue-600' />
          Trip Timeline
        </motion.h2>

        <div className='flex items-center space-x-4 bg-green-50 px-4 py-2 rounded-lg'>
          <CheckCircle className='h-5 w-5 text-green-600' />
          <span className='text-sm font-medium text-green-800'>Trip Completed</span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className='flex justify-center mb-12'>
        <div className='relative bg-gray-100 p-2 rounded-2xl shadow-inner'>
          <motion.div
            className='absolute top-2 left-2 h-[calc(100%-16px)] bg-white rounded-xl shadow-lg border border-gray-200'
            initial={false}
            animate={{
              width: `calc(${100 / days.length}% - 8px)`,
              x: `calc(${(activeDay - 1) * 100}% + 4px)`,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />

          <div className='relative flex'>
            {days.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className='relative z-10'>
                <button
                  onClick={() => setActiveDay(index + 1)}
                  className={`px-8 py-5 text-base font-medium transition-all duration-300 rounded-xl ${
                    activeDay === index + 1 ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
                  }`}>
                  <div className='flex flex-col items-center space-y-2'>
                    <span className='text-xs font-light uppercase tracking-wider'>Day</span>
                    <span className='text-2xl font-bold'>{index + 1}</span>
                    <span className='text-xs text-gray-400'>{day.events.length} Events</span>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        key={activeDay}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -30, scale: 0.95 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='relative max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className='text-center mb-12'>
          <h3 className='text-2xl font-bold text-gray-900 mb-2'>{days[activeDay - 1].date}</h3>
          <div className='flex items-center justify-center space-x-6 text-sm text-gray-600'>
            <div className='flex items-center'>
              <Clock className='h-4 w-4 mr-1' />
              {days[activeDay - 1].events.length} Activities
            </div>
            <div className='flex items-center'>
              <MapPin className='h-4 w-4 mr-1' />
              Mondulkiri Province
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={{ delay: 0.3, duration: 1.2, ease: 'easeOut' }}
          className='absolute left-1/2 top-20 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400 hidden lg:block'></motion.div>

        <div className='relative z-10 space-y-16'>
          {days[activeDay - 1].events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.4 + index * 0.15,
                duration: 0.6,
                ease: 'easeOut',
              }}
              whileHover={{ scale: 1.02, y: -3 }}
              className='relative group'>
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.6 + index * 0.15,
                  duration: 0.4,
                  type: 'spring',
                  stiffness: 300,
                }}
                whileHover={{ scale: 1.4 }}
                className='absolute left-1/2 top-6 transform -translate-x-1/2 z-20 hidden lg:block'>
                <div className='h-6 w-6 rounded-full bg-blue-500 border-4 border-white shadow-lg flex items-center justify-center'>
                  <div className='h-2 w-2 bg-white rounded-full'></div>
                </div>
              </motion.div>

              {/* Mobile Layout */}
              <div className='lg:hidden'>
                <motion.div className='bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300'>
                  {event.image && event.image !== 'asd' && (
                    <motion.div
                      className='w-full h-48 overflow-hidden'
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}>
                      <img
                        src={event.image}
                        alt={event.imageAlt || event.title}
                        className='w-full h-full object-cover transition-transform duration-500'
                      />
                    </motion.div>
                  )}

                  <div className='p-6'>
                    <div className='flex items-center mb-3'>
                      <div className='bg-blue-100 p-2 rounded-lg mr-3'>
                        <Clock className='h-4 w-4 text-blue-600' />
                      </div>
                      <span className='text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full'>{event.time}</span>
                    </div>
                    <h4 className='text-lg font-bold text-gray-900 mb-3'>{event.title}</h4>
                    <p className='text-gray-600 leading-relaxed'>{event.description}</p>
                  </div>
                </motion.div>
              </div>

              {/* Desktop Layout */}
              <div className={`hidden lg:flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <motion.div
                  className={`w-5/12 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -50 : 50,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.5 + index * 0.15,
                    duration: 0.7,
                    ease: 'easeOut',
                  }}>
                  <div className='bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300'>
                    {event.image && event.image !== 'asd' && (
                      <motion.div
                        className='w-full h-64 overflow-hidden'
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}>
                        <img
                          src={event.image}
                          alt={event.imageAlt || event.title}
                          className='w-full h-full object-cover transition-transform duration-500'
                        />
                      </motion.div>
                    )}

                    <div className='p-8'>
                      <div className='flex items-center mb-4'>
                        <div className='bg-blue-100 p-3 rounded-xl mr-4'>
                          <Clock className='h-5 w-5 text-blue-600' />
                        </div>
                        <span className='text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full'>
                          {event.time}
                        </span>
                      </div>
                      <h4 className='text-xl font-bold text-gray-900 mb-4'>{event.title}</h4>
                      <p className='text-gray-600 leading-relaxed text-base'>{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Timeline;
