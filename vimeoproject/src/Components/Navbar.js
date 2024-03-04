
import { Link } from 'react-router-dom';
import { FaRegBell } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
const Navbar = ({setSearch}) => {
 

  return (
    <nav className="bg-white shadow shadow-gray-900 p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-black  mr-4 font-bold text-2xl">
            Vimeo
          </Link>
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded  p-2 px-16 rounded-full border border-2 border-gray-400 text-black"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <button className="text-black border border-1 border-black font-bold px-4 p-2 rounded-md">
              Upgrade
            </button>
          </div>
          <div className="mr-4">
            <button className="text-white font-bold bg-blue-400 p-2 px-4  rounded-md flex gap-2 ">
               <h4>New Video</h4>
              <MdKeyboardArrowDown className=' text-2xl'/>
            </button>
            
          
          </div>
          <div className='mr-4'>
            <FaRegCircleQuestion className='text-2xl text-gray-400'/>
          </div>
          <div className="mr-4">
            <button >
            <FaRegBell className="text-gray-600 text-xl mt-2" />
            </button>
          </div>
          <div>
            <img
              src="https://th.bing.com/th?id=OIP.Lpx9j83qR_cfQuaPHuvwWQHaHw&w=244&h=255&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
              alt="User Profile"
              className="w-12 h-12 rounded-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
