import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { products, assets, onImgError } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const stats = [
  { value: 'Est. 2024', label: 'Crafted in Manila' },
  { value: '100%', label: 'Handcrafted' },
  { value: '17+', label: 'Curated Designs' },
  { value: '7-Day', label: 'Easy Returns' },
];

const values = [
  { icon: '🧵', title: 'Authentic Craftsmanship', text: 'Every terno and barong is hand-finished by skilled Filipino artisans using time-honored techniques.' },
  { icon: '🤝', title: 'Empowering Artisans', text: 'We work directly with local weavers and embroiderers, ensuring fair wages and a sustainable livelihood.' },
  { icon: '🌿', title: 'Sustainable & Ethical', text: 'From piña and jusi to inabel weaves, we celebrate natural Filipino fabrics and slow, mindful fashion.' },
  { icon: '💝', title: 'Made with Pride', text: 'Each piece carries a story of heritage — designed to make you feel regal at every celebration.' },
];

const About = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); window.scrollTo(0, 0); }, []);
  const collage = products.slice(0, 3).map((p) => p.image[0]);

  const up = (delay = 0) =>
    `transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`;

  return (
    <div className='pt-6 pb-10 overflow-hidden'>

      {/* ---------- HERO ---------- */}
      <section className={`relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#3a0d18] via-[#7a0f1e] to-[#3a0d18] ${up()}`}>
        <div className='absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#c8902a]/20 blur-3xl' />
        <div className='absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#c8902a]/10 blur-3xl' />
        <div className='relative flex flex-col md:flex-row items-center gap-8 p-8 sm:p-12'>
          <div className='flex-1 text-white'>
            <p className='inline-flex items-center gap-2 text-[#f2c14e] tracking-[0.25em] text-xs font-semibold uppercase mb-4'>
              <span className='w-8 h-[2px] bg-[#f2c14e]' /> Our Story
            </p>
            <h1 className='prata-regular text-3xl sm:text-5xl leading-tight mb-5'>
              Heritage Woven <br /> in <span className='text-[#f2c14e]'>Elegance</span>
            </h1>
            <p className='text-white/80 max-w-md leading-relaxed'>
              Habi Pinas was born from a love for the Filipino artistry that turns thread into legacy. We bring the timeless beauty of the terno, Maria Clara, and Barong Tagalog to every modern celebration.
            </p>
            <Link to='/collection' className='inline-flex items-center gap-2 mt-7 bg-[#f2c14e] text-[#3a0d18] font-semibold px-7 py-3 rounded-full hover:bg-white transition-colors'>
              Explore the Collection →
            </Link>
          </div>
          <div className='flex-1 grid grid-cols-3 gap-3 w-full'>
            {collage.map((src, i) => (
              <img
                key={i}
                src={src}
                onError={onImgError}
                alt=''
                className={`w-full aspect-[3/4] object-cover object-top rounded-xl shadow-xl hover:scale-105 hover:-translate-y-1 transition-transform duration-500 ${i === 1 ? 'translate-y-5' : ''}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 ${up(100)}`}>
        {stats.map((s, i) => (
          <div key={i} className='text-center bg-[#fdf8f0] border border-[#efe2cd] rounded-2xl py-7 px-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>
            <p className='text-2xl sm:text-3xl font-bold text-[#7a0f1e]'>{s.value}</p>
            <p className='text-xs sm:text-sm text-gray-500 mt-1 uppercase tracking-wide'>{s.label}</p>
          </div>
        ))}
      </section>

      {/* ---------- MISSION ---------- */}
      <section className='mt-16 flex flex-col lg:flex-row gap-10 items-center'>
        <div className={`flex-1 ${up()}`}>
          <img
            src={assets.heroPhoto}
            onError={onImgError}
            alt='Filipiniana terno'
            className='w-full max-h-[460px] object-cover object-top rounded-3xl shadow-lg'
          />
        </div>
        <div className={`flex-1 ${up(150)}`}>
          <p className='text-[#c8902a] tracking-[0.25em] text-xs font-semibold uppercase mb-3'>Our Mission</p>
          <h2 className='prata-regular text-3xl sm:text-4xl text-gray-800 mb-5'>Keeping Filipino tradition alive, one stitch at a time</h2>
          <p className='text-gray-600 leading-relaxed mb-4'>
            We exist to connect the soul of Filipino craftsmanship with the modern world. By championing local artisans and natural heritage fabrics, every Habi Pinas piece becomes a wearable tribute to our culture.
          </p>
          <ul className='flex flex-col gap-3'>
            {['Promote sustainable, handmade Filipino fashion', 'Support local communities & master craftsmen', 'Deliver heirloom-quality pieces with a story'].map((t, i) => (
              <li key={i} className='flex items-start gap-3 text-gray-700'>
                <span className='mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-[#7a0f1e] text-white text-xs shrink-0'>✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- VALUES ---------- */}
      <section className='mt-20'>
        <div className='text-center mb-10'>
          <p className='text-[#c8902a] tracking-[0.25em] text-xs font-semibold uppercase mb-2'>Why Habi Pinas</p>
          <h2 className='prata-regular text-3xl sm:text-4xl text-gray-800'>What We Stand For</h2>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
          {values.map((v, i) => (
            <div
              key={i}
              style={{ transitionDelay: `${i * 90}ms` }}
              className={`group bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#7a0f1e]/30 transition-all duration-300 ${up()}`}
            >
              <div className='w-14 h-14 flex items-center justify-center rounded-2xl bg-[#fdf8f0] text-2xl mb-5 group-hover:bg-[#7a0f1e] group-hover:scale-110 transition-all duration-300'>
                {v.icon}
              </div>
              <h3 className='font-semibold text-gray-800 mb-2'>{v.title}</h3>
              <p className='text-sm text-gray-500 leading-relaxed'>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className='mt-20'>
        <div className='relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#7a0f1e] to-[#3a0d18] text-center py-14 px-6'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#c8902a]/15 blur-3xl' />
          <div className='relative'>
            <h2 className='prata-regular text-2xl sm:text-4xl text-white mb-4'>Wear your heritage with pride</h2>
            <p className='text-white/80 max-w-xl mx-auto mb-7'>Discover handcrafted ternos and barongs made for life's most beautiful celebrations.</p>
            <Link to='/collection' className='inline-block bg-[#f2c14e] text-[#3a0d18] font-semibold px-8 py-3 rounded-full hover:bg-white transition-colors'>
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>

      <div className='mt-20'>
        <NewsletterBox />
      </div>
    </div>
  );
};

export default About;
