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
        'Delivered 10+ production-grade applications by architecting scalable Node.js microservices and RESTful APIs supporting high-volume production traffic across multi-domain client environments',
        'Reduced API response latency by 28% by optimizing RESTful architecture, improving database query performance, and applying efficient data structures and object-oriented design principles',
        'Improved frontend performance and state consistency by building reusable React components using Context API and integrating backend services for responsive user experiences',
        'Engineered an AI-powered expense recommendation engine using OpenAI APIs and backend data processing workflows to enable personalized financial insights',
        'Reduced post-release defects and improved release stability by owning system design, Jest-based test coverage, CI/CD automation, and production issue resolution',
      ],
    },
    {
      title: 'Research Intern',
      company: 'EinNel Technologies',
      location: 'Chennai, India',
      period: 'February 2022 - October 2022',
      achievements: [
        'Contributed to backend microservices development using Spring Boot within a distributed system architecture supporting structured data processing',
        'Optimized REST APIs and backend logic through performance tuning and query indexing (PostgreSQL, MySQL), improving throughput and reducing latency by 25%',
        'Assisted in database schema refinement and production debugging to enhance scalability, reliability, and service stability',
      ],
    },
    {
      title: 'Software Developer (Volunteer)',
      company: 'Resilient Visions Collaboratory Lab, ASU',
      location: 'Tempe, USA',
      period: 'February 2026 - Present',
      achievements: [
        'Leading performance-critical C++ modules for real-time video processing using OpenFace, designing asynchronous workflows under strict low-latency constraints',
        'Conducting runtime profiling and memory analysis to optimize performance, improve responsiveness, and maintain system stability in real-time execution environments',
      ],
    },
    {
      title: 'Student Worker',
      company: 'Arizona State University',
      location: 'Tempe, USA',
      period: 'August 2024 - December 2025',
      achievements: [
        'Maintained POS and inventory management systems ensuring accurate transaction processing and data consistency',
        'Collaborated with team members to improve reporting workflows and reduce manual operational errors',
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
