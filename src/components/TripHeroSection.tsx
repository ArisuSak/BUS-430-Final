import Image from 'next/image';
import { motion } from 'framer-motion';

const TripHeroSection = ({ tripData }) => {
  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    initial: {
      y: 30,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const scaleIn = {
    initial: {
      scale: 0.9,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className='relative min-h-screen'>
      {/* Full-size Hero Image with Next Image */}
      <div className='relative h-screen w-full'>
        <Image
          src='https://avytravel.com/wp-content/uploads/2019/11/Blog-Post-5.jpg'
          alt='Singapore Marina Bay Sands skyline'
          fill
          className='object-cover'
          priority
          sizes='100vw'
          quality={90}
        />

        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60' />

        {/* Content Overlay */}
        <motion.div
          initial='initial'
          animate='animate'
          variants={staggerContainer}
          className='absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10'>
          {/* Title Section */}
          <div className='max-w-4xl mx-auto mb-12'>
            <motion.h1
              variants={fadeInUp}
              className='text-4xl md:text-6xl lg:text-7xl font-extralight text-white mb-4 tracking-wide'>
              {tripData.title}
            </motion.h1>
            <motion.h2 variants={fadeInUp} className='text-xl md:text-2xl text-white/90 font-light mb-8 tracking-wide'>
              {tripData.subtitle}
            </motion.h2>
            <motion.p variants={fadeInUp} className='text-lg text-white/80 leading-relaxed max-w-2xl mx-auto'>
              {tripData.description}
            </motion.p>
          </div>

          {/* Enhanced Stats Cards */}
          <motion.div variants={staggerContainer} className='grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl'>
            {tripData.stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className='group relative'>
                {/* Glass morphism card */}
                <div className='backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 transition-all duration-300 hover:bg-white/20 hover:border-white/30'>
                  {/* Icon container with glow effect */}
                  <motion.div
                    className='flex justify-center mb-4'
                    whileHover={{
                      rotate: 12,
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}>
                    <div className='p-3 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300'>
                      <div className='text-white text-2xl'>{stat.icon}</div>
                    </div>
                  </motion.div>

                  {/* Stats content */}
                  <div className='text-center'>
                    <div className='text-2xl md:text-3xl font-light text-white mb-1 tracking-wide'>{stat.value}</div>
                    <div className='text-sm text-white/80 uppercase tracking-widest font-medium'>{stat.label}</div>
                  </div>

                  {/* Subtle shine effect */}
                  <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Optional: Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20'>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className='w-6 h-10 border-2 border-white/50 rounded-full flex justify-center'>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className='w-1 h-3 bg-white/70 rounded-full mt-2'
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TripHeroSection;
