'use client';

import { Trash2 } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import QuantityCounter from '@/app/QuantityCounter'; // Reuse the QuantityCounter component

export default function CartPage() {
  const { items, removeItem, clearCart } = useCartStore();

  // Calculate subtotal, delivery fee, and total
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = items.length > 0 ? 50 : 0; // No delivery fee if cart is empty
  const total = subtotal + deliveryFee;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Your cart is empty 😔</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Item Details */}
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.restaurant}</p>
                  <p className="font-medium mt-1">₹{item.price}</p>
                </div>

                {/* Quantity Counter and Remove Button */}
                <div className="flex items-center gap-4">
                  {/* Use QuantityCounter with correct quantity */}
                  <QuantityCounter itemId={item.id} />

                  {/* Remove Item Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}

            {/* Clear Cart Button */}
            <button
              onClick={clearCart}
              className="w-full mt-6 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>
            </div>
            <button
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              onClick={() => alert('Checkout functionality coming soon!')}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
