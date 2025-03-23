'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SCROLL_THRESHOLD = 20;
const MOBILE_MENU_ANIMATION_DELAY = 100;

const NAV_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Logo = memo(() => (
  <a href="#" className="text-2xl font-bold text-white" aria-label="Tanzil Logo">
    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
      TI
    </span>
  </a>
));
Logo.displayName = 'Logo';

const NavLink = memo(({ href, name, onClick, className }) => (
  <a
    href={href}
    onClick={onClick}
    className={className}
    aria-label={name}
  >
    {name}
  </a>
));
NavLink.displayName = 'NavLink';

const MobileMenuButton = memo(({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className="md:hidden w-10 h-10 flex items-center justify-center"
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
    aria-expanded={isOpen}
  >
    <div className="w-6 h-6 flex flex-col justify-center items-center">
      <span
        className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0.5' : 'translate-y-[-4px]'
          }`}
      />
      <span
        className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-0' : 'translate-y-[4px]'
          }`}
      />
    </div>
  </button>
));
MobileMenuButton.displayName = 'MobileMenuButton';

const DesktopNav = memo(() => (
  <div className="hidden md:flex items-center space-x-8">
    {NAV_ITEMS.map((item) => (
      <NavLink
        key={item.name}
        {...item}
        className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
      />
    ))}
  </div>
));
DesktopNav.displayName = 'DesktopNav';

const MobileMenu = memo(({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-gray-900/95 backdrop-blur-md md:hidden"
        style={{ zIndex: 40 }}
      >
        <nav className="flex flex-col items-center justify-center min-h-screen">
          {NAV_ITEMS.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.3,
                delay: i * MOBILE_MENU_ANIMATION_DELAY / 1000,
              }}
            >
              <NavLink
                {...item}
                onClick={onClose}
                className="text-3xl font-bold text-white hover:text-blue-400 py-4 transition-colors duration-300"
              />
            </motion.div>
          ))}
        </nav>
      </motion.div>
    )}
  </AnimatePresence>
));
MobileMenu.displayName = 'MobileMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <nav className="flex items-center justify-between py-4" role="navigation">
              <Logo />
              <DesktopNav />
              <MobileMenuButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
            </nav>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
};

export default memo(Header);
