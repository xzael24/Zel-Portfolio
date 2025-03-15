'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Toast = ({ status, message }: { status: 'success' | 'error', message: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, x: '-50%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 ${
        status === 'success' ? 'bg-green-500' : 'bg-red-500'
      }`}
    >
      {status === 'success' ? (
        <FaCheckCircle className="text-white text-xl" />
      ) : (
        <FaExclamationCircle className="text-white text-xl" />
      )}
      <p className="text-white font-medium">{message}</p>
    </motion.div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    emailjs.init('FgavnXSQyAYujUvYu');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isValidGmail = (email: string) => {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidGmail(formData.email)) {
      setSubmitStatus('error');
      setShowToast(true);
      // Auto hide toast after 3 seconds
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.send(
        'service_ntiqo4f',
        'template_0p5jle4',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Zael Kluivert',
        },
        'FgavnXSQyAYujUvYu'
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      } else {
        setSubmitStatus('error');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
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
              I'm currently open for freelance work and exciting opportunities.
              Feel free to reach out if you have a project in mind or just want to connect!
            </p>
            <div className="space-y-4">
              <a
                href="mailto:zaimelyafi@gmail.com"
                className="flex items-center gap-3 text-dimWhite hover:text-white transition-colors"
              >
                <FaEnvelope className="text-primary" />
                zaimelyafi@gmail.com
              </a>
              <a
                href="https://github.com/xzael24"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-dimWhite hover:text-white transition-colors"
              >
                <FaGithub className="text-primary" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/zael-kluivert"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-dimWhite hover:text-white transition-colors"
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
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-secondary/50 rounded-lg border border-gray-600 focus:border-primary focus:outline-none text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-dimWhite mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-secondary/50 rounded-lg border ${
                  formData.email && !isValidGmail(formData.email) 
                    ? 'border-red-500' 
                    : 'border-gray-600'
                } focus:border-primary focus:outline-none text-white`}
                required
              />
              {formData.email && !isValidGmail(formData.email) && (
                <p className="text-red-500 text-sm mt-1">Please use a valid Gmail address</p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block text-dimWhite mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-secondary/50 rounded-lg border border-gray-600 focus:border-primary focus:outline-none text-white"
                required
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              className={`btn btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              animate={isSubmitting ? {
                scale: [1, 0.95, 1],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                }
              } : {}}
            >
              {isSubmitting ? (
                <motion.div
                  className="flex items-center justify-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  />
                  Sending...
                </motion.div>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>
      
      <AnimatePresence>
        {showToast && (
          <Toast 
            status={submitStatus || 'error'} 
            message={
              submitStatus === 'success'
                ? '✨ Message sent successfully!'
                : submitStatus === 'error' && !isValidGmail(formData.email)
                ? 'Please use a valid Gmail address'
                : 'Failed to send message. Please try again.'
            }
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact; 