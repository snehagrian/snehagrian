'use client'

import Section from './Section'
import { motion } from 'framer-motion'
import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'FOSSFREAKS Private Limited',
      location: 'Chennai, India',
      period: 'November 2022 - December 2023',
      achievements: [
        'Designed, developed, and delivered cloud-ready, full-stack web applications using React.js, Node.js, and Express, contributing to 10+ production client projects across multiple domains',
        'Built scalable, fault-tolerant RESTful APIs using efficient data structures and object-oriented design principles, improving system performance, latency, and reliability',
        'Developed reusable, maintainable frontend components with React Context API and integrated backend services to ensure consistent state management and responsive user experiences',
        'Implemented an AI-powered expense recommendation engine using OpenAI APIs, applying backend logic and data processing to deliver personalized user insights',
        'Owned features end-to-end, from design and implementation to deployment and production support, including debugging issues, writing Jest tests, and supporting CI/CD pipelines',
      ],
    },
    {
      title: 'Research Intern',
      company: 'EinNel Technologies',
      location: 'Chennai, India',
      period: 'February 2022 - October 2022',
      achievements: [
        'Optimized Spring Boot microservices in a distributed backend environment, reducing API latency by 30% and improving scalability and responsiveness',
        'Designed and implemented asynchronous and reactive REST APIs, increasing backend throughput, fault tolerance, and system resilience',
        'Contributed to ML-driven automation initiatives and full-stack bug fixes across React, Java, and PostgreSQL, reducing backend processing time by 25%',
        'Collaborated with cross-functional teams to debug production issues, improve system reliability, and support iterative delivery in an Agile development workflow',
      ],
    },
  ]

  return (
    <Section id="experience" title="Work Experience" className="bg-slate-50 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold mb-2">
                    <FaBriefcase />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-3 mt-6">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-primary-600 mt-1.5">●</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Experience
