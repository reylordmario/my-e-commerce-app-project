import React from 'react';
import LatestCollection from '../components/LatestCollection';
import Hero from '../components/Hero'; // 👈 Re-importing your Hero component
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';
import GetInTouch from '../components/GetInTouch';
import PromoMarquee from '../components/PromoMarquee';

const Home = () => {
  return (
    <div className='min-h-screen'>
      
      {/* 1. Placing your Hero component back at the top */}
      <Hero />

      {/* 2. Moving promo marquee — brand value props */}
      <PromoMarquee />

      {/* 3. Latest collections (pushed down by the marquee) */}
      <div className='mt-4'>
        <LatestCollection />
      </div>
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
      <GetInTouch />
      

      {/* Example of other content */}

    </div>
  );
};

export default Home;