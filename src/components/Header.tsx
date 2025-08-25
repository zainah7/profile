import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Smooth scroll for internal links
  const handleNavClick = (item: { name: string; href: string; external?: boolean }) => {
    setActive(item.name);
    if (!item.external && item.href.startsWith('#')) {
      const el = document.querySelector(item.href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect' : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className=""
          >
            <Logo />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                className={`transition-all duration-300 relative px-2 py-1 rounded-md uppercase tracking-wider font-semibold text-sm overflow-hidden
                  ${active === item.name
                    ? 'text-purple-400 bg-white/5 after:w-full after:h-0.5 after:bg-purple-400 border-b-2 border-purple-400 shadow-sm'
                    : 'text-white hover:text-purple-300 after:w-0 after:h-0.5 after:bg-purple-400 hover:after:w-full'}
                  after:absolute after:left-0 after:-bottom-1 after:transition-all after:duration-300
                `}
                onClick={e => { e.preventDefault(); handleNavClick(item); }}
              >
                <span className="relative z-10">{item.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 glass-effect rounded-lg p-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block py-2 px-2 rounded-md uppercase tracking-wider font-semibold text-sm transition-all duration-300 relative overflow-hidden
                  ${active === item.name
                    ? 'text-purple-400 bg-white/5 after:w-full after:h-0.5 after:bg-purple-400 border-b-2 border-purple-400 shadow-sm'
                    : 'text-white hover:text-purple-300 after:w-0 after:h-0.5 after:bg-purple-400 hover:after:w-full'}
                  after:absolute after:left-0 after:-bottom-1 after:transition-all after:duration-300
                `}
                onClick={e => { e.preventDefault(); handleNavClick(item); setActive(item.name); setIsOpen(false); }}
              >
                <span className="relative z-10">{item.name}</span>
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;