'use client'

import { FaLinkedin, FaEnvelope, FaArrowDown, FaDownload } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useTypingEffect } from '@/hooks/useTypingEffect'

const Hero = () => {
  const typedRole = useTypingEffect([
    'Software Engineer',
    'Full-Stack Developer',
    'Cloud Architect',
    'System Designer',
  ])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 pt-20">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-600">
              Sneha Grian Joshua
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto h-8"
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold">
              {typedRole}
              <span className="animate-pulse">|</span>
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Building scalable, fault-tolerant distributed systems and cloud-native services with a focus
            on performance optimization and reliability
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="mailto:snehagrianjsk@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <FaEnvelope />
              <span>Get in Touch</span>
            </a>
            <a
              href="https://linkedin.com/in/sneha-grian"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-slate-800 transition-all duration-200 hover:scale-105"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="flex items-center gap-2 px-6 py-3 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <FaDownload />
              <span>Resume</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center"
          >
            <a
              href="#about"
              className="animate-bounce text-primary-600 dark:text-primary-400"
              aria-label="Scroll down"
            >
              <FaArrowDown size={32} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
