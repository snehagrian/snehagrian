import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-primary-400 mb-2">Sneha Grian Joshua</h3>
            <p className="text-gray-400">Software Engineer</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="mailto:snehagrianjsk@gmail.com"
              className="hover:text-primary-400 transition-colors duration-200"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://linkedin.com/in/sneha-grian"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {currentYear} Sneha Grian Joshua. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
