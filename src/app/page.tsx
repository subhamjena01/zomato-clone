import Image from "next/image";

import React from 'react';
import Hero from '@/components/Hero';
import RestaurantCard from '@/components/RestaurantCard';

const mockRestaurants = [
  {
    id: '1',
    name: 'The Spice Garden',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    cuisine: 'Indian, Chinese, Thai',
    rating: 4.5,
    deliveryTime: '30-40 min',
    priceRange: '₹200-400'
  },
  {
    id: '2',
    name: 'Pizza Paradise',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
    cuisine: 'Italian, Fast Food',
    rating: 4.3,
    deliveryTime: '25-35 min',
    priceRange: '₹150-300'
  },
  {
    id: '3',
    name: 'Burger Boulevard',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add',
    cuisine: 'American, Fast Food',
    rating: 4.2,
    deliveryTime: '20-30 min',
    priceRange: '₹100-250'
  },
  {
    id: '4',
    name: 'Sushi Station',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
    cuisine: 'Japanese, Asian',
    rating: 4.7,
    deliveryTime: '35-45 min',
    priceRange: '₹400-800'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Restaurants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </div>
      </div>
    </main>
  );
}
