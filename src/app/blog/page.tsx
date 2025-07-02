'use client';

import React, { useState } from 'react';
import { Calendar, Clock, User, Search, ArrowRight, Heart, MessageCircle, Share2 } from 'lucide-react';
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

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Technology', 'Business', 'Travel', 'Innovation', 'Insights'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business Operations',
      excerpt:
        'Exploring how artificial intelligence is revolutionizing the way businesses operate and make decisions in the digital age.',
      content:
        'Artificial intelligence is transforming business operations across industries. From automated customer service to predictive analytics, AI is enabling companies to work smarter and more efficiently...',
      author: 'Sarah Chen',
      date: '2024-12-20',
      readTime: '5 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
      tags: ['AI', 'Business', 'Automation'],
      likes: 42,
      comments: 12,
    },
    {
      id: 2,
      title: 'Singapore Tech Exhibition: Key Takeaways',
      excerpt:
        "Our recent trip to Singapore's premier technology exhibition revealed exciting trends in microchip technology and AI integration.",
      content:
        'The Singapore Technology Exhibition provided invaluable insights into the latest developments in semiconductor technology. Key highlights included breakthrough in nanometer processing...',
      author: 'Michael Prom',
      date: '2024-12-18',
      readTime: '7 min read',
      category: 'Travel',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&h=400&fit=crop',
      tags: ['Singapore', 'Technology', 'Exhibition'],
      likes: 38,
      comments: 8,
    },
    {
      id: 3,
      title: 'Building Sustainable Tech Solutions',
      excerpt:
        'How modern technology companies are integrating sustainability into their core business strategies and product development.',
      content:
        'Sustainability is no longer just a buzzword in the tech industry. Companies are actively developing solutions that reduce environmental impact while maintaining innovation...',
      author: 'Elena Rodriguez',
      date: '2024-12-15',
      readTime: '6 min read',
      category: 'Innovation',
      image:
        'https://plus.unsplash.com/premium_photo-1679607694659-c1e07cedef95?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Sustainability', 'Green Tech', 'Innovation'],
      likes: 55,
      comments: 15,
    },
    {
      id: 4,
      title: 'Digital Transformation in Small Businesses',
      excerpt:
        "A comprehensive guide to implementing digital solutions that can help small businesses compete in today's market.",
      content:
        'Small businesses face unique challenges when adopting digital technologies. This guide explores practical strategies for digital transformation...',
      author: 'James Wilson',
      date: '2024-12-12',
      readTime: '8 min read',
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      tags: ['Digital Transformation', 'Small Business', 'Strategy'],
      likes: 29,
      comments: 6,
    },
    {
      id: 5,
      title: 'The Rise of Remote Work Technology',
      excerpt:
        'Examining the tools and technologies that have made remote work not just possible, but highly effective for modern teams.',
      content:
        'The pandemic accelerated the adoption of remote work technologies. Today, sophisticated collaboration tools enable distributed teams to work seamlessly...',
      author: 'Amanda Foster',
      date: '2024-12-10',
      readTime: '4 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop',
      tags: ['Remote Work', 'Collaboration', 'Technology'],
      likes: 67,
      comments: 21,
    },
    {
      id: 6,
      title: 'Understanding Blockchain Beyond Cryptocurrency',
      excerpt: 'Exploring the practical applications of blockchain technology in supply chain, healthcare, and other industries.',
      content:
        'While blockchain is often associated with cryptocurrency, its applications extend far beyond digital currency. From supply chain transparency to secure medical records...',
      author: 'David Kim',
      date: '2024-12-08',
      readTime: '9 min read',
      category: 'Insights',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop',
      tags: ['Blockchain', 'Supply Chain', 'Healthcare'],
      likes: 43,
      comments: 18,
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className='min-h-screen bg-gray-50'>
      <main className='pt-20'>
        {/* Hero Section */}
        <motion.section initial='initial' animate='animate' variants={staggerContainer} className='bg-white py-16 px-4'>
          <div className='max-w-6xl mx-auto'>
            <motion.div variants={fadeInUp} className='text-center mb-12'>
              <h1 className='text-4xl md:text-5xl font-light text-gray-900 mb-4'>Six Senergy Blog</h1>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Insights, innovations, and stories from the world of technology and business
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div variants={fadeInUp} className='mb-12'>
              <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
                <div className='relative'>
                  <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
                  <input
                    type='text'
                    placeholder='Search articles...'
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className='pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent w-80'
                  />
                </div>
                <div className='flex gap-2 flex-wrap'>
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                        selectedCategory === category ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}>
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Post */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='py-16 px-4'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl font-light text-gray-900 mb-8'>Featured Article</h2>
            <motion.div whileHover={{ scale: 1.02 }} className='bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer'>
              <div className='md:flex'>
                <div className='md:w-1/2'>
                  <img src={featuredPost.image} alt={featuredPost.title} className='w-full h-64 md:h-full object-cover' />
                </div>
                <div className='md:w-1/2 p-8'>
                  <div className='flex items-center gap-4 mb-4'>
                    <span className='px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm'>{featuredPost.category}</span>
                    <div className='flex items-center text-gray-500 text-sm'>
                      <Calendar className='h-4 w-4 mr-1' />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className='text-2xl font-medium text-gray-900 mb-4'>{featuredPost.title}</h3>
                  <p className='text-gray-600 mb-6 leading-relaxed'>{featuredPost.excerpt}</p>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <div className='flex items-center text-gray-500 text-sm'>
                        <User className='h-4 w-4 mr-1' />
                        {featuredPost.author}
                      </div>
                      <div className='flex items-center text-gray-500 text-sm'>
                        <Clock className='h-4 w-4 mr-1' />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <motion.button whileHover={{ x: 5 }} className='flex items-center text-gray-900 font-medium'>
                      Read More <ArrowRight className='h-4 w-4 ml-2' />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Blog Posts Grid */}
        <motion.section initial='initial' animate='animate' variants={staggerContainer} className='py-16 px-4'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl font-light text-gray-900 mb-8'>Latest Articles ({filteredPosts.length})</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {filteredPosts.slice(1).map(post => (
                <motion.article
                  key={post.id}
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className='bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300'>
                  <img src={post.image} alt={post.title} className='w-full h-48 object-cover' />
                  <div className='p-6'>
                    <div className='flex items-center gap-2 mb-3'>
                      <span className='px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs'>{post.category}</span>
                      <div className='flex items-center text-gray-500 text-xs'>
                        <Calendar className='h-3 w-3 mr-1' />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <h3 className='text-lg font-medium text-gray-900 mb-3 line-clamp-2'>{post.title}</h3>
                    <p className='text-gray-600 text-sm mb-4 line-clamp-3'>{post.excerpt}</p>
                    <div className='flex items-center justify-between mb-4'>
                      <div className='flex items-center text-gray-500 text-xs'>
                        <User className='h-3 w-3 mr-1' />
                        {post.author}
                      </div>
                      <div className='flex items-center text-gray-500 text-xs'>
                        <Clock className='h-3 w-3 mr-1' />
                        {post.readTime}
                      </div>
                    </div>
                    <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
                      <div className='flex items-center gap-4'>
                        <div className='flex items-center text-gray-500 text-xs'>
                          <Heart className='h-4 w-4 mr-1' />
                          {post.likes}
                        </div>
                        <div className='flex items-center text-gray-500 text-xs'>
                          <MessageCircle className='h-4 w-4 mr-1' />
                          {post.comments}
                        </div>
                      </div>
                      <motion.button whileHover={{ scale: 1.1 }} className='text-gray-400 hover:text-gray-600'>
                        <Share2 className='h-4 w-4' />
                      </motion.button>
                    </div>
                    <div className='flex flex-wrap gap-1 mt-3'>
                      {post.tags.map(tag => (
                        <span key={tag} className='px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs'>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Newsletter Subscription */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='py-16 px-4 bg-gray-900'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl font-light text-white mb-4'>Stay Updated</h2>
            <p className='text-gray-300 mb-8 max-w-2xl mx-auto'>
              Subscribe to our newsletter and get the latest insights, trends, and stories delivered directly to your inbox.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent'
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200'>
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
