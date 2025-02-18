'use client';

import { useParams } from 'next/navigation';
import { Plus, Check, Info, Clock, MapPin, Calendar, Lock, ChevronDown, Bookmark, Forward} from 'lucide-react'; // Import additional icons
import { useCartStore } from '@/store/cartStore';
import { RESTAURANTS } from '@/data/restaurants';

const findRestaurantById = (id: string) => {
  return RESTAURANTS.find(restaurant => restaurant.id === id) || RESTAURANTS[0];
};

export default function RestaurantPage() {
  const params = useParams();
  const { id } = params;
  const restaurant = findRestaurantById(id as string);
  const { addItem, items } = useCartStore();

  const isItemInCart = (itemId: string) => {
    return items.some(cartItem => cartItem.id === itemId);
  };

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      restaurant: restaurant.name,
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Restaurant Header */}
      <div className="mb-4 flex justify-between items-start">
  {/* Left Section - 80% */}
  <div className="w-4/5">
    <div className="flex items-center gap-2">
      <h1 className="mb-2 text-3xl font-bold">{restaurant.name}</h1>

      {/* Info Icon with Tooltip */}
      <div className="group relative inline-block">
        <Info className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700" />
        <div className="absolute hidden group-hover:block bg-black text-white text-sm px-2 py-1 rounded-lg -mt-8 ml-2">
          This is a dummy tooltip text.
        </div>
      </div>
    </div>

    {/* Additional Info */}
    <div className="flex items-center text-sm text-gray-600 gap-2 mt-1">
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

    {/* Schedule for Later */}
    <div className="flex items-center gap-1 text-sm text-gray-600 mt-2">
      <Calendar className="h-5 w-5 text-gray-500" />
      <span>Schedule for later</span>
    </div>
  </div>

  {/* Right Section - 20% */}
  <div className="w-1/5 flex flex-col justify-end">
    <div className="w-5/6 bg-green-800 text-white px-2 py-1 rounded text-xl">
      {restaurant.rating} ★
    </div>
    <div className= "text-sm w-full">
      <p className="underline underline-offset-8 decoration-dotted pt-2">20K ratings</p>
    </div>
    
  </div>
  
</div>
<div className="mb-4 flex items-center gap-4">
  {/* 3D Star + Best in Burger */}
  <div className="flex items-center bg-blue-50 text-black px-4 py-1 rounded-full text-s">
    <img src="/star.svg" // Replace with your actual image path
      alt="3D Star"
      className="h-4 w-4 mr-2"
    />
    Best in Burger
  </div>

  {/* Frequently Reordered */}
  <div className="flex items-center bg-blue-50 text-black px-4 py-1 rounded text-s  rounded-full">
    <Check className="h-4 w-4 mr-2" />
    Frequently Reordered
  </div>
</div>

<div className="mb-4 bg-stone-200 h-px w-auto"></div>

<div className='mb-4 flex item-center justify-between'>
  <div className="flex items-center text-black px-4 text-s">
    <Lock className="h-4 w-4 mr-2" />
    Free delivery
  </div>
  <div className="flex items-center text-black px-4 text-s">
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

<div>
    <div className="mb-4 flex justify-between justify-items-center">
        <div className="text-2xl font-semibold">Recommended for you</div>
        <div><ChevronDown className="h-8 w-8 ml-2 text-gray-500"/></div>
    </div>
    <div className="mb-4 flex justify-between justify-items-center w-full gap-8">
      <div className="w-1/2">
        <div className="flex items-center gap-1 mb-2">
          <Clock className="h-5 w-5 text-gray-500" />
          <span className="text-xs text-orange-600 bg-orange-100 p-1 rounded">Best Seller</span>
        </div>
        <div className="text-xl mb-2 font-semibold">
          Non Veg Club Sandwich
        </div>
        <div className="text-base mb-2 font-semibold">
          ₹238
        </div>
        <div className="text-l mb-2 font-medium text-neutral-400">
          grilled Chicken, Chicken Ham, Fried egg, Cheese, Tomato & more...
        </div>
        <div className="flex gap-2">
          <Bookmark className="h-12 w-12 text-gray-600 rounded-full border border-neutral-300 p-2" />
          <Forward className="h-12 w-12 text-gray-600 rounded-full border border-neutral-300 p-2" />
          
        </div>
      </div>
    <div className="w-1/2">
      <div className="h-50">
        <img src="/Rotisserie-Chicken-Sandwich.jpg" className="rounded-2xl "/>
        <div className="text-2xl font-bold py-3 w-5/6 mx-auto -my-10 relative bg-pink-100 text-center rounded-lg border border-pink-500">
        Add
        <div className="absolute text-l font-thin top-px right-2">+</div>
      </div>
      <div className="text-l mb-2 font-medium text-neutral-400 relative my-10 text-center">customisable</div>
      </div>
      
    </div>
  </div>

</div>






      {/* Menu Section */}
      {/* <div className="space-y-6">
        <h2 className="text-xl font-semibold">Menu</h2>
        <div className="grid gap-4">
          {restaurant.menu.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-start p-4 border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{item.name}</h3>
                  {item.veg ? (
                    <span className="text-green-600 text-sm border border-green-600 px-1.5 rounded">
                      Veg
                    </span>
                  ) : (
                    <span className="text-red-600 text-sm border border-red-600 px-1.5 rounded">
                      Non-veg
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                <p className="text-gray-900 font-medium mt-2">₹{item.price}</p>
              </div>
              <button
                onClick={() => handleAddToCart(item)}
                className={`ml-4 p-2 rounded-full transition-colors ${
                  isItemInCart(item.id)
                    ? 'text-white bg-green-600 hover:bg-green-700'
                    : 'text-green-600 hover:bg-green-50'
                }`}
              >
                {isItemInCart(item.id) ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <Plus className="h-5 w-5" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
