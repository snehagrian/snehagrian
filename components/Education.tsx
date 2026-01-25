'use client'

import Section from './Section'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Information Technology',
      institution: 'Arizona State University',
      location: 'Tempe, USA',
      period: 'January 2024 - December 2025',
      gpa: '3.79',
      coursework: [
        'Natural Language Processing',
        'Data Visualization and Reporting for IT',
        'Analyzing Big Data',
        'Advanced Big Data Analysis and Artificial Intelligence',
        'Advanced DB Management Systems',
        'Info Systems Development',
        'Cloud Architecture',
      ],
    },
    {
      degree: "Bachelor's in Computer Science and Engineering",
      institution: 'Anna University',
      location: 'Chennai, India',
      period: 'August 2018 - April 2022',
      gpa: '3.71',
      coursework: [],
    },
  ]

  return (
    <Section id="education" title="Education" className="bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold mb-2">
                    <FaGraduationCap />
                    <span>{edu.institution}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  GPA: <span className="text-primary-600 dark:text-primary-400">{edu.gpa}</span>
                </p>
              </div>

              {edu.coursework.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Relevant Coursework:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Education
