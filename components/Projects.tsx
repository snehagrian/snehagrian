'use client'

import Section from './Section'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaChartLine, FaStar } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'ProofMap – GitHub Skills Verification Platform',
      type: 'Production',
      featured: true,
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'OpenAI GPT-4', 'GitHub API', 'Vercel'],
      achievements: [
        'Built a full-stack platform that automatically validates developer resume skills against GitHub repositories, generating AI-powered skill readiness scores and personalized project roadmaps',
        'Designed and deployed intelligent skill detection system analyzing repository patterns, dependencies, and code structure to identify proven vs. missing technical competencies',
        'Integrated OpenAI GPT-4 to generate contextual project recommendations that help developers bridge skill gaps through practical, portfolio-ready implementations',
        'Published technical article on DEV.to sharing the problem-solving journey and platform architecture, reaching developers seeking to strengthen their technical profiles',
      ],
      metrics: {
        icon: <FaChartLine />,
        text: 'Live production platform',
      },
      links: {
        github: 'https://github.com/snehagrian/proofmap',
        live: 'https://proofmap.snehagrian.dev',
        article: 'https://dev.to/sneha_grian_cfca240a95d41/i-built-proofmap-because-recruiters-dont-trust-resumes-anymore-4m0b',
      },
    },
    {
      title: 'BloomVe – People-First Job Sharing Platform',
      type: 'Full-Stack Project',
      technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Firebase', 'Chrome Extension', 'Tailwind CSS 4'],
      achievements: [
        'Architected and developed a complete collaborative platform enabling room-based job sharing with dual modes (Chats and Channels), achieving MVP+ status with full authentication, privacy controls, and invite system',
        'Engineered Chrome Extension (Manifest V3) integrated with Next.js web app for seamless one-click content sharing from any webpage, enabling rapid opportunity distribution across collaborative rooms',
        'Implemented comprehensive Firebase backend leveraging Auth, Firestore, and Storage to support real-time collaboration, user management, and room-based access control with owner-managed permissions',
        'Designed modern glass-morphism UI with Tailwind CSS 4 ensuring consistent branding and user experience across both web application and browser extension components',
      ],
      metrics: {
        icon: <FaChartLine />,
        text: 'MVP+ with Chrome Extension',
      },
      links: {
        github: 'https://github.com/snehagrian/bloomve',
      },
    },
    {
      title: 'AI-Powered API Performance Bottleneck Analyzer',
      type: 'Solo Project',
      technologies: ['FastAPI', 'Python', 'OpenAI GPT-4', 'Pydantic', 'REST APIs'],
      achievements: [
        'Reduced manual production log analysis time by 80% by automatically detecting API bottlenecks including slow endpoints, high error rates, and N+1 database patterns',
        'Built an AI-powered FastAPI microservice integrating P95 latency analysis and GPT-4–generated optimization recommendations to deliver actionable performance fixes',
      ],
      metrics: {
        icon: <FaChartLine />,
        text: '80% reduction in analysis time',
      },
      links: {
        github: 'https://github.com/snehagrian/API-PBA',
      },
    },
    {
      title: 'Budgetron – Mobile FinTech Application',
      type: 'Solo Project',
      technologies: ['React Native', 'TypeScript', 'Node.js', 'MySQL', 'REST APIs'],
      achievements: [
        'Owned end-to-end development of a full-stack mobile application using React Native (TypeScript) and Node.js, designing scalable REST APIs and backend architecture for expense tracking and group payments',
        'Reduced manual financial tracking effort by 40% and improved API response performance by 25% through optimized MySQL queries, efficient endpoint design, and automated Excel/PDF report generation',
      ],
      metrics: {
        icon: <FaChartLine />,
        text: '40% reduction in tracking effort',
      },
    },
    {
      title: 'Interactive Gamified Learning Platform',
      type: 'Solo Project',
      technologies: ['React.js', 'HTML5 Canvas', 'JavaScript'],
      achievements: [
        'Engineered a browser-based educational game using React and HTML5 Canvas, optimizing rendering and state management to achieve smooth 60 FPS performance',
        'Deployed live proof-of-concept and improved UI responsiveness through efficient component architecture and event handling',
      ],
      metrics: {
        icon: <FaChartLine />,
        text: '60 FPS performance',
      },
      links: {
        live: 'https://phonicsworld-beta.vercel.app/',
      },
    },
  ]

  return (
    <Section id="projects" title="Featured Projects" className="bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`bg-slate-50 dark:bg-slate-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                project.featured ? 'ring-2 ring-primary-500 dark:ring-primary-400' : ''
              }`}
            >
              {project.featured && (
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full text-sm font-semibold">
                    <FaStar className="text-xs" />
                    Featured
                  </span>
                </div>
              )}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                    <span className="font-medium">{project.type}</span>
                  </div>
                </div>
                {(project.links?.github || project.links?.live || project.links?.article) && (
                  <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
                      >
                        <FaGithub />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.links.article && (
                      <a
                        href={project.links.article}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors"
                      >
                        <FaExternalLinkAlt />
                        <span>Article</span>
                      </a>
                    )}
                  </div>
                )}
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
