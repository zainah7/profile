import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, X as XIcon, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/zainah7', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'http://linkedin.com/in/zainah-saheed-%F0%9F%87%B8%F0%9F%87%A6-009860287', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:zainaabd7@gmail.com', label: 'Email' },
    { icon: <Phone size={20} />, href: 'tel:+2348072318157', label: 'Phone' },
    { icon: <XIcon size={20} />, href: 'https://twitter.com/zainah_777', label: 'X' },
  ];

  return (
    <footer className="bg-black/40 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex space-x-6 order-1"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 px-4 py-2 rounded bg-gray-800 text-gray-200 hover:bg-gray-700 transition-colors duration-200"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to Top"
          >
            Back to Top
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 flex flex-col md:flex-row items-center justify-center gap-2">
            <span>© {new Date().getFullYear()} All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <span>Crafted with <span>passion &amp; modern web tech</span></span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;