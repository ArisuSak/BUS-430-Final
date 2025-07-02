'use client';

import React from 'react';
import { Users, Target, Award, Globe, Mail, Linkedin, Github, MapPin, Calendar, BookOpen } from 'lucide-react';
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

export default function AboutUsPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Sovathara Prom',
      role: 'Founder & CEO',
      department: 'Computer Science',
      bio: 'Visionary leader with expertise in AI and Advancement of Technologies. Passionate about building innovative technology solutions that make a real impact.',
      email: 'sprom2@paragoniu.edu.kh',
      linkedin: 'linkedin.com/in/sovatharaprom',
      github: 'github.com/sovatharaprom',
      specialties: ['AI/ML', 'Product Strategy', 'Leadership'],
      experience: '5+ years',
      image: '/Sova.png',
    },
    {
      id: 2,
      name: 'Sovannsak Yours',
      role: 'CTO & Co-founder',
      department: 'Software Engineering',
      bio: 'Technical architect with deep expertise in distributed systems and cloud infrastructure. Drives our technical vision and engineering excellence.',
      email: 'syours@paragoniu.edu.kh',
      linkedin: 'linkedin.com/in/sovannsakyours',
      github: 'github.com/sovannsakyours',
      specialties: ['Cloud Architecture', 'DevOps', 'System Design'],
      experience: '6+ years',
      image: '/Sak.png',
    },
    {
      id: 3,
      name: 'Seang Kimsinh',
      role: 'Head of Business Development',
      department: 'Business Administration',
      bio: 'Strategic business leader focused on partnerships and market expansion. Expert in identifying growth opportunities and building lasting relationships.',
      email: 'kseang1@paragoniu.edu.kh',
      linkedin: 'linkedin.com/in/seangkimsinh',
      github: 'github.com/seangkimsinh',
      specialties: ['Business Strategy', 'Partnerships', 'Market Analysis'],
      experience: '4+ years',
      image: '/kimsinh.png',
    },
    {
      id: 4,
      name: 'Soth Kimleng',
      role: 'Lead Product Designer',
      department: 'Design & UX',
      bio: 'Creative problem solver with a passion for user-centered design. Transforms complex ideas into intuitive and beautiful user experiences.',
      email: 'ksoth@paragoniu.edu.kh',
      linkedin: 'linkedin.com/in/kimlengsoth',
      github: 'github.com/kimlengsoth',
      specialties: ['UI/UX Design', 'User Research', 'Design Systems'],
      experience: '4+ years',
      image: '/kimleng.png',
    },
    {
      id: 5,
      name: 'Sokleng Ly',
      role: 'Senior Data Scientist',
      department: 'Data Science',
      bio: 'Data enthusiast specializing in machine learning and predictive analytics. Turns raw data into actionable insights that drive business decisions.',
      email: 'sly1@paragoniu.edu.kh',
      linkedin: 'linkedin.com/in/soklengly',
      github: 'github.com/soklengly',
      specialties: ['Machine Learning', 'Data Analytics', 'Python/R'],
      experience: '5+ years',
      image: '/Sokleng.png',
    },
    {
      id: 6,
      name: 'Sopheaknita Chea',
      role: 'Head of Marketing',
      department: 'Marketing & Communications',
      bio: 'Digital marketing strategist with expertise in brand building and growth marketing. Passionate about telling compelling stories that resonate with audiences.',
      email: 'schea5@paragoniu.edu.kh',
      linkedin: 'linkedin.com/in/sopheaknita_chea',
      github: 'github.com/sopheaknita_chea',
      specialties: ['Digital Marketing', 'Brand Strategy', 'Content Creation'],
      experience: '3+ years',
      image: '/Nita.png',
    },
  ];

  const companyStats = [
    { label: 'Team Members', value: '6', icon: <Users className='h-6 w-6' /> },
    {
      label: 'Years Experience',
      value: '7+',
      icon: <Calendar className='h-6 w-6' />,
    },
    {
      label: 'Projects Completed',
      value: '10+',
      icon: <Target className='h-6 w-6' />,
    },
    {
      label: 'Countries Served',
      value: '12',
      icon: <Globe className='h-6 w-6' />,
    },
  ];

  const coreValues = [
    {
      title: 'Innovation',
      description:
        "We push the boundaries of what's possible, constantly exploring new technologies and approaches to solve complex problems.",
      icon: <Award className='h-8 w-8' />,
    },
    {
      title: 'Collaboration',
      description:
        'We believe in the power of teamwork and diverse perspectives. Together, we achieve more than any individual could alone.',
      icon: <Users className='h-8 w-8' />,
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service and beyond.',
      icon: <Target className='h-8 w-8' />,
    },
    {
      title: 'Learning',
      description:
        'We embrace continuous learning and growth, staying ahead of industry trends and evolving our skills constantly.',
      icon: <BookOpen className='h-8 w-8' />,
    },
  ];

  return (
    <div className='min-h-screen bg-white'>
      <main className='pt-20'>
        {/* Hero Section */}
        <motion.section
          initial='initial'
          animate='animate'
          variants={staggerContainer}
          className='py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100'>
          <div className='max-w-6xl mx-auto text-center'>
            <motion.h1 variants={fadeInUp} className='text-4xl md:text-5xl font-light text-gray-900 mb-6'>
              About Six Senergy
            </motion.h1>
            <motion.p variants={fadeInUp} className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
              We are a passionate team of innovators, engineers, and creative minds dedicated to building the future of
              technology, one solution at a time.
            </motion.p>
            <motion.div variants={fadeInUp} className='flex items-center justify-center text-gray-500'>
              <MapPin className='h-5 w-5 mr-2' />
              <span>Based in Phnom Penh, Cambodia</span>
            </motion.div>
          </div>
        </motion.section>

        {/* Company Stats */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='py-16 px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
              {companyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className='text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300'>
                  <div className='flex justify-center mb-4 text-gray-700'>{stat.icon}</div>
                  <div className='text-3xl font-light text-gray-900 mb-2'>{stat.value}</div>
                  <div className='text-gray-600 text-sm'>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Our Mission */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='py-16 px-4 bg-gray-50'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl font-light text-gray-900 mb-8'>Our Mission</h2>
            <p className='text-lg text-gray-700 leading-relaxed mb-8'>
              At Six Senergy, we believe that technology should serve humanity. Our mission is to create innovative solutions that
              not only advance technological capabilities but also improve lives, foster connections, and drive positive change in
              our communities and beyond.
            </p>
            <p className='text-lg text-gray-700 leading-relaxed'>
              We combine cutting-edge research with practical application, ensuring that our innovations are not just technically
              impressive, but also meaningful and accessible to those who need them most.
            </p>
          </div>
        </motion.section>

        {/* Core Values */}
        <motion.section
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={staggerContainer}
          className='py-16 px-4'>
          <div className='max-w-6xl mx-auto'>
            <motion.h2 variants={fadeInUp} className='text-3xl font-light text-gray-900 text-center mb-12'>
              Our Core Values
            </motion.h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className='text-center p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300'>
                  <div className='flex justify-center mb-4 text-gray-700'>{value.icon}</div>
                  <h3 className='text-xl font-medium text-gray-900 mb-4'>{value.title}</h3>
                  <p className='text-gray-600 leading-relaxed'>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={staggerContainer}
          className='py-16 px-4 bg-gray-50'>
          <div className='max-w-6xl mx-auto'>
            <motion.h2 variants={fadeInUp} className='text-3xl font-light text-gray-900 text-center mb-12'>
              Meet Our Team
            </motion.h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {teamMembers.map(member => (
                <motion.div
                  key={member.id}
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className='bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 cursor-pointer'>
                  <img src={member.image} alt={member.name} className='w-full h-64 object-contain object-center' />
                  <div className='p-6'>
                    <h3 className='text-xl font-medium text-gray-900 mb-1'>{member.name}</h3>
                    <p className='text-gray-600 mb-1'>{member.role}</p>
                    <p className='text-sm text-gray-500 mb-4'>{member.department}</p>
                    <p className='text-gray-700 text-sm mb-4 leading-relaxed'>{member.bio}</p>

                    {/* Specialties */}
                    <div className='mb-4'>
                      <div className='flex flex-wrap gap-2'>
                        {member.specialties.map((specialty, idx) => (
                          <span key={idx} className='px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs'>
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Experience */}
                    <div className='mb-4 text-sm text-gray-600'>Experience: {member.experience}</div>

                    {/* Social Links */}
                    <div className='flex items-center gap-3 pt-4 border-t border-gray-100'>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={`mailto:${member.email}`}
                        className='text-gray-400 hover:text-gray-600'>
                        <Mail className='h-4 w-4' />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={`https://${member.linkedin}`}
                        className='text-gray-400 hover:text-gray-600'>
                        <Linkedin className='h-4 w-4' />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={`https://${member.github}`}
                        className='text-gray-400 hover:text-gray-600'>
                        <Github className='h-4 w-4' />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
