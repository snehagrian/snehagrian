'use client'

import { useState, useEffect } from 'react'

export const useTypingEffect = (words: string[], typingSpeed = 150, deletingSpeed = 100, delayBetweenWords = 2000) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.substring(0, currentText.length + 1))
          } else {
            // Word complete, wait then start deleting
            setTimeout(() => setIsDeleting(true), delayBetweenWords)
          }
        } else {
          // Deleting
          if (currentText.length === 0) {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          } else {
            setCurrentText(currentText.substring(0, currentText.length - 1))
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords])

  return currentText
}
