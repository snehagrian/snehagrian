'use client'

import Section from './Section'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: 'Email',
      value: 'snehagrianjsk@gmail.com',
      link: 'mailto:snehagrianjsk@gmail.com',
      description: 'Send me an email anytime',
    },
    {
      icon: <FaLinkedin className="text-3xl" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/sneha-grian',
      link: 'https://linkedin.com/in/sneha-grian',
      description: 'Let\'s connect professionally',
    },
    {
      icon: <FaGithub className="text-3xl" />,
      title: 'GitHub',
      value: 'github.com/snehagrian',
      link: 'https://github.com/snehagrian',
      description: 'Check out my projects',
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: 'Location',
      value: 'Jacksonville, FL',
      link: null,
      description: 'Based in Jacksonville',
    },
  ]

  return (
    <Section id="contact" title="Get In Touch" className="bg-slate-50 dark:bg-slate-800">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just connecting with fellow developers. 
            Feel free to reach out through any of the channels below!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 p-4 rounded-full">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {info.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {info.description}
                  </p>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 font-medium break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400 font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="mailto:snehagrianjsk@gmail.com?subject=Let's Connect!"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <FaEnvelope className="text-xl" />
            Send Me an Email
          </a>
        </motion.div>
      </div>
    </Section>
  )
}

export default Contact
