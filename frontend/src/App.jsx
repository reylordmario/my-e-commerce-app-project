import React from 'react';
import { Routes, Route } from 'react-router-dom';

// ===================================================================
// 1. Component Imports
//    - Assumes all components EXCEPT Collection use 'export default' (standard React practice)
//    - Collection is imported using NAMED IMPORT {} as indicated by your previous error fixes.
// ===================================================================
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Collection from './pages/Collection.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Product from './pages/Product.jsx';  
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import Orders from './pages/Orders.jsx';
import PlaceOrder from './pages/PlaceOrder.jsx';
import Footer from './components/Footer.jsx';



// ===================================================================
// 3. Main App Component
// ===================================================================
const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Navbar is outside Routes so it shows on every page */}
      <Navbar />

      <main className='flex-grow'>
        {/* Routing Setup */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/order' element={<PlaceOrder />} />
          
          {/* Default catch-all route for 404s */}
          <Route path='*' element={<div className='p-10 text-center text-2xl'>404 | Page Not Found</div>} />
        </Routes>
        <Footer />
      </main>

       
    </div>
  );
};

export default App;