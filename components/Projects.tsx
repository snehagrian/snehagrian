'use client'

import Section from './Section'
import { motion } from 'framer-motion'
import { FaCalendar, FaUsers, FaChartLine } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Budgetron - Personal & Group Financial Management Platform',
      date: 'August 2025',
      technologies: ['React Native', 'Express.js', 'Node.js', 'MongoDB'],
      achievements: [
        'Collaborated with a team to build a React Native + Express.js application for expense tracking, group payments, and financial goal management',
        'Enabled collaborative expense sharing, automated bank statement imports, and exportable reports (Excel/PDF), reducing manual tracking effort by 40%',
      ],
      metrics: {
        icon: <FaChartLine />,
        text: '40% reduction in manual tracking',
      },
    },
    {
      title: 'Cyberbullying Predictive Analysis on Twitter Data',
      date: 'January 2022 - April 2022',
      technologies: ['Python', 'Random Forest', 'Machine Learning', 'Data Processing'],
      teamSize: 3,
      achievements: [
        'Developed a Random Forest-based classification model to detect harmful content, achieving 72.2% accuracy',
        'Supported by scalable data preprocessing pipelines for efficient analysis of large Twitter datasets',
      ],
      metrics: {
        icon: <FaChartLine />,
        text: '72.2% accuracy achieved',
      },
    },
  ]

  return (
    <Section id="projects" title="Academic Projects" className="bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <FaCalendar />
                      <span>{project.date}</span>
                    </div>
                    {project.teamSize && (
                      <div className="flex items-center gap-2">
                        <FaUsers />
                        <span>Team Size: {project.teamSize}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-3 mb-4">
                {project.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-primary-600 mt-1.5">●</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold">
                {project.metrics.icon}
                <span>{project.metrics.text}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Projects
