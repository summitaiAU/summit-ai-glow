import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  words: string[];
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ words, className = "" }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isTyping) {
      // Typing effect
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, 100); // Typing speed
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, pause before deletion
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause duration
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50); // Deletion speed
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next word
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsTyping(true);
      }
    }
  }, [currentText, currentWordIndex, isTyping, words]);

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={`relative ${className}`}>
      <span className="text-accent font-bold">
        {currentText}
        <span 
          className={`ml-1 transition-opacity duration-100 ${
            showCursor ? 'opacity-100' : 'opacity-0'
          }`}
        >
          |
        </span>
      </span>
    </span>
  );
};

export default AnimatedText;