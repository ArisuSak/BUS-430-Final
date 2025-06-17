'use client';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Blog', href: '/blog' },
];

const tripLocations = [
  { name: 'Siem Reap', slug: 'siem-reap' },
  { name: 'Singapore', slug: 'singapore' },
  { name: 'Sihanoukville', slug: 'sihanoukville' },
  { name: 'Thailand', slug: 'thailand' },
  { name: 'Mondulkiri', slug: 'mondulkiri' },
];

export default function Header() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isTripDropdownOpen, setIsTripDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Six Senergy - Clean Energy Solutions</title>
        <meta name='description' content='Leading the future of sustainable energy' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap' rel='stylesheet' />
      </Head>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
          scrollY > 50 ? 'bg-white/96 backdrop-blur-xl shadow-lg border-b border-gray-100/50' : 'bg-white/92 backdrop-blur-lg'
        }`}>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='flex justify-between items-center h-20'>
            {/* Logo */}
            <Link
              href='/'
              className={`text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent transform transition-all duration-1000 hover:scale-105 ${
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}>
              Six Senergy
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-10'>
              {/* Trip Dropdown */}
              <div
                className='relative'
                onMouseEnter={() => setIsTripDropdownOpen(true)}
                onMouseLeave={() => setIsTripDropdownOpen(false)}>
                <button
                  className={`flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium text-sm tracking-wide group ${
                    isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'
                  }`}
                  style={{ transitionDelay: '300ms' }}>
                  <span>Trip</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isTripDropdownOpen ? 'rotate-180' : ''}`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 transition-all duration-300 ease-out ${
                    isTripDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}>
                  <div className='bg-white rounded-xl shadow-xl border border-gray-100/50 backdrop-blur-sm overflow-hidden'>
                    <div className='py-2'>
                      {tripLocations.map((location, index) => (
                        <Link
                          key={location.slug}
                          href={`/trip/${location.slug}`}
                          className='block px-4 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50/80 transition-all duration-200 border-b border-gray-50 last:border-b-0'
                          style={{
                            transitionDelay: `${index * 50}ms`,
                            transform: isTripDropdownOpen ? 'translateX(0)' : 'translateX(-10px)',
                          }}>
                          {location.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Navigation Links */}
              {navLinks.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium text-sm tracking-wide relative group ${
                    isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 100 + 300}ms` }}>
                  {item.label}
                  <span className='absolute inset-x-0 -bottom-1 h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <button
              className={`hidden md:block px-6 py-2.5 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm font-medium tracking-wide rounded-full hover:from-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: '700ms' }}>
              Start Planning
            </button>

            {/* Mobile Menu Button */}
            <button
              className='md:hidden text-gray-600 hover:text-gray-900 transition-colors duration-200'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-out ${
              isMobileMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
            <div className='pt-4 space-y-2'>
              {/* Mobile Trip Section */}
              <div className='space-y-1'>
                <div className='px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider'>Trip Destinations</div>
                {tripLocations.map(location => (
                  <Link
                    key={location.slug}
                    href={`/trip/${location.slug}`}
                    className='block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200'
                    onClick={() => setIsMobileMenuOpen(false)}>
                    {location.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Other Links */}
              <div className='border-t border-gray-100 pt-4 space-y-1'>
                {navLinks.map(item => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className='block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200'
                    onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
                <button className='w-full mt-4 px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors duration-200'>
                  Start Planning
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
