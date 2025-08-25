import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

import finaptImg from '../assets/Finapt App.png';


const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Mobile App',
      description: 'A full-featured shopping app built with React Native and Firebase integration',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'Expo', 'Redux', 'Firebase'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Task Management Web App',
      description: 'A simple todo and task tracker PWA',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/zainah7/task-tracker.git',
      live: 'https://task-tracker-mu-indol.vercel.app'
    },
    {
      title: 'Finapt App',
      description: 'A modern finance and budgeting app for tracking expenses and managing your money.',
      image: finaptImg,
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS',],
      github: 'https://github.com/zainah7/finapt.git',
      live: 'https://finapt.vercel.app'
    },
    {
      title: 'Restaurant Finder',
      description: 'A location-based restaurant discovery app with reviews and booking features',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS',],
      github: 'https://github.com/zainah7/foodwagon.git',
      live: 'https://foodwagon-git-main-zainah7s-projects.vercel.app'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects with smooth animations',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Premium Laundry Service',
      description: 'A modern web platform for booking and managing premium laundry services online.',
      image: 'https://images.pexels.com/photos/3831826/pexels-photo-3831826.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/zainah7/sataya.git',
      live: 'https://sataya-git-main-zainah7s-projects.vercel.app'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6 inline-block"
            initial={{ textShadow: '0 0 0 #7f5af0' }}
            animate={{ textShadow: ['0 0 0 #7f5af0', '0 4px 32px #7f5af0', '0 0 0 #7f5af0'] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
          >
            Featured Projects
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent web and mobile development projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-white hover:text-purple-300 transition-colors duration-200"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-white hover:text-purple-300 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                    <span>Live</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;