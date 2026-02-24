import React from 'react';

// Define the component
const Cart = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Your Shopping Cart</h1>
      
      {/* Placeholder for Cart Items Table/List */}
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <p className="text-center text-gray-600 text-xl py-10">
          Your cart is currently empty. Start shopping to add items!
        </p>
        
        {/* Placeholder for total/checkout button */}
        <div className="flex justify-end mt-4">
          <button
            className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
            onClick={() => alert('Proceeding to checkout (placeholder)')}
          >
            Proceed to Checkout ($0.00)
          </button>
        </div>
      </div>
    </div>
  );
};

// CRITICAL FIX: This line provides the 'default' export that App.jsx is looking for.
export default Cart;