'use client'

import Section from './Section'
import { motion } from 'framer-motion'
import { FaTrophy, FaCode, FaUsers, FaGlobe } from 'react-icons/fa'

const Achievements = () => {
  const metrics = [
    {
      icon: <FaCode className="text-4xl" />,
      number: '10+',
      label: 'Production Projects',
      description: 'Delivered to clients',
    },
    {
      icon: <FaTrophy className="text-4xl" />,
      number: '28%',
      label: 'API Latency Reduction',
      description: 'Backend optimization',
    },
    {
      icon: <FaUsers className="text-4xl" />,
      number: '40%',
      label: 'Efficiency Gain',
      description: 'Financial tracking',
    },
    {
      icon: <FaGlobe className="text-4xl" />,
      number: '80%',
      label: 'Time Saved',
      description: 'Log analysis automation',
    },
  ]

  return (
    <Section id="achievements" title="" className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-slate-900 dark:to-slate-800 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-4 text-primary-600 dark:text-primary-400">
                {metric.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                {metric.number}
              </div>
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Achievements
