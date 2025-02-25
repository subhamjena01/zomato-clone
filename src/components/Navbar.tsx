import Link from 'next/link';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ThemeSwitch from './ThemeSwitch'; // Import the ThemeSwitch component
import Cart from './Cart'; // Import the new Cart component

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side icon */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <ArrowBackIosNewIcon className="text-gray-800 dark:text-gray-300" fontSize="large" />
            </Link>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Link href="/notifications">
              <GroupAddIcon className="text-gray-800 dark:text-gray-300 hover:dark:text-gray-200 transition-colors" fontSize="large" />
            </Link>
            <Link href="/cart">
              <BookmarkBorderIcon className="text-gray-800 dark:text-gray-300 hover:dark:text-gray-200 transition-colors" fontSize="large" />
            </Link>
            <Link href="/profile">
              <MoreVertIcon className="text-gray-800 dark:text-gray-300 hover:dark:text-gray-200 transition-colors" fontSize="large" />
            </Link>
            {/* Cart component */}
            <Cart />
            {/* Theme switch button */}
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
