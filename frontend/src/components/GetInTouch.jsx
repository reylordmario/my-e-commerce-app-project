import React, { useState } from 'react';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle your form submission logic here
    console.log('Form Submitted:', formData);
    alert('Message sent successfully!');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-white py-20 px-6 text-black font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* Left Column: Contact Details */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold leading-tight mb-8 uppercase tracking-tighter">
            Let's create something <br />
            <span className="bg-black text-white px-2">amazing</span> together
          </h2>
          <p className="text-gray-500 mb-12 max-w-sm leading-relaxed text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="space-y-10">
            {/* Info Item */}
            <div className="border-b border-gray-200 pb-6">
              <span className="block text-[8px] font-black tracking-[0.2em] uppercase text-gray-400 mb-2">Email</span>
              <a href="mailto:hello@johndoe.dev" className="text-l hover:text-gray-600 transition-colors">
                hello@johndoe.dev
              </a>
            </div>

            {/* Info Item */}
            <div className="border-b border-gray-200 pb-6">
              <span className="block text-[8px] font-black tracking-[0.2em] uppercase text-gray-400 mb-2">Phone</span>
              <p className="text-l">+1 (555) 123-4567</p>
            </div>

            {/* Info Item */}
            <div className="border-b border-gray-200 pb-6">
              <span className="block text-[8px] font-black tracking-[0.2em] uppercase text-gray-400 mb-2">Location</span>
              <p className="text-l uppercase tracking-tight font-medium">San Francisco, CA</p>
            </div>
          </div>
        </div>

        {/* Right Column: Minimalist Form */}
        <div className="flex-1 bg-gray-50 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-xs font-bold mb-3 uppercase tracking-widest">Full Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe" 
                required
                className="w-full bg-transparent border-b border-black py-3 focus:outline-none focus:border-gray-400 transition-colors placeholder-gray-300"
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold mb-3 uppercase tracking-widest">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com" 
                required
                className="w-full bg-transparent border-b border-black py-3 focus:outline-none focus:border-gray-400 transition-colors placeholder-gray-300"
              />
            </div>

            <div>
              <label className="block text-xs font-bold mb-3 uppercase tracking-widest">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4" 
                placeholder="Tell me about your project..." 
                required
                className="w-full bg-transparent border-b border-black py-3 focus:outline-none focus:border-gray-400 transition-colors placeholder-gray-300 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="group relative w-full bg-black text-white py-5 font-bold uppercase tracking-[0.3em] text-xs hover:bg-gray-900 transition-all active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default GetInTouch;