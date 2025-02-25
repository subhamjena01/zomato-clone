'use client';

import { useEffect, useState } from 'react';
import { useCartStore } from '@/store/cartStore';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { items, getTotalPrice } = useCartStore();
  const router = useRouter();

  // ✅ SAFER CHECK INSTEAD OF `useState`
  if (typeof window === 'undefined') {
    return <div className="text-center text-xl font-bold">Loading...</div>;
  }

  // ✅ Redirect if cart is empty
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty.</h1>
        <button
          onClick={() => router.push('/')}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-500">{item.quantity} x ₹{item.price}</p>
            </div>
            <span className="text-lg font-bold">₹{item.quantity * item.price}</span>
          </div>
        ))}

        <div className="border-t pt-4 mt-4">
          <h2 className="text-xl font-bold">Total: ₹{getTotalPrice()}</h2>
        </div>

        <button
          onClick={() => alert('Payment processing...')}
          className="w-full bg-green-500 text-white py-3 mt-6 rounded-lg hover:bg-green-600 transition-colors"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}
