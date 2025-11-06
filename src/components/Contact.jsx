import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send } from 'lucide-react';
import ContactImg from '../assets/contact.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div id="contact" className="mb-10 min-h-screen">
      <h2 className="text-3xl lg:text-5xl font-semibold text-center">
        Get in Touch
      </h2>
      <div className=" mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 lg:gap-30 border p-10 md:px-15 lg:px-20 rounded-lg shadow-xl">
        <div className="w-full md:w-1/2 flex-center p-4 lg:p-6 h-full">
          <img
            src={ContactImg}
            alt="Contact illustration"
            className="w-full object-contain shadow-2xl h-100 rounded-2xl"
            loading="lazy"
          />
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex-center flex-col space-y-4 sm:space-y-5 lg:space-y-6">
            <div className="relative w-full hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.8)] focus-within:drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]  transition-all duration-300">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <User size={20} />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-950/90 border border-gray-800 rounded-lg sm:rounded-xl py-3 sm:py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-2 focus:ring-gray-700/50 transition-all duration-200 text-sm sm:text-base"
              />
            </div>

            <div className="relative w-full hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.8)] focus-within:drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]  transition-all duration-300">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail size={20} />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-950/90 border border-gray-800 rounded-lg sm:rounded-xl py-3 sm:py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-2 focus:ring-gray-700/50 transition-all duration-200 text-sm sm:text-base"
              />
            </div>

            <div className="relative w-full hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.8)] focus-within:drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]  transition-all duration-300">
              <div className="absolute left-4 top-4 text-gray-400">
                <MessageSquare size={20} />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-slate-950/90 border border-gray-800 rounded-lg sm:rounded-xl py-3 sm:py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-2 focus:ring-gray-700/50 transition-all duration-200 resize-none text-sm sm:text-base"
              />
            </div>

            <button type="button" onClick={handleSubmit} className="self-end">
              <span>Send Message</span>
              <Send size={18} id="send-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
