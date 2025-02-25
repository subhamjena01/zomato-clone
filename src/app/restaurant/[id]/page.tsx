'use client';

import { useParams } from 'next/navigation';
import { Info, Clock, MapPin, Lock, ChevronDown, Check } from 'lucide-react';
import { RESTAURANTS } from '@/data/restaurants';
import QuantityCounter from '@/app/QuantityCounter';

const findRestaurantById = (id: string) => {
  return RESTAURANTS.find(restaurant => restaurant.id === id) || null;
};

export default function RestaurantPage() {
  const params = useParams<{ id: string }>(); 
  const { id } = params;
  const restaurant = findRestaurantById(id as string);

  if (!restaurant) {
    return <div className="text-center text-xl font-bold">Restaurant not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Restaurant Header */}
      <div className="mb-4 flex justify-between items-start">
        <div className="w-4/5">
          <div className="flex items-center gap-2">
            <h1 className="mb-2 text-3xl font-bold">{restaurant.name}</h1>
            <div className="group relative inline-block">
              <Info className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700" />
              <div className="absolute hidden group-hover:block bg-black text-white text-sm px-2 py-1 rounded-lg -mt-8 ml-2">
                This is a dummy tooltip text.
              </div>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-600 gap-2 mt-1 dark:text-neutral-300">
            <div className="flex items-center gap-1">
              <Clock className="h-5 w-5 text-gray-500" />
              <span>32 mins</span>
            </div>
            <span className="h-4 w-px bg-gray-400" />
            <div className="flex items-center gap-1">
              <span>5.2 km</span>
            </div>
            <span className="h-4 w-px bg-gray-400" />
            <div className="flex items-center gap-1">
              <MapPin className="h-5 w-5 text-gray-500" />
              <span>Electronics City</span>
            </div>
          </div>
        </div>

        <div className="w-1/5 flex flex-col justify-end">
          <div className="w-5/6 bg-green-800 text-white px-2 py-1 rounded text-xl">
            {restaurant.rating} ★
          </div>
          <div className="text-sm w-full">
            <p className="underline underline-offset-8 decoration-dotted pt-2">20K ratings</p>
          </div>
        </div>
      </div>

      <div className="mb-4 bg-stone-200 h-px w-auto"></div>

      <div className="mb-4 flex item-center justify-between">
        <div className="flex items-center text-black px-4 text-s dark:text-neutral-300">
          <Lock className="h-4 w-4 mr-2" />
          Free delivery
        </div>
        <div className="flex items-center text-black px-4 text-s dark:text-neutral-300">
          3 Offer
        </div>
      </div>
      <div className="mb-4 bg-stone-200 h-2 w-auto"></div>

      <div className="mb-4 flex flex-row gap-4 overflow-scroll w-full max-w-full" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex items-center bg-blue-50 text-black px-4 py-1 text-sm rounded-full whitespace-nowrap">
          <Check className="h-4 w-4 mr-2" />
          Filter
        </div>
        <div className="flex items-center bg-blue-50 text-black px-4 py-1 text-sm rounded-full whitespace-nowrap">
          <Check className="h-4 w-4 mr-2" />
          Veg
        </div>
        <div className="flex items-center bg-blue-50 text-black px-4 py-1 text-sm rounded-full whitespace-nowrap">
          <Check className="h-4 w-4 mr-2" />
          Non veg
        </div>
        <div className="flex items-center bg-blue-50 text-black px-4 py-1 text-sm rounded-full whitespace-nowrap">
          <Check className="h-4 w-4 mr-2" />
          Best Rated
        </div>
        <div className="flex items-center bg-blue-50 text-black px-4 py-1 text-sm rounded-full whitespace-nowrap">
          <Check className="h-4 w-4 mr-2" />
          Near by
        </div>
      </div>
      <div className="mb-4 bg-stone-200 h-px w-auto"></div>

      {/* Offers Section */}
      <div className="mb-4 flex item-center justify-between">
        <div className="flex items-center text-black px-4 text-s dark:text-neutral-300">
          <Lock className="h-4 w-4 mr-2" />
          Free delivery
        </div>
        <div className="flex items-center text-black px-4 text-s dark:text-neutral-300">
          3 Offer
        </div>
      </div>
      <div className="mb-4 bg-stone-200 h-2 w-auto"></div>

      {/* Filters Section */}
      <div className="mb-4 flex flex-row gap-4 overflow-scroll w-full max-w-full" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {["Filter", "Veg", "Non veg", "Best Rated", "Near by"].map((filter) => (
          <div key={filter} className="flex items-center bg-blue-50 text-black px-4 py-1 text-sm rounded-full whitespace-nowrap">
            <Check className="h-4 w-4 mr-2" />
            {filter}
          </div>
        ))}
      </div>
      <div className="mb-4 bg-stone-200 h-px w-auto"></div>

      {/* Recommended Section */}
      <div>
        <div className="mb-4 flex justify-between justify-items-center">
          <div className="text-2xl font-semibold">Recommended for you</div>
          <ChevronDown className="h-8 w-8 ml-2 text-gray-500" />
        </div>

        {/* Dynamic Menu Items */}
        {restaurant.menu.map((item) => (
          <div key={item.id} className="mb-6 flex justify-between">
            {/* Item Details */}
            <div className="w-1/2">
              <div className="text-xl mb-2 font-semibold">{item.name}</div>
              <div className="text-base mb-2 font-semibold">₹{item.price}</div>
              <div className="text-l mb-2 font-medium text-neutral-400 dark:text-neutral-300">
                {item.description}
              </div>
            </div>

            {/* Item Image & Quantity Counter */}
            <div className="w-1/2 flex flex-col items-center">
              <img src={item.image} alt={item.name} className="rounded-2xl w-full h-32 object-cover mb-2" />
              
              {/* Quantity Counter with Correct Props */}
              <QuantityCounter 
                itemId={item.id}
                itemName={item.name}
                itemPrice={item.price}
                restaurant={restaurant.name}
              />
              
              <div className="text-l mb-2 font-medium text-neutral-400 relative my-10 text-center dark:text-neutral-300">
                Customisable
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
