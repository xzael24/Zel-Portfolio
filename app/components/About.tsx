'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'React', icon: <FaReact className="text-4xl text-[#61DAFB]" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-[#339933]" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-[#3178C6]" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-4xl text-[#06B6D4]" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-[#47A248]" /> },
    { name: 'Python', icon: <FaPython className="text-4xl text-[#3776AB]" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="about" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2 
          className="heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <motion.p 
          className="text-dimWhite text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I am a passionate developer with a strong foundation in web development.
          My journey in tech has equipped me with both technical expertise and
          problem-solving skills. I love creating efficient, scalable solutions
          that make a real impact.
        </motion.p>

        <motion.h3 
          className="text-2xl font-bold mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h3>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center p-6 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors cursor-pointer"
              variants={skillVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
            >
              <motion.div
                variants={iconVariants}
                whileHover="hover"
              >
                {skill.icon}
              </motion.div>
              <motion.span 
                className="mt-2 text-dimWhite"
                whileHover={{ scale: 1.1 }}
              >
                {skill.name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About; 