import React from "react";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";

type Event = {
  time: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

type Day = {
  date: string;
  events: Event[];
};

type TimelineProps = {
  days: Day[];
  activeDay: number;
  setActiveDay: (day: number) => void;
};

export function Timeline({ days, activeDay, setActiveDay }: TimelineProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mb-16 md:mb-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-xl md:text-2xl font-light text-gray-900 mb-8 md:mb-10 text-center px-4"
      >
        Trip Timeline
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex justify-center mb-8 md:mb-12 px-4"
      >
        <div className="relative bg-gray-50 p-1 rounded-xl shadow-inner">
          <motion.div
            className="absolute top-1 left-1 h-[calc(100%-8px)] bg-white rounded-lg shadow-md border border-gray-100"
            initial={false}
            animate={{
              width: `calc(${100 / days.length}% - 4px)`,
              x: `calc(${(activeDay - 1) * 100}% + 2px)`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          <div className="relative flex">
            {days.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="relative z-10"
              >
                <button
                  onClick={() => setActiveDay(index + 1)}
                  className={`px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-medium transition-all duration-300 rounded-lg ${
                    activeDay === index + 1
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <div className="flex flex-col items-center space-y-1">
                    <span className="text-xs md:text-sm font-light uppercase tracking-wider">
                      Day
                    </span>
                    <span className="text-lg md:text-xl font-semibold">
                      {index + 1}
                    </span>
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
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-5xl mx-auto px-4 md:px-8"
      >
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-base md:text-lg font-medium text-center text-gray-800 mb-8 md:mb-12"
        >
          {days[activeDay - 1].date}
        </motion.h3>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
          className="absolute left-8 md:left-1/2 top-12 md:top-16 transform md:-translate-x-1/2 w-0.5 bg-gray-200 block md:block"
        ></motion.div>

        <div className="relative z-10">
          {days[activeDay - 1].events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.4 + index * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="mb-12 md:mb-16 relative group"
            >
              {/* Timeline Dot - Mobile (Left) and Desktop (Center) */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.6 + index * 0.15,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300,
                }}
                whileHover={{ scale: 1.4, rotate: 180 }}
                className="absolute left-8 md:left-1/2 top-3 transform -translate-x-1/2 z-20"
              >
                <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-gray-400 border-2 md:border-3 border-white shadow-md" />
              </motion.div>

              <div className="md:hidden">
                <motion.div
                  className="ml-16 mr-4"
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.5 + index * 0.15,
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                >
                  <div className="border border-gray-100 rounded-lg bg-white overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all duration-300">
                    {event.image && (
                      <motion.div
                        className="w-full h-40 overflow-hidden"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <img
                          src={event.image}
                          alt={event.imageAlt || event.title}
                          className="w-full h-full object-cover transition-transform duration-500"
                        />
                      </motion.div>
                    )}

                    <motion.div
                      className="p-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.15, duration: 0.5 }}
                    >
                      <div className="flex items-center mb-2">
                        <motion.div
                          whileHover={{ scale: 1.3, rotate: 15 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Clock className="h-3 w-3 text-gray-500 mr-2" />
                        </motion.div>
                        <span className="text-xs font-medium text-gray-600">
                          {event.time}
                        </span>
                      </div>
                      <motion.h4
                        className="text-sm font-medium text-gray-900 mb-2"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {event.title}
                      </motion.h4>
                      <motion.p
                        className="text-gray-600 text-xs leading-relaxed"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {event.description}
                      </motion.p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <div
                className={`hidden md:flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <motion.div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "mr-auto" : "ml-auto"
                  }`}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -50 : 50,
                    rotateY: index % 2 === 0 ? -15 : 15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                  }}
                  transition={{
                    delay: 0.5 + index * 0.15,
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.03,
                    rotateY: index % 2 === 0 ? 2 : -2,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="border border-gray-100 rounded-lg bg-white overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all duration-300">
                    {event.image && (
                      <motion.div
                        className="w-full h-48 overflow-hidden"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <img
                          src={event.image}
                          alt={event.imageAlt || event.title}
                          className="w-full h-full object-cover transition-transform duration-500"
                        />
                      </motion.div>
                    )}

                    <motion.div
                      className="p-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.15, duration: 0.5 }}
                    >
                      <div className="flex items-center mb-3">
                        <motion.div
                          whileHover={{ scale: 1.3, rotate: 15 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Clock className="h-4 w-4 text-gray-500 mr-3" />
                        </motion.div>
                        <span className="text-sm font-medium text-gray-600">
                          {event.time}
                        </span>
                      </div>
                      <motion.h4
                        className="text-base font-medium text-gray-900 mb-2"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {event.title}
                      </motion.h4>
                      <motion.p
                        className="text-gray-600 text-sm leading-relaxed"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {event.description}
                      </motion.p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
