export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  veg: boolean;
  image: string;
};

export type Restaurant = {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  image: string; // ✅ Added image property
  menu: MenuItem[];
};

export const RESTAURANTS: Restaurant[] = [
  {
    id: '1',
    name: 'The Tasty Corner',
    cuisine: 'North Indian',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4', // ✅ Added image
    menu: [
      {
        id: '1',
        name: 'Butter Chicken',
        description: 'Creamy, rich and mildly spiced chicken curry',
        price: 320,
        category: 'Main Course',
        veg: false,
        image: '/margherita-pizza-22-2.jpg' // ✅ Added image
      },
      {
        id: '2',
        name: 'Paneer Tikka Masala',
        description: 'Grilled cottage cheese in spiced tomato gravy',
        price: 280,
        category: 'Main Course',
        veg: true,
        image: '/margherita-pizza-22-2.jpg' // ✅ Added image
      },
      {
        id: '3',
        name: 'Dal Makhani',
        description: 'Creamy black lentils cooked overnight',
        price: 220,
        category: 'Main Course',
        veg: true,
        image: '/margherita-pizza-22-2.jpg' // ✅ Added image
      }
    ]
  },
  {
    id: '2',
    name: 'Pizza Paradise',
    cuisine: 'Italian',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38', // ✅ Added image
    menu: [
      {
        id: '4',
        name: 'Margherita Pizza',
        description: 'Classic pizza with tomato sauce, mozzarella, and basil',
        price: 250,
        category: 'Pizza',
        veg: true,
        image: '/margherita-pizza-22-2.jpg' // ✅ Added image
      },
      {
        id: '5',
        name: 'Pepperoni Pizza',
        description: 'Pizza topped with spicy pepperoni and cheese',
        price: 350,
        category: 'Pizza',
        veg: false,
        image: '/margherita-pizza-22-2.jpg' // ✅ Added image
      },
      {
        id: '6',
        name: 'Pasta Alfredo',
        description: 'Creamy pasta with parmesan cheese sauce',
        price: 280,
        category: 'Pasta',
        veg: true,
        image: '/margherita-pizza-22-2.jpg' // ✅ Added image
      }
    ]
  },
  {
    id: '3',
    name: 'Wok & Roll',
    cuisine: 'Chinese',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add', // ✅ Added image
    menu: [
      {
        id: '7',
        name: 'Kung Pao Chicken',
        description: 'Spicy diced chicken with peanuts and vegetables',
        price: 290,
        category: 'Main Course',
        veg: false,
        image: '/margherita-pizza-22-2.jpg' // ✅ Added image
      },
      {
        id: '8',
        name: 'Veg Hakka Noodles',
        description: 'Stir-fried noodles with vegetables',
        price: 220,
        category: 'Noodles',
        veg: true,
        image: '/margherita-pizza-22-2.jpg' // ✅ Added image
      },
      {
        id: '9',
        name: 'Dim Sum Basket',
        description: 'Assorted steamed dumplings',
        price: 260,
        category: 'Starters',
        veg: true,
        image: '/margherita-pizza-22-2.jpg' // ✅ Added image
      }
    ]
  }
];
