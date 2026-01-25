'use client'

import Section from './Section'
import { motion } from 'framer-motion'
import {
  FaPython,
  FaJava,
  FaJs,
  FaReact,
  FaNode,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaDatabase,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiNextdotjs,
  SiSpringboot,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiKubernetes,
  SiJenkins,
  SiRedux,
  SiTailwindcss,
} from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <FaPython className="text-blue-500" /> },
        { name: 'Java', icon: <FaJava className="text-red-600" /> },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
      ],
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact className="text-cyan-500" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: 'Redux', icon: <SiRedux className="text-purple-600" /> },
      ],
    },
    {
      category: 'Backend & Frameworks',
      skills: [
        { name: 'Node.js', icon: <FaNode className="text-green-600" /> },
        { name: 'Express', icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
        { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
        { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
      ],
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', icon: <FaAws className="text-orange-500" /> },
        { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
        { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-600" /> },
        { name: 'Jenkins', icon: <SiJenkins className="text-red-600" /> },
        { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
      ],
    },
    {
      category: 'Core Concepts',
      skills: [
        { name: 'Data Structures & Algorithms', icon: null },
        { name: 'Object-Oriented Design', icon: null },
        { name: 'Distributed Systems', icon: null },
        { name: 'Microservices Architecture', icon: null },
        { name: 'CI/CD', icon: null },
        { name: 'Agile & SDLC', icon: null },
      ],
    },
  ]

  return (
    <Section id="skills" title="Skills & Technologies" className="bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                  >
                    {skill.icon && <span className="text-2xl">{skill.icon}</span>}
                    <span className={skill.icon ? '' : 'text-sm'}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Skills
