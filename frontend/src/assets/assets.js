// frontend/src/assets/assets.js
// ============================================================================
//  HABI PINAS — Filipiniana & Barong boutique
//  Product imagery uses REAL, freely-licensed photographs of Filipinos in
//  Filipiniana ternos, Maria Clara / baro't saya, and Barong Tagalog, served
//  from Wikimedia Commons. Swap these `image:` URLs for your own studio photos
//  anytime. (Images load directly in the browser, no API key required.)
// ============================================================================

import logo from './logo.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import cross_icon from './cross_icon.png'

// ---------------------------------------------------------------------------
//  Real photos (Wikimedia Commons — public domain / CC licensed)
// ---------------------------------------------------------------------------
const WM = 'https://upload.wikimedia.org/wikipedia/commons/'
// Women · Filipiniana / terno / Maria Clara / baro't saya
const catriona1 = WM + 'thumb/2/21/Catriona_Gray_-_NCCA_Ternong_Terno.jpg/960px-Catriona_Gray_-_NCCA_Ternong_Terno.jpg'
const catriona2 = WM + 'thumb/1/19/Catriona_Gray_-_NCCA_Ternong_Terno_02.jpg/960px-Catriona_Gray_-_NCCA_Ternong_Terno_02.jpg'
const catriona3 = WM + 'thumb/0/0e/Catriona_Gray_-_NCCA_Ternong_Terno_03.jpg/960px-Catriona_Gray_-_NCCA_Ternong_Terno_03.jpg'
const catriona4 = WM + 'thumb/a/a9/Catriona_Gray_-_NCCA_Ternong_Terno_04_%28cropped%29.jpg/960px-Catriona_Gray_-_NCCA_Ternong_Terno_04_%28cropped%29.jpg'
const pia = WM + '3/35/Miss_Universe_2015_Pia_Wurtzbach_waves_to_the_Malacanang_Press.jpg'
const barbie = WM + 'thumb/a/ad/Barbie_Imperial_-_Magayon_Festival_2024_Grand_Santacruzan.jpg/960px-Barbie_Imperial_-_Magayon_Festival_2024_Grand_Santacruzan.jpg'
const richmondW = WM + 'thumb/3/38/2015_Richmond_Filipino_Festival_%2820229861080%29_-_cropped.jpg/960px-2015_Richmond_Filipino_Festival_%2820229861080%29_-_cropped.jpg'
const tnalak = WM + 'thumb/5/59/The_Colors_of_T%27nalak_by_Louie_D.Photography_-_3763039917.jpg/960px-The_Colors_of_T%27nalak_by_Louie_D.Photography_-_3763039917.jpg'
const inabel = WM + 'thumb/4/46/Inabel_Baro%27t_saya8.jpg/960px-Inabel_Baro%27t_saya8.jpg'
const mestizaMuseum = WM + 'thumb/0/09/Mestiza_dress%2C_Philippines%2C_1930s%2C_Honolulu_Museum_of_Art_accession_5750.1.JPG/960px-Mestiza_dress%2C_Philippines%2C_1930s%2C_Honolulu_Museum_of_Art_accession_5750.1.JPG'
const womanCostume = WM + 'thumb/d/dc/Woman%27s_costume_from_the_Philippines%2C_Honolulu_Museum_of_Art_5752.1.JPG/960px-Woman%27s_costume_from_the_Philippines%2C_Honolulu_Museum_of_Art_5752.1.JPG'
const folklore = WM + 'thumb/2/2b/Folklore_of_the_popular_heritage_of_the_State_of_the_Philippines_08_%28cropped%29.jpg/960px-Folklore_of_the_popular_heritage_of_the_State_of_the_Philippines_08_%28cropped%29.jpg'
// Men · Barong Tagalog
const richmond1 = WM + 'thumb/b/b4/2015_Richmond_Filipino_Festival_%2819795219294%29.jpg/960px-2015_Richmond_Filipino_Festival_%2819795219294%29.jpg'
const richmond2 = WM + 'thumb/b/b2/2015_Richmond_Filipino_Festival_%2819795304054%29.jpg/960px-2015_Richmond_Filipino_Festival_%2819795304054%29.jpg'
const richmond3 = WM + 'thumb/9/93/2015_Richmond_Filipino_Festival_%2819795342504%29.jpg/960px-2015_Richmond_Filipino_Festival_%2819795342504%29.jpg'
const richmond4 = WM + 'thumb/a/a5/2015_Richmond_Filipino_Festival_%2819795353914%29.jpg/960px-2015_Richmond_Filipino_Festival_%2819795353914%29.jpg'
const barongMuseum1 = WM + 'thumb/8/81/Man%27s_shirt_from_Luzon%2C_pineapple_fiber%2C_plain_weave%2C_embroidery%2C_Honolulu_Museum_of_Art.JPG/960px-Man%27s_shirt_from_Luzon%2C_pineapple_fiber%2C_plain_weave%2C_embroidery%2C_Honolulu_Museum_of_Art.JPG'
const barongMuseum2 = WM + 'thumb/4/4f/Man%27s_shirt_from_Luzon%2C_late_19th_century%2C_pina%2C_silk%2C_plain_weave%2C_embroidery%2C_Honolulu_Museum_of_Art%2C_accession_724.JPG/960px-Man%27s_shirt_from_Luzon%2C_late_19th_century%2C_pina%2C_silk%2C_plain_weave%2C_embroidery%2C_Honolulu_Museum_of_Art%2C_accession_724.JPG'
const barongMuseum3 = WM + 'thumb/b/b5/Man%27s_Shirt_%28Philippines%29%2C_1890%E2%80%931900_%28CH_18571417%29.jpg/960px-Man%27s_Shirt_%28Philippines%29%2C_1890%E2%80%931900_%28CH_18571417%29.jpg'

export const heroPhoto = catriona3

// Elegant branded placeholder shown if a remote photo fails to load
export const imgFallback =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'>
      <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#7a0f1e'/><stop offset='1' stop-color='#3a0d18'/></linearGradient></defs>
      <rect width='300' height='400' fill='url(#g)'/>
      <text x='150' y='195' fill='#f2c14e' font-family='Georgia,serif' font-size='30' font-weight='bold' text-anchor='middle'>Habi</text>
      <text x='150' y='230' fill='#f6e7c6' font-family='Georgia,serif' font-size='30' font-weight='bold' text-anchor='middle'>Pinas</text>
      <text x='150' y='262' fill='#e7be98' font-family='sans-serif' font-size='12' text-anchor='middle'>Filipiniana &amp; Barong</text>
    </svg>`
  )

export const onImgError = (e) => {
  if (e.target.dataset.fb) return
  e.target.dataset.fb = '1'
  e.target.src = imgFallback
}

// ---------------------------------------------------------------------------
//  Catalog
// ---------------------------------------------------------------------------
export const products = [
  // ---- Women · Filipiniana ----
  { _id: 'fp01', name: 'Sampaguita Butterfly-Sleeve Terno Gown', description: 'A regal hand-draped terno with stiffened butterfly sleeves and sampaguita-inspired embroidery. Tailored from luxe satin for fiestas, weddings, and Buwan ng Wika galas.', price: 5890, image: [catriona1, catriona2, catriona4], category: 'Women', subCategory: 'Filipiniana', sizes: ['XS', 'S', 'M', 'L', 'XL'], date: 1716634345448, bestseller: true },
  { _id: 'fp02', name: 'Esmeralda Beaded Mestiza Terno', description: 'A pageant-worthy mestiza terno with a fitted bodice and flowing skirt. Beaded accents catch the light beautifully under any chandelier.', price: 6290, image: [pia], category: 'Women', subCategory: 'Filipiniana', sizes: ['S', 'M', 'L', 'XL'], date: 1716634345449, bestseller: true },
  { _id: 'fp03', name: 'Dalisay Grand Santacruzan Gown', description: 'A show-stopping Santacruzan-style Filipiniana with regal detailing. Timeless elegance for debuts, processions, and formal cultural events.', price: 4990, image: [barbie], category: 'Women', subCategory: 'Filipiniana', sizes: ['XS', 'S', 'M', 'L'], date: 1716634345450, bestseller: true },
  { _id: 'fp04', name: 'Marikit Festival Filipiniana', description: 'A radiant festival Filipiniana with soft butterfly sleeves. Lightweight and breathable for tropical celebrations and parades.', price: 5290, image: [richmondW], category: 'Women', subCategory: 'Filipiniana', sizes: ['XS', 'S', 'M', 'L', 'XL'], date: 1716634345451, bestseller: false },
  { _id: 'fp05', name: 'Liwayway Ceremonial Terno', description: 'A ceremonial terno hand-finished with intricate embroidery and a sweeping silhouette. Heirloom craftsmanship for your most important day.', price: 8490, image: [catriona4, catriona1], category: 'Women', subCategory: 'Filipiniana', sizes: ['S', 'M', 'L'], date: 1716634345452, bestseller: true },
  { _id: 'fp06', name: 'Amihan T’nalak Heritage Gown', description: 'A vibrant heritage gown inspired by southern T’nalak weaves, finished with golden floral embroidery and a flared hem.', price: 6790, image: [tnalak], category: 'Women', subCategory: 'Filipiniana', sizes: ['S', 'M', 'L', 'XL'], date: 1716634345453, bestseller: false },
  { _id: 'fp07', name: 'Tala Handwoven Baro’t Saya', description: 'A handwoven inabel baro’t saya — the classic everyday Filipiniana. Breezy, comfortable, and beautifully traditional.', price: 4690, image: [inabel], category: 'Women', subCategory: 'Baro\'t Saya', sizes: ['XS', 'S', 'M', 'L'], date: 1716634345454, bestseller: false },
  { _id: 'fp08', name: 'Sinta Vintage Mestiza Dress', description: 'A vintage-cut mestiza dress with classic terno lines, perfect for heritage shoots and provincial fiestas.', price: 3990, image: [mestizaMuseum], category: 'Women', subCategory: 'Filipiniana', sizes: ['S', 'M', 'L', 'XL'], date: 1716634345455, bestseller: false },

  // ---- Men · Barong Tagalog ----
  { _id: 'bp01', name: 'Ginoo Classic Barong Tagalog', description: 'The quintessential cream Barong with embroidered pechera. Sheer, lightweight, and dignified for any formal occasion.', price: 4290, image: [richmond1], category: 'Men', subCategory: 'Barong', sizes: ['S', 'M', 'L', 'XL', 'XXL'], date: 1716634345456, bestseller: true },
  { _id: 'bp02', name: 'Lakan Festival Barong', description: 'A crisp festival Barong with embroidery down the placket. A celebration staple for the modern Filipino gentleman.', price: 3890, image: [richmond2], category: 'Men', subCategory: 'Barong', sizes: ['S', 'M', 'L', 'XL', 'XXL'], date: 1716634345457, bestseller: true },
  { _id: 'bp03', name: 'Datu Embroidered Barong', description: 'A handsome Barong with calado openwork and a tonal floral panel. A refined take on tradition for garden ceremonies.', price: 3490, image: [richmond3], category: 'Men', subCategory: 'Barong', sizes: ['M', 'L', 'XL', 'XXL'], date: 1716634345458, bestseller: false },
  { _id: 'bp04', name: 'Bayani Linen Barong', description: 'A soft linen Barong, cool and crisp for tropical weddings. Pairs effortlessly with white slacks.', price: 2990, image: [richmond4], category: 'Men', subCategory: 'Barong', sizes: ['S', 'M', 'L', 'XL'], date: 1716634345459, bestseller: true },
  { _id: 'bp05', name: 'Haring Piña-Silk Barong', description: 'A statement piña-silk Barong with hand embroidery. Stand out at galas while honoring heritage.', price: 4690, image: [barongMuseum2], category: 'Men', subCategory: 'Barong', sizes: ['M', 'L', 'XL', 'XXL'], date: 1716634345460, bestseller: false },
  { _id: 'bp06', name: 'Tagapag-ligtas Heritage Barong', description: 'A heritage Barong with a refined embroidered chest panel. Quietly luxurious and timeless.', price: 3690, image: [barongMuseum3], category: 'Men', subCategory: 'Barong', sizes: ['S', 'M', 'L', 'XL', 'XXL'], date: 1716634345461, bestseller: false },

  // ---- Kids ----
  { _id: 'kp01', name: 'Munting Reyna Kids Filipiniana', description: 'A pint-sized Filipiniana for little stars at recitals and family fiestas. Soft-lined for all-day comfort.', price: 1490, image: [womanCostume], category: 'Kids', subCategory: 'Filipiniana', sizes: ['2T', '4T', '6', '8'], date: 1716634345462, bestseller: false },
  { _id: 'kp02', name: 'Batang Bayani Kids Barong', description: 'A handsome mini-Barong with embroidered placket for ring bearers and Buwan ng Wika programs.', price: 1290, image: [barongMuseum1], category: 'Kids', subCategory: 'Barong', sizes: ['2T', '4T', '6', '8'], date: 1716634345463, bestseller: false },
  { _id: 'kp03', name: 'Sinag Kids Heritage Terno', description: 'A cheerful heritage terno for young performers, with golden floral accents and a twirl-ready skirt.', price: 1390, image: [folklore], category: 'Kids', subCategory: 'Filipiniana', sizes: ['2T', '4T', '6', '8'], date: 1716634345464, bestseller: false },
]

export const assets = {
  logo,
  heroPhoto,
  cart_icon,
  dropdown_icon,
  exchange_icon,
  profile_icon,
  quality_icon,
  search_icon,
  star_dull_icon,
  star_icon,
  bin_icon,
  support_img,
  menu_icon,
  cross_icon,
}
