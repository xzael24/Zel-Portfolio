'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center md:text-left">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            Hi, I'm{" "}
            <motion.span 
              className="text-primary inline-block"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, -5, 5, 0] 
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              Zael Kluivert
            </motion.span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl text-dimWhite font-semibold mb-6"
            variants={itemVariants}
          >
            Full Stack Developer | UI/UX Designer | Tech Enthusiast
          </motion.h2>
          
          <motion.p 
            className="text-dimWhite text-lg mb-8 max-w-2xl mx-auto md:mx-0"
            variants={itemVariants}
          >
            I create beautiful, functional, and user-friendly digital experiences.
            With expertise in both frontend and backend development, I bring ideas to life.
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.a 
              href="#projects" 
              className="btn btn-primary text-center"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn border-2 border-primary text-primary hover:bg-primary hover:text-white text-center"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 