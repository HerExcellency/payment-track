import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Slide from '../components/Slide';
import Traction from '../components/Traction';
import CustomerCard from '../components/CustomerCard';
import women from '../assets/Img/women.jpeg'
import Footer from '../components/Footer';
// import Footer from '../components/Footer';
const Home: React.FC = () => {
//   const navigate = useNavigate();
const handleButtonClick = () => {
  alert('Button clicked!');
};

  return (
    <>
        <Navbar />
        <HeroSection />
        <div className=" mx-auto py-12 px-12">
            {/* <h1 className="text-2xl font-bold mb-4">Responsive Image Component</h1> */}
            <Slide />
        </div>
        <div>
          
          <Traction />
        </div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <CustomerCard
            imgSrc= {women}
            imgAlt="Example image"
            subhead="This is a Subhead"
            paragraph="This is a paragraph that describes something interesting about the image on the right. It provides more context and details."
            buttonText="Click Me"
            onButtonClick={handleButtonClick}
          />
        </div>
        <Footer />
        </>
);
}

export default Home;
