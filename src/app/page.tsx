import React from 'react';
import Hero from '@/components/Hero';
import RestaurantCard from '@/components/RestaurantCard';
import { RESTAURANTS } from '@/data/restaurants';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Restaurants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {RESTAURANTS.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              name={restaurant.name}
              cuisine={restaurant.cuisine}
              rating={restaurant.rating}
              image={restaurant.image} // ✅ Directly using the image from data
              deliveryTime="30-40 min"
              priceRange="₹200-400"
            />
          ))}
        </div>
      </div>
    </main>
  );
}


