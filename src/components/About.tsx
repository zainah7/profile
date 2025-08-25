import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Building responsive, interactive web applications with modern frameworks'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'Creating native and cross-platform mobile apps for iOS and Android'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimizing applications for speed and exceptional user experience'
    }
  ];

  return (
    <section id="about" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate frontend and mobile developer with expertise in creating
            beautiful, functional applications across web and mobile platforms. I love
            turning ideas into reality through clean code and intuitive design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Logo Container */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="w-80 h-80 glass-effect rounded-3xl flex items-center justify-center relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-purple-800/20"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.3),transparent_50%)]"></div>
                
                {/* Main Logo */}
                <div className="relative z-10 text-center">
                  {/* Brand Name */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-6"
                  >
                    <div className="text-4xl font-bold text-white mb-2">
                      <span className="text-gradient">dev</span>
                      <span className="text-purple-300">.</span>
                      <span className="text-white">zee</span>
                    </div>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
                  </motion.div>
                  
                  {/* Decorative Code Brackets */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex justify-center items-center space-x-4 mb-4 text-purple-300"
                  >
                    <span className="text-2xl font-mono">{'<'}</span>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    </div>
                    <span className="text-2xl font-mono">{'/>'}</span>
                  </motion.div>
                  
                  {/* Tech Icons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex justify-center space-x-6 text-purple-300 mb-4"
                  >
                    <Code className="w-6 h-6" />
                    <Smartphone className="w-6 h-6" />
                  </motion.div>
                  
                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-sm text-gray-300 font-medium"
                  >
                    Frontend & Mobile Developer
                  </motion.p>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4,
                    ease: "easeInOut"
                  }}
                  className="absolute top-8 right-8 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60"
                ></motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-8 left-8 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
                ></motion.div>
                
                {/* Corner Accent */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute top-6 left-6 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                ></motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="text-purple-400 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;