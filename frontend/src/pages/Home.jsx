import React from 'react';
import LatestCollection from '../components/LatestCollection';
import Hero from '../components/Hero'; // 👈 Re-importing your Hero component
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';
import GetInTouch from '../components/GetInTouch';

const Home = () => {
  return (
    <div className='min-h-screen'>
      
      {/* 1. Placing your Hero component back at the top */}
      <Hero /> 

      {/* The generic "Welcome to the Store!" section has been removed */}

      {/* 2. Keeping the LatestCollection component that is now working */}
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
      <GetInTouch />
      

      {/* Example of other content */}

    </div>
  );
};

export default Home;