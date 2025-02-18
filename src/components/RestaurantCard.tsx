import React from 'react';
import Link from 'next/link';

interface RestaurantCardProps {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  priceRange: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  id,
  name,
  image,
  cuisine,
  rating,
  deliveryTime,
  priceRange,
}) => {
  return (
    <Link href={`/restaurant/${id}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105">
        <div className="relative pb-[60%]">
          <img
            src={image}
            alt={name}
            className="absolute h-full w-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{cuisine}</p>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center">
              <span className="inline-flex items-center px-2 py-1 rounded-lg bg-green-100 text-green-700">
                <span className="font-medium">{rating}</span>
                <span className="ml-1">★</span>
              </span>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-sm text-gray-600">{deliveryTime}</span>
            </div>
            <span className="text-sm text-gray-600">{priceRange}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;