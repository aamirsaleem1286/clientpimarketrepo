import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaComments, FaWallet, FaBrain, FaGem, FaBlockchain, FaCode, FaIdCard, FaFire, FaUser } from 'react-icons/fa';
import { SiBlockchaindotcom } from "react-icons/si";

const PiBrowser = () => {
    const iconData = [
        { icon: <FaComments size={30} />, label: 'Chat', link: "/" },
        { icon: <FaWallet size={30} />, label: 'Wallet', link: "/wallet" },
        { icon: <FaBrain size={30} />, label: 'Brainstorm', link: "/" },
        { icon: <FaGem size={30} />, label: 'Mine', link: "/" },
        { icon: <SiBlockchaindotcom size={30} />, label: 'Blockchain', link: "/" },
        { icon: <FaCode size={30} />, label: 'Develop', link: "/" },
        { icon: <FaIdCard size={30} />, label: 'KYC', link: "/" },
        { icon: <FaFire size={30} />, label: 'FireSide', link: "/" },
        { icon: <FaUser size={30} />, label: 'Profile', link: "/" },
    ];

    return (
        <div className="text-2xl font-bold">
        <div className="flex flex-col items-center">
          <Image src="/logo.png" alt="Next.js Logo" width={200} height={120} />
          <h2 className="mx-3 text-[18px] sm:text-[18px] lg:text-[35px] text-[#f4af47] leading-tight">
            Welcome to the Pi Browser
          </h2>
        </div>
      
        {/* Parent container using flexbox */}
        <div className="flex flex-wrap justify-center lg:gap-4 mt-8 mx-auto w-full max-w-[400px]">
          {iconData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-[rgb(138,52,142)] w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/3 max-w-[120px]"
            >
              <div className="border border-black w-12 h-12 rounded-xl flex justify-center items-center">
                {item.link ? (
                  <Link
                    href={item.link}
                    className="flex items-center gap-2 sm:gap-4 w-full justify-center"
                    aria-label={`Navigate to ${item.label}`}
                  >
                    {item.icon}
                  </Link>
                ) : (
                  <span>{item.icon}</span>
                )}
              </div>
              <p className="mt-[4px] text-[0.8rem]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    
    
    );
}

export default PiBrowser;
