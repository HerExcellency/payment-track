import React from 'react';
import mockPhone from '../assets/Img/mockImage.png'
// import './tailwind.css'; // Ensure this import is present to apply Tailwind styles

const Traction: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-24 px-12 ">
            {/* First Column */}
            <div className="flex flex-col space-y-4 h-full">
                <div className="flex-grow p-4 rounded lg:text-right grid content-center py-4 lg:pl-20 pr-4 ">
                    <h1 className="font-special font-bold text-4xl colorCode">1.</h1>
                    <h3 className="font-medium text-2xl">Lorem Ipsum</h3>
                    <p className="text-md">Na you knwo wetin you dey think of and talk about as you can see e no concern me</p>
                </div>
                <div className="flex-grow p-4 rounded lg:text-right grid content-center py-4 lg:pl-20 pr-4">
                    <h1 className="font-special font-bold text-4xl colorCode">2.</h1>
                    <h3 className="font-medium text-2xl">Lorem Ipsum</h3>
                    <p className="text-md">Na you knwo wetin you dey think of and talk about as you can see e no concern me</p>
                </div>
            </div>

            {/* Second Column */}
            <div className="row-span-2 h-[80vh]">
                <img 
                    src= {mockPhone} 
                    alt="Placeholder" 
                    className=" object-contain rounded mx-auto"
                />
            </div>

            {/* Third Column */}
            <div className="flex flex-col space-y-4 lg:h-[80vh]">
                <div className="flex-grow p-4 rounded lg:text-left grid content-center py-4 lg:pr-20 pl-4">
                    <h1 className="font-special font-bold text-4xl colorCode" ><b style={{ color: '#052650'}}>3.</b></h1>
                    <h3 className="font-medium text-2xl">Lorem Ipsum</h3>
                    <p className="text-md">Na you knwo wetin you dey think of and talk about as you can see e no concern me</p>
                </div>
                <div className="flex-grow p-4 rounded lg:text-left grid content-center py-4 lg:pr-20 pl-4">
                    <h1 className="font-special font-bold text-4xl colorCode">4.</h1>
                    <h3 className="font-medium text-2xl">Lorem Ipsum</h3>
                    <p className="text-md">Na you knwo wetin you dey think of and talk about as you can see e no concern me</p>
                </div>
            </div>
        </div>
    );
};

export default Traction;
