'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartStore } from '@/store/cartStore';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, getTotalItems } = useCartStore();
  const itemCount = getTotalItems();
  const router = useRouter();
  const cartRef = useRef<HTMLDivElement>(null); // ✅ Reference for detecting outside clicks

  // ✅ Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // ✅ Close cart & redirect to checkout
  const handleCheckout = () => {
    setIsOpen(false); // Close popup
    router.push('/checkout'); // Redirect
  };

  return (
    <div className="relative" ref={cartRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-800 dark:text-gray-300 hover:dark:text-gray-200 transition-colors"
      >
        <ShoppingCartIcon fontSize="large" />
        {itemCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 transform translate-x-1/2 -translate-y-1/2">
            {itemCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">Your Cart</h3>

            {items.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">Your cart is empty.</p>
            ) : (
              <ul>
                {items.map((item) => (
                  <li key={item.id} className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {item.quantity} x ₹{item.price}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={handleCheckout} // ✅ Close popup + Redirect
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
