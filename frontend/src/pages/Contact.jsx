import React, { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import { Shirt, Ruler, Footprints, Car, MapPin, ChevronDown } from 'lucide-react'
import { onImgError } from '../assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

const MAP_QUERY = 'Manila, Philippines'
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=13&output=embed`
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`

// Atelier/boutique store imagery for the contact carousel (sample stock photos)
const WM = 'https://upload.wikimedia.org/wikipedia/commons/thumb/'
const slides = [
  { src: WM + 'd/d4/ArtAmbient_boutique_interior_Arta.jpg/960px-ArtAmbient_boutique_interior_Arta.jpg', name: 'Inside Our Atelier' },
  { src: WM + '6/64/French_Quarter_Boutique_Window.jpg/960px-French_Quarter_Boutique_Window.jpg', name: 'The Habi Pinas Boutique' },
  { src: WM + 'c/c5/Man_examines_clothing_in_a_boutique_while_shopping_for_fashionable_attire_in_a_trendy_store_setting.jpg/960px-Man_examines_clothing_in_a_boutique_while_shopping_for_fashionable_attire_in_a_trendy_store_setting.jpg', name: 'Handpicked Heritage Fabrics' },
  { src: WM + "8/8e/Shop_assistant_inside_a_colorful_women%27s_clothing_boutique%2C_Gaibandha%2C_Bangladesh_2026_01.jpg/960px-Shop_assistant_inside_a_colorful_women%27s_clothing_boutique%2C_Gaibandha%2C_Bangladesh_2026_01.jpg", name: 'Personal Styling Service' },
  { src: WM + 'd/df/Pritchards%2C_Tailor_and_Outfitter%2C_Oswestry_%281472414%29.jpg/960px-Pritchards%2C_Tailor_and_Outfitter%2C_Oswestry_%281472414%29.jpg', name: 'Made-to-Measure Fittings' },
]

const Carousel = () => {
  const [idx, setIdx] = useState(0)
  const go = (i) => setIdx((i + slides.length) % slides.length)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 3500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className='relative w-full md:max-w-[480px] h-[420px] rounded-lg overflow-hidden bg-[#fdf8f0] group shadow-md'>
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.src}
          onError={onImgError}
          alt={s.name}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${i === idx ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}

      {/* caption gradient */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none' />
      <div className='absolute bottom-0 left-0 p-6 text-white'>
        <p className='prata-regular text-2xl drop-shadow'>Habi Pinas</p>
        <p className='text-sm text-white/85'>{slides[idx]?.name}</p>
      </div>

      {/* arrows */}
      <button
        onClick={() => go(idx - 1)}
        aria-label='Previous'
        className='absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 text-[#7a0f1e] text-lg flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-white transition-all'
      >
        ‹
      </button>
      <button
        onClick={() => go(idx + 1)}
        aria-label='Next'
        className='absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 text-[#7a0f1e] text-lg flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-white transition-all'
      >
        ›
      </button>

      {/* dots */}
      <div className='absolute bottom-4 right-4 flex gap-2'>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === idx ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>
    </div>
  )
}

// Atelier opening hours (minutes from midnight)
const HOURS = [
  { d: 'Monday', label: '10:00 AM – 7:00 PM', open: 600, close: 1140 },
  { d: 'Tuesday', label: '10:00 AM – 7:00 PM', open: 600, close: 1140 },
  { d: 'Wednesday', label: '10:00 AM – 7:00 PM', open: 600, close: 1140 },
  { d: 'Thursday', label: '10:00 AM – 7:00 PM', open: 600, close: 1140 },
  { d: 'Friday', label: '10:00 AM – 7:00 PM', open: 600, close: 1140 },
  { d: 'Saturday', label: '10:00 AM – 8:00 PM', open: 600, close: 1200 },
  { d: 'Sunday', label: '12:00 PM – 5:00 PM', open: 720, close: 1020 },
]

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const SERVICES = ['Custom Terno', 'Custom Barong Tagalog', 'Fitting & Measurement', 'Styling Consultation', 'Alteration / Repair']
const APPTS_KEY = 'habipinas_appointments'

const fmtTime = (m) => {
  const hh = Math.floor(m / 60)
  const mm = m % 60
  const ap = hh >= 12 ? 'PM' : 'AM'
  const h12 = hh % 12 || 12
  return `${h12}:${String(mm).padStart(2, '0')} ${ap}`
}

const BookingModal = ({ open, onClose }) => {
  const todayStr = new Date().toISOString().split('T')[0]
  const blank = { service: SERVICES[0], date: '', time: '', name: '', email: '', phone: '' }
  const [form, setForm] = useState(blank)

  useEffect(() => {
    if (open) setForm(blank)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v, ...(k === 'date' ? { time: '' } : {}) }))

  // Build available 1-hour slots from the opening hours of the chosen weekday
  const slots = useMemo(() => {
    if (!form.date) return []
    const day = new Date(form.date + 'T00:00:00').getDay()
    const h = HOURS.find((x) => x.d === DAY_NAMES[day])
    if (!h) return []
    const out = []
    for (let m = h.open; m + 60 <= h.close; m += 60) out.push(m)
    return out
  }, [form.date])

  const dayLabel = form.date ? DAY_NAMES[new Date(form.date + 'T00:00:00').getDay()] : ''

  if (!open) return null

  const submit = (e) => {
    e.preventDefault()
    if (!form.date || !form.time || !form.name || !form.phone) {
      toast.error('Please complete the required fields.')
      return
    }
    const ref = 'APT-' + Math.random().toString(36).slice(2, 7).toUpperCase()
    const appt = { ref, ...form, timeLabel: fmtTime(Number(form.time)), createdAt: new Date().toISOString() }
    try {
      const list = JSON.parse(localStorage.getItem(APPTS_KEY) || '[]')
      list.unshift(appt)
      localStorage.setItem(APPTS_KEY, JSON.stringify(list))
    } catch { /* ignore storage errors */ }
    toast.success(`Appointment booked! Ref ${ref}`)
    onClose()
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4' onClick={onClose}>
      <div className='absolute inset-0 bg-black/50 backdrop-blur-sm' />
      <div
        onClick={(e) => e.stopPropagation()}
        className='relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto'
      >
        {/* header */}
        <div className='bg-gradient-to-r from-[#7a0f1e] to-[#3a0d18] text-white p-6 rounded-t-2xl'>
          <button onClick={onClose} aria-label='Close' className='absolute top-4 right-4 text-white/80 hover:text-white text-xl'>✕</button>
          <p className='text-[#f2c14e] tracking-[0.2em] text-xs font-semibold uppercase mb-1'>Habi Pinas Atelier</p>
          <h3 className='prata-regular text-2xl'>Book an Appointment</h3>
        </div>

        <form onSubmit={submit} className='p-6 flex flex-col gap-4'>
          {/* service */}
          <label className='text-sm'>
            <span className='block mb-1.5 font-medium text-gray-700'>Service</span>
            <select value={form.service} onChange={(e) => set('service', e.target.value)} className='w-full border border-gray-300 rounded-lg py-2.5 px-3 outline-none focus:border-[#7a0f1e]'>
              {SERVICES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </label>

          {/* date */}
          <label className='text-sm'>
            <span className='block mb-1.5 font-medium text-gray-700'>Preferred date</span>
            <input type='date' min={todayStr} value={form.date} onChange={(e) => set('date', e.target.value)} className='w-full border border-gray-300 rounded-lg py-2.5 px-3 outline-none focus:border-[#7a0f1e]' />
          </label>

          {/* time slots */}
          {form.date && (
            <div className='text-sm'>
              <span className='block mb-2 font-medium text-gray-700'>Available times <span className='text-gray-400 font-normal'>({dayLabel})</span></span>
              {slots.length === 0 ? (
                <p className='text-red-500 text-xs'>We're closed that day — please pick another date.</p>
              ) : (
                <div className='grid grid-cols-3 sm:grid-cols-4 gap-2'>
                  {slots.map((m) => (
                    <button
                      type='button'
                      key={m}
                      onClick={() => set('time', String(m))}
                      className={`py-2 rounded-lg border text-xs transition-all ${String(m) === form.time ? 'border-[#7a0f1e] bg-[#fdeaea] text-[#7a0f1e] font-semibold' : 'border-gray-300 hover:border-gray-400'}`}
                    >
                      {fmtTime(m)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* contact */}
          <input value={form.name} onChange={(e) => set('name', e.target.value)} placeholder='Full name *' className='w-full border border-gray-300 rounded-lg py-2.5 px-3 outline-none focus:border-[#7a0f1e] text-sm' />
          <div className='flex gap-3'>
            <input value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder='Mobile number *' className='w-full border border-gray-300 rounded-lg py-2.5 px-3 outline-none focus:border-[#7a0f1e] text-sm' />
            <input type='email' value={form.email} onChange={(e) => set('email', e.target.value)} placeholder='Email' className='w-full border border-gray-300 rounded-lg py-2.5 px-3 outline-none focus:border-[#7a0f1e] text-sm' />
          </div>

          <button type='submit' className='mt-2 bg-[#7a0f1e] text-white py-3 rounded-lg font-semibold hover:bg-[#5e0f24] active:scale-95 transition-all'>
            Confirm Appointment
          </button>
          <p className='text-center text-xs text-gray-400'>We'll text you to confirm. Walk-ins welcome, but appointments get priority.</p>
        </form>
      </div>
    </div>
  )
}

const VisitUs = ({ onBook }) => {
  const now = new Date()
  const todayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()]
  const mins = now.getHours() * 60 + now.getMinutes()
  const today = HOURS.find((h) => h.d === todayName)
  const isOpen = today && mins >= today.open && mins < today.close

  return (
    <div className='mb-16'>
      <div className='text-center text-2xl mb-8'>
        <Title text1={'VISIT'} text2={'US'} />
      </div>

      <div className='grid md:grid-cols-2 gap-8 items-stretch'>
        {/* Opening hours */}
        <div className='bg-white border border-[#efe2cd] rounded-2xl p-7 shadow-sm'>
          <div className='flex items-center justify-between mb-5'>
            <p className='font-semibold text-lg text-gray-700'>Opening Hours</p>
            <span className={`flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full ${isOpen ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
              <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
              {isOpen ? 'Open now' : 'Closed now'}
            </span>
          </div>
          <ul className='flex flex-col'>
            {HOURS.map((h) => (
              <li
                key={h.d}
                className={`flex justify-between py-2.5 px-3 rounded-lg text-sm ${h.d === todayName ? 'bg-[#fdf8f0] font-semibold text-[#7a0f1e]' : 'text-gray-600'}`}
              >
                <span>{h.d}{h.d === todayName ? ' · Today' : ''}</span>
                <span>{h.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What to expect */}
        <div className='bg-gradient-to-br from-[#7a0f1e] to-[#3a0d18] text-white rounded-2xl p-7 shadow-sm flex flex-col justify-center'>
          <p className='text-[#f2c14e] tracking-[0.2em] text-xs font-semibold uppercase mb-3'>Drop By Our Atelier</p>
          <h3 className='prata-regular text-2xl mb-4'>Feel the fabrics in person</h3>
          <ul className='flex flex-col gap-4 text-white/85 text-sm'>
            <li className='flex items-center gap-3'><Shirt size={18} strokeWidth={1.5} className='text-[#f2c14e] shrink-0' /> Browse handwoven piña, jusi &amp; inabel up close</li>
            <li className='flex items-center gap-3'><Ruler size={18} strokeWidth={1.5} className='text-[#f2c14e] shrink-0' /> Free measurement &amp; styling consultation</li>
            <li className='flex items-center gap-3'><Footprints size={18} strokeWidth={1.5} className='text-[#f2c14e] shrink-0' /> Walk-ins welcome — appointments get priority</li>
            <li className='flex items-center gap-3'><Car size={18} strokeWidth={1.5} className='text-[#f2c14e] shrink-0' /> Free parking available on-site</li>
          </ul>
          <button onClick={onBook} className='self-start mt-6 bg-[#f2c14e] text-[#3a0d18] font-semibold px-7 py-3 rounded-full hover:bg-white transition-colors'>
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  )
}

const Contact = () => {
  const [showMap, setShowMap] = useState(true)
  const [booking, setBooking] = useState(false)

  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-16'>
        <Carousel />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Atelier</p>
          <p className='text-gray-500'>123 Kalye Sampaguita <br /> Brgy. Maharlika, Manila, Philippines</p>
          <p className='text-gray-500'>Tel: (02) 8123-4567 <br /> Email: kamusta@habipinas.ph</p>
          <p className='font-semibold text-xl text-gray-600'>Made-to-Measure</p>
          <p className='text-gray-500'>Book a fitting for a custom terno or barong tailored to your measurements.</p>
          <button onClick={() => setBooking(true)} className='border border-[#7a0f1e] text-[#7a0f1e] px-8 py-4 text-sm rounded hover:bg-[#7a0f1e] hover:text-white transition-all duration-500'>
            Book a Fitting
          </button>
        </div>
      </div>

      {/* ---------- Visit Us ---------- */}
      <VisitUs onBook={() => setBooking(true)} />

      {/* ---------- Toggleable location map ---------- */}
      <div className='mb-28'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 mb-5'>
          <div className='text-center sm:text-left'>
            <p className='font-semibold text-xl text-gray-700'>Find Us on the Map</p>
            <p className='text-sm text-gray-400'>123 Kalye Sampaguita, Brgy. Maharlika, Manila</p>
          </div>
          <div className='flex items-center gap-3'>
            <a
              href={MAP_LINK}
              target='_blank'
              rel='noreferrer'
              className='text-sm border border-gray-300 text-gray-600 px-5 py-2.5 rounded-full hover:border-[#7a0f1e] hover:text-[#7a0f1e] transition-colors'
            >
              Get Directions ↗
            </a>
            <button
              onClick={() => setShowMap((v) => !v)}
              aria-expanded={showMap}
              className='flex items-center gap-2 text-sm bg-[#7a0f1e] text-white px-6 py-2.5 rounded-full hover:bg-[#5e0f24] active:scale-95 transition-all'
            >
              <MapPin size={16} strokeWidth={1.8} />
              {showMap ? 'Hide Map' : 'View Map'}
              <ChevronDown size={16} strokeWidth={2} className={`transition-transform duration-300 ${showMap ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Collapsible map container */}
        <div className={`overflow-hidden rounded-2xl transition-all duration-500 ease-in-out ${showMap ? 'max-h-[480px] opacity-100 shadow-lg border border-[#efe2cd]' : 'max-h-0 opacity-0'}`}>
          <iframe
            title='Habi Pinas Atelier location'
            src={MAP_EMBED}
            className='w-full h-[450px] border-0'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            allowFullScreen
          />
        </div>
      </div>

      <NewsletterBox />

      <BookingModal open={booking} onClose={() => setBooking(false)} />
    </div>
  )
}

export default Contact
