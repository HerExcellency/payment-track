import React, { useState  } from 'react';
import Logo from "../assets/react.svg";
import ImageButton from './buttons'; 

interface NavbarProps {
  userId?: string;
}

const Navbar: React.FC<NavbarProps> = ({ userId }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  return (
    <nav className="bg-white px-4 lg:px-12 fixed w-full top-0 z-50 border-b border-slate-100">
      <div className=" mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex ">
              <a href="/" className="flex items-center py-4 px-2">
                <img src={Logo} alt="Logo" className="h-8 mr-2" />
              </a>
          </div>
          <div className="hidden md:flex items-center space-x-7 ">
            <div className="hidden md:flex items-center space-x-1">
            
              <a href="#/plans" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Pricing</a>
              <a href="/#/AboutUs" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About Us</a>
              <a href="/#/ContactUs" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact Us</a>
            </div>
            
            {!userId ? (
              <ImageButton
              alt="Building Button"
              placeholder="Sign Up"
              className={` flex lg:inline-flex sm:inline-flex text-gray-600  hover:bg-blue-600 hover:text-white   mr-2`}
              onClick={() => window.location.href = "/#/signup"}
            />
              
            ) : ( 
              <ImageButton
                alt="Dashboard Button"
                placeholder="Log In"
                className="py-2 px-2 font-medium  text-gray-600  hover:bg-blue-600 transition duration-300"
                onClick={() => window.location.href = '/#/signin'}
              />
            )}
            {!userId ? (
              <ImageButton
                alt="Start Building Button"
                placeholder="Start Building"
                className="py-2 px-2 font-medium text-white bg-familyBlue rounded hover:bg-blue-600 transition duration-300"
                onClick={() => window.location.href = "/#/signup"}
              />
            ) : (
              <ImageButton
                alt="Dashboard Button"
                placeholder="Build App"
                className="py-2 px-2 font-medium text-white bg-familyBlue rounded hover:bg-blue-600 transition duration-300"
                onClick={() => window.location.href = '/#/signin/'}
              />
            )}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
          
            <button className="outline-none mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pb-3 px-6`}>
        {/* <a href="#/templates" className="block text-sm px-2 py-4 text-gray-700 hover:bg-gray-200">Templates</a> */}
        <a href="#/plans" className="block text-sm px-2 py-4 text-gray-700 hover:bg-gray-200">Pricing</a>
        <a href="/#/AboutUs" className="block text-sm px-2 py-4 text-gray-700 hover:bg-gray-200">About Us</a>
        <a href="/#/ContactUs" className="block text-sm px-2 py-4 text-gray-700 hover:bg-gray-200">Contact Us</a>
        {!userId ? (
              <ImageButton
              alt="Building Button"
              placeholder="Sign Up"
              className={` flex lg:inline-flex sm:inline-flex bg-gray-200 text-gray-600  hover:bg-blue-600 hover:text-white mb-2  mr-2`}
              onClick={() => window.location.href = "/#/signup"}
            />
              
            ) : (
              <ImageButton
                alt="Dashboard Button"
                placeholder="Log In" 
                className="py-2 px-2 font-medium   rounded mb-2 bg-gray-200 text-gray-600 hover:bg-blue-600 transition duration-300"
                onClick={() => window.location.href = '/#/signin'}
              />
            )} 
        {!userId && (
          <button
            onClick={() => window.location.href = "/#/signup"}
            className="block text-sm px-4 py-2 text-white bg-familyBlue hover:bg-blue-600"
          >
            Start Building
          </button>
        )}
        {userId && (
          <button
            onClick={() => window.location.href = 'https://platform.buildas.io'}
            className="block text-sm px-4 py-2 text-white bg-familyBlue hover:bg-blue-600"
          >
            Build App
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
