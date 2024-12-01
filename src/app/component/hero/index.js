import React from 'react';
import { FaArrowCircleDown } from "react-icons/fa";

const Index = () => {
  return (
    <div 
      className="h-[500px] flex items-center justify-around p-10 text-white" 
      style={{ 
        backgroundImage: "url('/bg.jpg')", 
        backgroundSize: "cover", 
        backgroundPosition: "center" 
      }}
    >
      {/* Left Content */}
      <div className="max-w-md flex flex-col justify-center">
        <h1 className="text-3xl font-bold">
          The First Digital Currency You Can Mine on Your Phone
        </h1>
        <p className="mt-4">
          Start mining Pi cryptocurrency today with our free, energy-light mobile app!
        </p>
        <button 
          className="mt-6 text-[#fbb44a] hover:text-white hover:bg-[#fbb44a] 
                     font-bold border border-[#fbb44a] rounded-lg px-5 py-2 
                     flex items-center gap-4 w-[250px]"
        >
          activate by pi-market <FaArrowCircleDown />
        </button>
      </div>

      {/* Right Content */}
      <div className="w-1/3 flex items-center justify-center">
        <img 
          src="/mobileimg.PNG" 
          alt="Pi Network" 
          className="max-h-full max-w-full rounded-lg shadow-lg" 
        />
      </div>
    </div>
  );
}

export default Index;
