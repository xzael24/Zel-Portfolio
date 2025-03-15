'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id="contact" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="heading">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-dimWhite text-lg mb-8">
              I'm always open to new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together or 
              just want to say hello!
            </p>
            <div className="space-y-4">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 text-dimWhite hover:text-white"
              >
                <FaEnvelope className="text-primary" />
                your.email@example.com
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-dimWhite hover:text-white"
              >
                <FaGithub className="text-primary" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-dimWhite hover:text-white"
              >
                <FaLinkedin className="text-primary" />
                LinkedIn
              </a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-dimWhite mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-secondary/50 rounded-lg border border-gray-600 focus:border-primary focus:outline-none text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-dimWhite mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-secondary/50 rounded-lg border border-gray-600 focus:border-primary focus:outline-none text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-dimWhite mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-secondary/50 rounded-lg border border-gray-600 focus:border-primary focus:outline-none text-white"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact; 