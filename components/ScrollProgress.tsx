'use client'

import { useScrollProgress } from '@/hooks/useScrollProgress'

const ScrollProgress = () => {
  const scrollProgress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gray-200 dark:bg-gray-800">
      <div
        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}

export default ScrollProgress
