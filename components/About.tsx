'use client'

import Section from './Section'
import { motion } from 'framer-motion'
import { FaCode, FaCloud, FaRocket } from 'react-icons/fa'

const About = () => {
  const highlights = [
    {
      icon: <FaCode className="text-4xl text-primary-600" />,
      title: 'Full-Stack Development',
      description: 'Expert in building scalable web applications using React, Node.js, Java, and Python',
    },
    {
      icon: <FaCloud className="text-4xl text-primary-600" />,
      title: 'Cloud & DevOps',
      description: 'Experienced with AWS, Azure, Docker, Kubernetes, and CI/CD pipelines',
    },
    {
      icon: <FaRocket className="text-4xl text-primary-600" />,
      title: 'System Design',
      description: 'Specialized in distributed systems, microservices architecture, and fault-tolerant design',
    },
  ]

  return (
    <Section id="about" title="About Me" className="bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center leading-relaxed"
        >
          Software Development Engineer with experience building and owning backend services and scalable microservices using Java, Python, Node.js, and AWS. Skilled in RESTful APIs, event-driven systems, and performance-optimized data workflows. Strong foundation in distributed systems, system design, and production reliability.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-slate-50 dark:bg-slate-800 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default About
