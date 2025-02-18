'use client';

import { useState } from 'react';
import { useCartStore } from '@/store/cartStore';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const menuItems = [
  {
    id: '1',
    name: 'Butter Chicken',
    description: 'Creamy, rich curry with tender chicken pieces',
    price: 320,
    restaurant: 'Punjab Grill',
    category: 'Main Course',
    image: 'https://source.unsplash.com/800x600/?butter-chicken'
  },
  {
    id: '2',
    name: 'Paneer Tikka',
    description: 'Grilled cottage cheese with spices',
    price: 280,
    restaurant: 'Punjab Grill',
    category: 'Starters',
    image: 'https://source.unsplash.com/800x600/?paneer-tikka'
  },
  {
    id: '3',
    name: 'Dal Makhani',
    description: 'Creamy black lentils cooked overnight',
    price: 250,
    restaurant: 'Punjab Grill',
    category: 'Main Course',
    image: 'https://source.unsplash.com/800x600/?dal-makhani'
  },
  {
    id: '4',
    name: 'Naan',
    description: 'Freshly baked Indian bread',
    price: 40,
    restaurant: 'Punjab Grill',
    category: 'Breads',
    image: 'https://source.unsplash.com/800x600/?naan'
  }
];

export default function RestaurantPage({ params }: { params: { id: string } }) {
  const { addItem, items } = useCartStore();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(menuItems.map(item => item.category))];
  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Punjab Grill</h1>
        <Link href="/cart" className="relative">
          <ShoppingCart className="w-6 h-6" />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartItemCount}
            </span>
          )}
        </Link>
      </div>

      {/* Category Filter */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${selectedCategory === category
              ? 'bg-green-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">₹{item.price}</span>
                <button
                  onClick={() => addItem(item)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}