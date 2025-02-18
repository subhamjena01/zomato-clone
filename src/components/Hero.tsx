import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 h-[500px]">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="/images/hero-bg.jpg"
          alt="Food background"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Discover the best food & drinks
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Order food from favourite restaurants near you.
        </p>
        <div className="mt-10 max-w-xl mx-auto">
          <div className="flex rounded-md shadow-sm">
            <input
              type="text"
              className="flex-1 min-w-0 block w-full px-4 py-4 rounded-l-md text-gray-900 focus:ring-red-500 focus:border-red-500 text-lg"
              placeholder="Search for restaurants or cuisines"
            />
            <button className="inline-flex items-center px-6 py-4 border border-transparent text-lg font-medium rounded-r-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;