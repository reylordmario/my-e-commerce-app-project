import React from 'react'
import { Scissors, Crown, Ruler, Leaf, Truck, CreditCard, RotateCcw, Sparkles } from 'lucide-react'

const items = [
  { Icon: Scissors, text: 'Handcrafted by Master Filipino Artisans' },
  { Icon: Crown, text: 'As Worn by Beauty Queens & Celebrities' },
  { Icon: Ruler, text: 'Free Made-to-Measure Tailoring' },
  { Icon: Leaf, text: 'Sustainable Piña, Jusi & Inabel Weaves' },
  { Icon: Truck, text: 'Nationwide Shipping • Cash on Delivery' },
  { Icon: CreditCard, text: 'Pay with GCash, Maya or COD' },
  { Icon: RotateCcw, text: 'Easy 7-Day Returns & Exchange' },
  { Icon: Sparkles, text: 'Loved by 10,000+ Proud Filipinos' },
]

const PromoMarquee = () => {
  // Duplicate the list so the -50% scroll loops seamlessly
  const row = [...items, ...items]

  return (
    <section className='my-14 overflow-hidden rounded-2xl bg-gradient-to-r from-[#26211d] via-[#3a322b] to-[#26211d] py-5 shadow-lg'>
      <style>{`
        @keyframes hp-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .hp-marquee-track { animation: hp-marquee 70s linear infinite; }
        .hp-marquee-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .hp-marquee-track { animation: none; } }
      `}</style>

      <div className='hp-marquee-track flex w-max items-center'>
        {row.map(({ Icon, text }, i) => (
          <div key={i} className='flex items-center gap-3 px-9 shrink-0'>
            <Icon size={19} strokeWidth={1.5} className='text-[#c8902a] shrink-0' aria-hidden='true' />
            <span className='text-[#e9e2d6] text-sm font-medium tracking-[0.06em] whitespace-nowrap'>{text}</span>
            <span className='text-[#c8902a]/70 text-xs ml-9 select-none'>◆</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PromoMarquee
