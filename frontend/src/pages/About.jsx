import React from 'react';

// Define the component
const About = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-white rounded-xl shadow-lg m-5">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">About Our E-Commerce Store</h1>
      <p className="text-gray-600 mb-6">
        Welcome to Habi Pinas! We are dedicated to providing the highest quality, ethically sourced products from local Filipino artisans. Our mission is to connect traditional craftsmanship with modern consumers, ensuring fair wages and sustainable practices.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-3">Our Mission</h2>
      <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
        <li>Promote sustainable fashion and handmade goods.</li>
        <li>Support local communities and Filipino craftsmen.</li>
        <li>Deliver high-quality products with a story.</li>
      </ul>

      <p className="text-sm text-gray-500 mt-10">
        Thank you for supporting our commitment to culture and quality.
      </p>
    </div>
  );
};

// CRITICAL FIX: This line ensures 'default' export is available for App.jsx
export default About;