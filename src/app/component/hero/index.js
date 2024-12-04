import Link from 'next/link';
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
      <div className="max-w-md mx-auto flex flex-col justify-center text-center p-4 sm:p-6 md:p-8">
  <h1 className="text-2xl sm:text-3xl font-bold " style={{marginTop: "60px"}}>
    The First Digital Currency You Can Mine on Your Phone
  </h1>
  <p className="mt-4 text-sm sm:text-base">
    Start mining Pi cryptocurrency today with our free, energy-light mobile app!
  </p>
  <button
  className="mt-6 text-[#fbb44a] hover:text-white hover:bg-[#fbb44a] 
             font-bold border border-[#fbb44a] rounded-lg px-4 py-2 
             flex items-center gap-2 sm:gap-4 w-full sm:w-[250px] mx-auto
             text-sm sm:text-base"
>
  <Link 
    href="/wallet" 
    className="flex items-center gap-2 sm:gap-4 w-full justify-center"
  >
    Activate by Pi-Market <FaArrowCircleDown size={28} />
  </Link>
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
