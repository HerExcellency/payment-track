import React from 'react';

interface CardProps {
  imgSrc: string;
  imgAlt: string;
  subhead: string;
  paragraph: string;
  buttonText: string;
  onButtonClick: () => void;
}

const CustomerCard: React.FC<CardProps> = ({ imgSrc, imgAlt, subhead, paragraph, buttonText, onButtonClick }) => {
  return (
    <div className="max-w-6xl mx-auto  bg-white shadow-lg flex flex-col md:flex-row rounded-lg" style={{ width: '80vw' }}>
      <div className="md:flex-1 p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4">{subhead}</h2>
        <p className="text-gray-700 mb-6 lg:mr-15">{paragraph}</p>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 lg:w-1/3"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
      <div className="md:flex-1">
        <img src={imgSrc} alt={imgAlt} className="w-full h-full object-cover rounded-r-lg" />
      </div>
    </div>
  );
};

export default CustomerCard;
