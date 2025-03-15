'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const texts = ["Front-End Developer", "UI/UX Designer"];
  const period = 2000;
  const delta = 100;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    let ticker;
    
    if (isDeleting) {
      ticker = setTimeout(() => tick(), delta / 2);
    } else {
      ticker = setTimeout(() => tick(), delta);
    }

    return () => clearTimeout(ticker);
  }, [text, isDeleting]);

  useEffect(() => {
    // Set window size on mount
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const tick = () => {
    let i = loopNum % texts.length;
    let fullText = texts[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setTimeout(() => setIsDeleting(true), period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum((prevLoop) => (prevLoop + 1) % texts.length);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Animated Background Blob */}
      <motion.div
        className="fixed w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[80px] pointer-events-none"
        animate={{
          x: mousePosition.x - (windowSize.width / 2),
          y: mousePosition.y - (windowSize.height / 2),
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 30,
          mass: 0.8,
        }}
        style={{
          left: '50%',
          top: '50%',
        }}
      />

      <motion.div className="max-w-4xl mx-auto relative z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="text-center md:text-left">
          <motion.h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hi, I'm{' '}
            <motion.span 
              className="text-blue-500 inline-block"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, -5, 5, 0] 
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              Muhammad Zaim El Yafi
            </motion.span>
          </motion.h1>

          <motion.h2 className="text-2xl md:text-3xl text-gray-400 font-semibold mb-6 h-[40px]">
            <span>I'm a </span>
            <span className="inline-block min-w-[80px]">
              {text}
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} className="inline-block ml-1">
                |
              </motion.span>
            </span>
          </motion.h2>

          <motion.p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto md:mx-0">
            I create beautiful, functional, and user-friendly digital experiences.
            With expertise in both frontend and backend development, I bring ideas to life.
          </motion.p>

          <motion.div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <motion.a href="#projects" className="btn btn-primary text-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              View My Work
            </motion.a>
            <motion.a href="#contact" className="btn border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white text-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;