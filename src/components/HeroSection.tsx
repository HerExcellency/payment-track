import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import ImageButton from './buttons';
import { useNavigate } from 'react-router-dom';
// import Logo from '../assets/react.svg'
import hand from '../assets/Img/handCardTwo.png'
// import google from '../assets/icons/playstore.png'
import playstore from '../assets/icons/playstoreWhite.png'
import applesvg from '../assets/icons/app.svg'
import chevron from '../assets/icons/right-chevron.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const redirectToSignup = () => {
    navigate("/signup");
  }

  const redirectToSignin = () => {
    navigate("/signin");
  }

  useEffect(() => { 
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row  lg:flex-row items-center justify-between px-12 " style={{ minHeight: '80vh', marginTop: '100px' }}>
      <div className="flex-1 lg:p-6 md:p-12 lg:w-1/2 items-left mt-8">
        
        <h2 className=" md:text-5xl text-gray-800 text-left text-3xl lg:text-5xl  mb-4 font-manrope text-48 leading-56 font-manrope font-extrabold leading-tight tracking-normal lg:text-left" data-aos="fade-down-right" data-aos-duration="1000">
          
          <span className="hidden sm:inline">Build and scale your app</span>
          <span className="sm:hidden">Build and scale<br />your app</span>
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 text-left lg:text-left" data-aos="zoom-in-right">
          Your launchpad for customising tailored solutions.
        </p>
        
        <ul className='' data-aos="zoom-in-right">
          <li className="text-sm text-gray-600 py-2 flex justify-start lg:justify-start items-center">
            <img src={chevron} alt='' className='pr-4' style={{maxWidth: '6%'}}/>
            Pre-designed high performing templates 
          </li>
          <li className="text-sm text-gray-600 py-2 flex justify-start lg:justify-start items-center">
            <img src={chevron} alt='' className='pr-4'style={{maxWidth: '6%'}} />
            On demand development at low cost
          </li>
          <li className="text-sm text-gray-600 py-2 flex justify-start lg:justify-start items-center">
            <img src={chevron} alt='' className='pr-4' style={{maxWidth: '6%'}}/>
            CTO friendly; No tech knowledge required
          </li>
        </ul>
        <div className='flex justify-start'>
        <ImageButton
          alt="Apple Button"
          imgSrc= {applesvg}
          tinyPara='Download on'
          placeholder=" Appstore"
          className={` flex lg:inline-flex sm:inline-flex text-white  bg-familyBlue mt-12 mb-6 mr-2`}
          onClick={() => { redirectToSignin() }}
        />
        <ImageButton
          alt="Google Button"
          imgSrc= {playstore}
          tinyPara='Download on'
          placeholder="Google"
          className={` flex lg:inline-flex sm:inline-flex text-white bg-familyBlue mt-12 mb-6`}
          onClick={() => { redirectToSignup() }}
        />
        </div>
        {/* <p className="font-extrabold text-sm mt-6 mb-2 text-left lg:text-left">TRUSTED BY</p>
        <div className="flex justify-evenly lg:justify-start md:justify-evenly items-center space-x-0 md:space-x-4 " data-aos="zoom-in-right">
          <img src={Logo} alt="Antlers Logo" className="my-4 md:my-0 mx-2 lg:mx-0  " />
          <img src={Logo} alt="Google Logo" className="my-4 md:my-0 mx-6 lg:mx-0" />
          <img src={Logo} alt="AWS Logo" className="my-4 md:my-0 mx-2 lg:mx-0 " />
        </div> */}
      </div>
      <div className="flex-1 p-6 lg:w-1/2" data-aos="zoom-in-down" data-aos-duration="1000">
        {/* Replace the src with your image path */}
        <img src={hand} alt="Hero" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}

export default HeroSection;
