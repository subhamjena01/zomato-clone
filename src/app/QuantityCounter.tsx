'use client';

import { useCartStore } from '@/store/cartStore';

interface QuantityCounterProps {
  itemId: string;
  itemName: string;
  itemPrice: number;
  restaurant: string;
}

export default function QuantityCounter({ itemId, itemName, itemPrice, restaurant }: QuantityCounterProps) {
  const { items, addItem, updateQuantity } = useCartStore();

  const item = items.find((i) => i.id === itemId);
  const quantity = item ? item.quantity : 0;

  const handleIncrement = () => {
    if (!item) {
      console.log('Adding new item:', { id: itemId, name: itemName, price: itemPrice, restaurant, quantity: 1 });
      addItem({ id: itemId, name: itemName, price: itemPrice, restaurant });
    } else {
      updateQuantity(itemId, quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      updateQuantity(itemId, quantity - 1);
    }
  };

  return (
    <div className="flex justify-between items-center text-2xl font-bold py-3 w-5/6 mx-auto -my-10 relative bg-pink-100 text-center rounded-lg border border-pink-500 dark:text-pink-500 p-2">
      <button onClick={handleDecrement} className="text-l font-thin cursor-pointer hover:bg-pink-200 rounded-full w-8 h-8 flex items-center justify-center">-</button>
      <span>{quantity === 0 ? 'Add' : quantity}</span>
      <button onClick={handleIncrement} className="text-l font-thin cursor-pointer hover:bg-pink-200 rounded-full w-8 h-8 flex items-center justify-center">+</button>
    </div>
  );
}
