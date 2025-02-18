import Link from 'next/link';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side icon */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <ArrowBackIosNewIcon className="text-black-500" fontSize="large" />
            </Link>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Link href="/notifications" className="text-black-500 hover:text-gray-700">
              <GroupAddIcon fontSize="large" />
            </Link>
            <Link href="/cart" className="text-black-500 hover:text-gray-700">
              <BookmarkBorderIcon fontSize="large" />
            </Link>
            <Link href="/profile" className="text-black-500 hover:text-gray-700">
              <MoreVertIcon fontSize="large" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;