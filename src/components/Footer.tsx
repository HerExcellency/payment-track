import { Link } from "react-router-dom";
import React from 'react'; 
import Logos from '../assets/react.svg' 
// import Antler from '../assets/Image/Antler.png'


const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 pt-12 pb-4 py-16 px-4 lg:px-24">
      <div className="container mx-auto flex flex-wrap justify-between w-full">
        
         <div className="grid sm:text-left sm:w-full lg:w-1/2 sm:mb-6">
            <div className=" mb-10">
                <div className="mb-4">
                  <img src={Logos} alt="" style={{maxWidth: '23%'}}/>
                </div>
                <p className="pr-4">Buildas is a text-to-software platform that allows any business to effortlessly plan, customise, and maintain software with AI. </p>
              </div>
              {/* <div className="flex">
                  <p className="mr-3">We are backed by</p>
                  <img className="mb-4" src={Antler} alt="" />
              </div> */}
            </div>
        <div className="lg:w-1/3 sm:hidden hidden"></div>
        <div className="flex space-x-4 sm:w-full  lg:w-1/3 ">
          <div className="calib mb-4 w-full sm:w-full sm:w-1/2 lg:w-1/2">
              <h3 className="text-lg font-semibold mb-2 ">Product</h3>
              <ul>
                  {/* <li >
                      <a href="#" className="text-gray-600 hover:text-gray-300">
                      Templates
                      </a>
                  </li> */}
                  {/* <li >
                      <a href="#" className="text-gray-600 hover:text-gray-300">
                      Solutions
                      </a>
                  </li>   */}
                  <li >
                      <Link to="/Plans" className="text-gray-600 hover:text-gray-300">
                        Pricing
                      </Link>
                  </li>
                  {/* <li >
                      <a href="#" className="text-gray-600 hover:text-gray-300">
                      Blog
                      </a>
                  </li> */}
              </ul>
          </div>
          <div className="mx-6"></div>
          <div className="calib mb-4 w-full sm:w-full sm:w-1/2 lg:w-1/2">
              <h3 className="text-lg font-semibold mb-2">Company</h3>
              <ul>
                  <li >
                      <Link to="/AboutUs" className="text-gray-600 hover:text-gray-300">
                        About Us
                      </Link>
                  </li>
                  <li >
                      <Link to="/Career" className="text-gray-600 hover:text-gray-300">
                        Careers
                      </Link>
                  </li>
                  <li >
                      <Link to="/Buildas-Policy" className="text-gray-600 hover:text-gray-300">
                      Privacy Policy
                      </Link>
                  </li>
                  <li >
                      <Link to="/Buildas-Terms" className="text-gray-600 hover:text-gray-300">
                      Terms & Conditions
                      </Link>
                  </li>
              </ul>
          </div>
        </div>
      </div>
        <footer className="w-full grid grid-cols-1 place-items-center lg:flex lg:justify-between mt-12 py-5 border-t border-gray-200">
          <div className="order-last lg:order-none">
              <p>© 2024. All rights reserved, Buildas</p>
          </div>
          <div className="order-first lg:order-none sm:mb-5">
              <div className="flex space-x-8 mb-10 lg:mb-0">
                  {/* <a href="#" className="text-gray-600 hover:text-gray-400 text-xl lg:text-base"><i className="fab fa-facebook"></i></a>
                  <a href="#" className="text-gray-600 hover:text-gray-400 text-xl lg:text-base"><i className="fab fa-twitter"></i></a> */}
                  <a href="//www.instagram.com/buildas_africa/" className="text-gray-600 hover:text-gray-400 text-xl lg:text-base"><i className="fab fa-instagram"></i></a>
                  <a href="//www.linkedin.com/company/buildas/" className="text-gray-600 hover:text-gray-400 text-xl lg:text-base"><i className="fab fa-linkedin"></i></a>
              </div>
          </div>
      </footer>
    </footer>
  );
};

export default Footer;