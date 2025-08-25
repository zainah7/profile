import heroBg from '../assets/hero-bg.svg';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black/80">
      <img
        src={heroBg}
        alt="Decorative background"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
        aria-hidden="true"
        draggable="false"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 z-0 pointer-events-none"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm{' '}
            <motion.span
              className="text-purple-300 drop-shadow-lg font-extrabold"
              style={{ textShadow: '0 2px 16px #000, 0 1px 0 #fff2' }}
              animate={{
                scale: [1, 1.08, 1],
                color: ["#c4b5fd", "#a78bfa", "#c4b5fd"],
                textShadow: [
                  '0 2px 16px #000, 0 1px 0 #fff2',
                  '0 4px 24px #a78bfa, 0 1px 0 #fff2',
                  '0 2px 16px #000, 0 1px 0 #fff2'
                ]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
            >
              Zainah Saheed
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Frontend & Mobile Developer passionate about creating
            beautiful, responsive applications and seamless user experiences
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.a
              href="mailto:zainaabd7@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Hire Me
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1-OWX2SDQ4zvW8gf24_m4MNha4R0GNWST/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 ml-4"
            >
              View Resume
            </motion.a>
          </motion.div>


        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="text-white" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;