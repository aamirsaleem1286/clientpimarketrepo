import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const PiBrowser = () => {
    const iconData = [
        { icon: "/img2.jpg", label: 'Chat', link: "/" },
        { icon: "/img2.jpg", label: 'Wallet', link: "/wallet" },
        { icon: "/img3.jpg", label: 'Brainstorm', link: "/" },
        { icon: "/img4.jpg",  label: 'Mine', link: "/" },
        { icon: "/img5.jpg",  label: 'Blockchain', link: "/" },
        { icon: "/img6.jpg",  label: 'Develop', link: "/" },
        { icon: "/img7.jpg",  label: 'KYC', link: "/" },
        { icon:"/img8.jpg",  label: 'FireSide', link: "/" },
        { icon: "/img9.jpg",  label: 'Profile', link: "/" },
    ];

    return (
        <div className="text-2xl font-bold">
          <div className='bg-[#8A348E] flex items-center justify-center'>
            <Link href="/" className='flex items-center'>
          <Image src="/logoImage.PNG" alt="Next.js Logo" width={40} height={30} />
          <h2 className="mx-3 text-[18px] sm:text-[18px] lg:text-[24px] text-white leading-tight">
          Home
          </h2>
          </Link>
          </div>
        <div className="flex flex-col items-center">
        <Link href="/" >
        <div className='flex item-center justify-center'>
          <Image src="/logoImage.PNG" alt="Next.js Logo" width={100} height={60} />
          </div>
          <h2 className="mx-3 text-[18px] sm:text-[18px] lg:text-[35px] text-[#f4af47] leading-tight">
            Welcome to the Pi Browser
          </h2>
          </Link>
        </div>
      
        {/* Parent container using flexbox */}
        <div className="flex flex-wrap justify-center lg:gap-4 mt-8 mx-auto w-full max-w-[400px]">
          {iconData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-[rgb(138,52,142)] w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/3 max-w-[120px]"
            >
                {item.link ? (
                  <Link
                    href={item.link}
                    className="flex items-center gap-2 sm:gap-4 w-full justify-center"
                    aria-label={`Navigate to ${item.label}`}
                  >
                    <Image src={item.icon} width={60} height={40}/>
                  </Link>
                ) : (
                  <span>{item.icon}</span>
                )}
           
              <p className="mt-[4px] text-[0.8rem]">{item.label}</p>
            </div>
          ))}
       <button className="font-sans mt-8 font-semibold flex gap-2 items-center text-sm sm:text-base bg-[#8a348e] text-white w-[full] sm:w-auto py-2 px-4 sm:py-3 sm:px-6 rounded-md hover:bg-opacity-90 transition sm:rounded-lg sm:py-2 sm:px-4 md:w-auto md:py-3 md:px-5 lg:w-auto lg:py-4 lg:px-6 m-2">
       <Link href="/" className='flex items-center'>
       <Image src="/check.PNG" width={40} height={40} className="text-white" />  Explore The Testnet Ecosystem 
</Link>
</button>

        </div>
 
      </div>
    
    
    );
}

export default PiBrowser;
