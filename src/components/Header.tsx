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

      {/* Floating Navigation */}
      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-out shadow-xl ${
          scrollY > 50
            ? 'bg-black/95 backdrop-blur-xl shadow-2xl shadow-black/20'
            : 'bg-black/90 backdrop-blur-lg shadow-lg shadow-black/10'
        }`}
        style={{
          width: 'fit-content',
          borderRadius: '50px',
          padding: '15px 40px',
        }}>
        <div className='flex items-center space-x-8'>
          {/* Logo */}
          <Link
            href='/'
            className={`text-xl font-bold text-white whitespace-nowrap transform transition-all duration-1000 hover:scale-105 ${
              isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
            Six Senergy
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-6'>
            {/* Trip Dropdown */}
            <div
              className='relative'
              onMouseEnter={() => setIsTripDropdownOpen(true)}
              onMouseLeave={() => setIsTripDropdownOpen(false)}>
              <button
                className={`flex items-center space-x-1 text-white/90 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide group ${
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
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 transition-all duration-300 ease-out ${
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
                className={`text-white/90 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide relative group ${
                  isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 1) * 100 + 300}ms` }}>
                {item.label}
                <span className='absolute inset-x-0 -bottom-1 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <button
            className={`hidden md:block px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-medium tracking-wide rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-600/25 ${
              isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
            style={{ transitionDelay: '700ms' }}>
            Start Planning
          </button>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-white/90 hover:text-white transition-colors duration-200'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className='fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden'>
          <div className='fixed top-24 left-1/2 -translate-x-1/2 w-80 max-w-[90vw]'>
            <div className='bg-white rounded-2xl shadow-2xl overflow-hidden'>
              <div className='p-6 space-y-4'>
                {/* Mobile Trip Section */}
                <div className='space-y-2'>
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
                <div className='border-t border-gray-100 pt-4 space-y-2'>
                  {navLinks.map(item => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className='block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200'
                      onClick={() => setIsMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                  <button className='w-full mt-4 px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-medium rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-200'>
                    Start Planning
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
